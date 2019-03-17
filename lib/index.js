(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.fei = factory());
}(this, function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  }

  var defaults = {
    maxSize: 1500,
    quality: 0.95
  };

  var IMAGE_MIME = /^image\//;

  function isImage(mime) {
    return IMAGE_MIME.test(mime);
  }

  var JPEG_MIME = 'image/jpeg';
  var ORIENTATION_TRANSFORMS = [// [flip-x, flip-y, degree]
  [false, false, 0], // 1
  [true, false, 0], // 2
  [false, false, 180], // 3
  [false, true, 0], // 4
  [true, false, 90], // 5
  [false, false, 90], // 6
  [true, false, -90], // 7
  [false, false, -90]];
  var DEFAULT_TRANSFORM = ORIENTATION_TRANSFORMS[0];

  function isJPEG(mime) {
    return mime === JPEG_MIME;
  }

  var r = new Function("return this")(),
      e = r.FileReader,
      n = r.Promise,
      t = Array.prototype.slice,
      a = ["ArrayBuffer", "Text", "DataURL", "BinaryString"];

  function o(r) {
    var a = t.call(arguments, 1);
    return new n(function (n, t) {
      var o = new e();
      o.addEventListener("load", function () {
        return n(o.result);
      }), o.addEventListener("error", function () {
        return t(o.error);
      }), r.apply(o, a);
    });
  }

  function i() {}

  for (var u = 0; u < a.length; u++) {
    var l = "readAs".concat(a[u]),
        c = o.bind(null, e.prototype[l]);
    i.prototype[l] = c, i[l] = c;
  }

  var readAsDataURL = i.readAsDataURL,
      readAsArrayBuffer = i.readAsArrayBuffer;

  // https://github.com/dominictarr/exif-orientation-lite/blob/master/index.js
  function getOrientationFromBuffer(buffer) {
    var view = new DataView(buffer);

    if (view.getUint16(0, false) !== 0xffd8) {
      // not jpeg
      return;
    }

    var length = view.byteLength;
    var offset = 2;
    var marker;

    while (offset < length) {
      marker = view.getUint16(offset, false);
      offset += 2;

      if (marker === 0xffe1) {
        if (view.getUint32(offset += 2, false) !== 0x45786966) {
          return;
        }

        var little = view.getUint16(offset += 6, false) === 0x4949;
        offset += view.getUint32(offset + 4, little);
        var tags = view.getUint16(offset, little);
        offset += 2;

        for (var i = 0; i < tags; i++) {
          if (view.getUint16(offset + i * 12, little) === 0x0112) {
            return view.getUint16(offset + i * 12 + 8, little);
          }
        }
      } else if ((marker & 0xff00) !== 0xff00) {
        break;
      } else {
        offset += view.getUint16(offset, false);
      }
    }

    return;
  }

  function _async(f) {
    return function () {
      for (var args = [], i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      try {
        return Promise.resolve(f.apply(this, args));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }

  function _await(value, then, direct) {
    if (direct) {
      return then ? then(value) : value;
    }

    if (!value || !value.then) {
      value = Promise.resolve(value);
    }

    return then ? value.then(then) : value;
  }

  var getOrientation = _async(function (blob) {
    return _await(readAsArrayBuffer(blob), getOrientationFromBuffer);
  });

  var globalThis = new Function('return this')();

  var URL = globalThis.URL || globalThis.webkitURL;

  var blobToUrl = URL ? URL.createObjectURL : readAsDataURL;

  function isMaxSize(size) {
    return typeof size === 'number' && isFinite(size) && size > 0;
  }

  function parseMaxSize(_ref) {
    var maxWidth = _ref.maxWidth,
        maxHeight = _ref.maxHeight,
        maxSize = _ref.maxSize;

    if (isMaxSize(maxWidth) && isMaxSize(maxHeight)) {
      maxSize = {
        maxWidth: maxWidth,
        maxHeight: maxHeight
      };
    }

    if (Array.isArray(maxSize)) {
      maxWidth = maxSize[0];
      maxHeight = maxSize[1];
    } else if (typeof maxSize === 'number') {
      maxWidth = maxSize;
      maxHeight = maxSize;
    } else {
      var _maxSize = maxSize;
      var _maxSize$maxWidth = _maxSize.maxWidth;
      maxWidth = _maxSize$maxWidth === void 0 ? maxSize : _maxSize$maxWidth;
      var _maxSize$maxHeight = _maxSize.maxHeight;
      maxHeight = _maxSize$maxHeight === void 0 ? maxSize : _maxSize$maxHeight;
    }

    return {
      maxWidth: maxWidth,
      maxHeight: maxHeight
    };
  }

  var Promise$1 = globalThis.Promise;

  var Image = globalThis.Image;

  function revoke(url) {
    try {
      URL.revokeObjectURL(url);
    } catch (_unused) {}
  }

  function loadImage(url) {
    return new Promise$1(function (resolve, reject) {
      var img = new Image();
      img.src = url;

      img.onload = function () {
        revoke(url);
        resolve(img);
      };

      img.onerror = reject;
    });
  }

  function getImageSize(_ref) {
    var width = _ref.width,
        height = _ref.height,
        naturalWidth = _ref.naturalWidth,
        naturalHeight = _ref.naturalHeight;
    return {
      width: naturalWidth || width,
      height: naturalHeight || height
    };
  }

  function getScaleSize(image, maxSize, rotated) {
    var scale = 1;

    if (!maxSize) {
      return scale;
    }

    var maxWidth = maxSize.maxWidth,
        maxHeight = maxSize.maxHeight;

    var _getImageSize = getImageSize(image),
        width = _getImageSize.width,
        height = _getImageSize.height;

    if (rotated) {
      var _ref = [height, width];
      width = _ref[0];
      height = _ref[1];
    }

    if (maxWidth && width > maxWidth) {
      scale = Math.min(scale, maxWidth / width);
    }

    if (maxHeight && height > maxHeight) {
      scale = Math.min(scale, maxHeight / height);
    }

    return scale;
  }

  function getImageTransformInfo(image, orientation, maxSize) {
    var _ref = ORIENTATION_TRANSFORMS[orientation - 1] || DEFAULT_TRANSFORM,
        _ref2 = _slicedToArray(_ref, 3),
        flipX = _ref2[0],
        flipY = _ref2[1],
        degree = _ref2[2];

    var rotated = Math.abs(degree) === 90;
    var scale = getScaleSize(image, maxSize, rotated);

    if (flipX || flipY || degree || scale !== 1) {
      return {
        flipX: flipX,
        flipY: flipY,
        degree: degree,
        rotated: rotated,
        scale: scale
      };
    }

    return null;
  }

  var document = globalThis.document;

  // https://github.com/buunguyen/exif-orient/blob/master/exif-orient.js
  function flip(context, _ref) {
    var flipX = _ref.flipX,
        flipY = _ref.flipY;
    var canvas = context.canvas;
    var width = canvas.width;
    var height = canvas.height;
    var translateX = flipX ? width : 0;
    var translateY = flipY ? height : 0;
    var scaleX = flipX ? -1 : 1;
    var scaleY = flipY ? -1 : 1;
    context.translate(translateX, translateY);
    context.scale(scaleX, scaleY);
  }

  var ANGLE_PER_DEGREE = Math.PI / 180;

  function degreeToAngle(degree) {
    return degree * ANGLE_PER_DEGREE;
  }

  function rotate(context, degree) {
    var canvas = context.canvas;
    var width = canvas.width;
    var height = canvas.height;
    context.translate(width / 2, height / 2);
    context.rotate(degreeToAngle(degree));
    context.translate(-width / 2, -height / 2);

    if (Math.abs(degree) === 90) {
      context.translate((width - height) / 2, -(width - height) / 2);
    }
  }

  function imageToCanvas(image, _ref) {
    var flipX = _ref.flipX,
        flipY = _ref.flipY,
        scale = _ref.scale,
        rotated = _ref.rotated,
        degree = _ref.degree;
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');

    var _getImageSize = getImageSize(image),
        imageWidth = _getImageSize.width,
        imageHeight = _getImageSize.height;

    var width = imageWidth * scale;
    var height = imageHeight * scale;
    canvas.width = rotated ? height : width;
    canvas.height = rotated ? width : height;

    if (flipX || flipY) {
      flip(context, {
        flipX: flipX,
        flipY: flipY
      });
    }

    if (degree) {
      rotate(context, degree);
    }

    context.drawImage(image, 0, 0, image.width, image.height, 0, 0, width, height);
    return canvas;
  }

  function isFunction(x) {
    return typeof x === 'function';
  }

  var canvas = document.createElement('canvas');
  var CANVAS_TO_BLOB = isFunction(canvas.toBlob);

  var atob = globalThis.atob;

  var Blob = globalThis.Blob;

  function dataURLToBlob(data, type) {
    var bin = atob(data.split(',')[1]);
    var length = bin.length;
    var arr = new Uint8Array(length);
    forEach.call(bin, function (_, i) {
      arr[i] = bin.charCodeAt(i);
    });
    return new Blob([arr], {
      type: type
    });
  }

  function toBlob(canvas, _ref) {
    var type = _ref.type,
        quality = _ref.quality;
    return new Promise(function (resolve) {
      return canvas.toBlob(resolve, type, quality);
    });
  }

  function toDataURL(canvas, _ref2) {
    var type = _ref2.type,
        quality = _ref2.quality;
    var dataURL = canvas.toDataURL(type, quality);
    var blob = dataURLToBlob(dataURL, type);
    return blob;
  }

  var canvasToBlob = CANVAS_TO_BLOB ? toBlob : toDataURL;

  function _async$1(f) {
    return function () {
      for (var args = [], i = 0; i < arguments.length; i++) {
        args[i] = arguments[i];
      }

      try {
        return Promise.resolve(f.apply(this, args));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  }

  function _await$1(value, then, direct) {
    if (direct) {
      return then ? then(value) : value;
    }

    if (!value || !value.then) {
      value = Promise.resolve(value);
    }

    return then ? value.then(then) : value;
  }

  var processor = _async$1(function (blob, options) {
    options = _objectSpread({}, defaults, options);
    var maxSize = parseMaxSize(options);
    var type = blob.type;

    if (!isImage(type)) {
      return blob;
    }

    var _isJPEG = isJPEG(type);

    return _await$1(_isJPEG ? getOrientation(blob) : 0, function (orientation) {
      return _await$1(blobToUrl(blob), function (url) {
        return _await$1(loadImage(url), function (image) {
          var transform = getImageTransformInfo(image, orientation, maxSize);

          if (!transform) {
            return blob;
          }

          var canvas = imageToCanvas(image, transform);
          return _await$1(canvasToBlob(canvas, type, options.quality));
        });
      });
    }, !_isJPEG);
  });

  return processor;

}));
