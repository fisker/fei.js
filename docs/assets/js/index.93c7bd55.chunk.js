(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(t,r,n){"use strict";var e=n(2);n.o(e,"readAsArrayBuffer")&&n.d(r,"readAsArrayBuffer",function(){return e.readAsArrayBuffer}),n.o(e,"readAsDataURL")&&n.d(r,"readAsDataURL",function(){return e.readAsDataURL})},function(t,r,n){(function(t){function n(t,r){for(var n=0,e=t.length-1;e>=0;e--){var i=t[e];"."===i?t.splice(e,1):".."===i?(t.splice(e,1),n++):n&&(t.splice(e,1),n--)}if(r)for(;n--;n)t.unshift("..");return t}var e=/^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,i=function(t){return e.exec(t).slice(1)};function o(t,r){if(t.filter)return t.filter(r);for(var n=[],e=0;e<t.length;e++)r(t[e],e,t)&&n.push(t[e]);return n}r.resolve=function(){for(var r="",e=!1,i=arguments.length-1;i>=-1&&!e;i--){var a=i>=0?arguments[i]:t.cwd();if("string"!==typeof a)throw new TypeError("Arguments to path.resolve must be strings");a&&(r=a+"/"+r,e="/"===a.charAt(0))}return(e?"/":"")+(r=n(o(r.split("/"),function(t){return!!t}),!e).join("/"))||"."},r.normalize=function(t){var e=r.isAbsolute(t),i="/"===a(t,-1);return(t=n(o(t.split("/"),function(t){return!!t}),!e).join("/"))||e||(t="."),t&&i&&(t+="/"),(e?"/":"")+t},r.isAbsolute=function(t){return"/"===t.charAt(0)},r.join=function(){var t=Array.prototype.slice.call(arguments,0);return r.normalize(o(t,function(t,r){if("string"!==typeof t)throw new TypeError("Arguments to path.join must be strings");return t}).join("/"))},r.relative=function(t,n){function e(t){for(var r=0;r<t.length&&""===t[r];r++);for(var n=t.length-1;n>=0&&""===t[n];n--);return r>n?[]:t.slice(r,n-r+1)}t=r.resolve(t).substr(1),n=r.resolve(n).substr(1);for(var i=e(t.split("/")),o=e(n.split("/")),a=Math.min(i.length,o.length),u=a,c=0;c<a;c++)if(i[c]!==o[c]){u=c;break}var f=[];for(c=u;c<i.length;c++)f.push("..");return(f=f.concat(o.slice(u))).join("/")},r.sep="/",r.delimiter=":",r.dirname=function(t){var r=i(t),n=r[0],e=r[1];return n||e?(e&&(e=e.substr(0,e.length-1)),n+e):"."},r.basename=function(t,r){var n=i(t)[2];return r&&n.substr(-1*r.length)===r&&(n=n.substr(0,n.length-r.length)),n},r.extname=function(t){return i(t)[3]};var a="b"==="ab".substr(-1)?function(t,r,n){return t.substr(r,n)}:function(t,r,n){return r<0&&(r=t.length+r),t.substr(r,n)}}).call(this,n(6))},function(t,r,n){t.exports=function(){"use strict";var t=new Function("return this")(),r=t.FileReader,n=t.Promise,e=Array.prototype.slice,i=["ArrayBuffer","Text","DataURL","BinaryString"];function o(t){var i=e.call(arguments,1);return new n(function(n,e){var o=new r;o.addEventListener("load",function(){return n(o.result)}),o.addEventListener("error",function(){return e(o.error)}),t.apply(o,i)})}function a(){}for(var u=0;u<i.length;u++){var c="readAs".concat(i[u]),f=o.bind(null,r.prototype[c]);a.prototype[c]=f,a[c]=f}return a}()},function(t,r,n){t.exports=function(){"use strict";var t=new Function("return this")(),r=1165519206,n=18761,e=19789,i=42,o=8;function a(t,a){if(t.getUint32(a)!==r)return!1;var u,c=a+6,f=function(t,r){var i=t.getUint16(r);return i!==e&&(i===n||null)}(t,c);if(!0!==(u=f)&&!1!==u)return!1;if(t.getUint16(c+2,f)!==i)return!1;var l=t.getUint32(c+4,f);return!(l<o)&&{tiffOffset:c,littleEndian:f,firstIFDOffset:l}}var u=t.DataView;return function(t){var r=new u(t);if(!function(t){return 65496===t.getUint16(0)}(r))return null;var n=function(t){for(var r=t.byteLength,n=2;n<r;){if(255!==t.getUint8(n))return null;if(65505===t.getUint16(n))return n+4;n+=2,n+=t.getUint16(n)}return null}(r);return n?function(t,r){var n=a(t,r);if(!n)return null;for(var e=n.tiffOffset,i=n.littleEndian,o=n.firstIFDOffset,u=t.getUint16(o,i),c=e+o,f=0;f<u;f++){var l=c+12*f+2;if(274===t.getUint16(l,i)){var s=t.getUint16(l+8,i);return s<1||s>8?null:s}}return null}(r,n):null}}()},function(t,r,n){"use strict";(function(t){var e=n(1);function i(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}var o,a=Object(e.join)(t,"../fixture/"),u=[].concat((o=Array.from({length:8},function(t,r){return{name:"image_".concat(r+1,".jpg"),orientation:r+1,type:"image/jpeg"}}),function(t){if(Array.isArray(t)){for(var r=0,n=new Array(t.length);r<t.length;r++)n[r]=t[r];return n}}(o)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(o)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()),[{name:"image_no_orientation.jpg",orientation:null,type:"image/jpeg"},{name:"image_unknown_orientation.jpg",orientation:null,type:"image/jpeg"},{name:"image_png.png",orientation:null,type:"image/png"}]).map(function(t){return function(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.forEach(function(r){i(t,r,n[r])})}return t}({},t,{file:Object(e.join)(a,t.name)})});r.a=u}).call(this,"/")},function(t,r,n){t.exports=n(7)},function(t,r){var n,e,i=t.exports={};function o(){throw new Error("setTimeout has not been defined")}function a(){throw new Error("clearTimeout has not been defined")}function u(t){if(n===setTimeout)return setTimeout(t,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(r){try{return n.call(null,t,0)}catch(r){return n.call(this,t,0)}}}!function(){try{n="function"===typeof setTimeout?setTimeout:o}catch(t){n=o}try{e="function"===typeof clearTimeout?clearTimeout:a}catch(t){e=a}}();var c,f=[],l=!1,s=-1;function h(){l&&c&&(l=!1,c.length?f=c.concat(f):s=-1,f.length&&v())}function v(){if(!l){var t=u(h);l=!0;for(var r=f.length;r;){for(c=f,f=[];++s<r;)c&&c[s].run();s=-1,r=f.length}c=null,l=!1,function(t){if(e===clearTimeout)return clearTimeout(t);if((e===a||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{e(t)}catch(r){try{return e.call(null,t)}catch(r){return e.call(this,t)}}}(t)}}function p(t,r){this.fun=t,this.array=r}function d(){}i.nextTick=function(t){var r=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)r[n-1]=arguments[n];f.push(new p(t,r)),1!==f.length||l||u(v)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=d,i.addListener=d,i.once=d,i.off=d,i.removeListener=d,i.removeAllListeners=d,i.emit=d,i.prependListener=d,i.prependOnceListener=d,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,r,n){"use strict";n.r(r);var e=/^image\//;var i=function(t){return e.test(t)},o="image/jpeg",a=[[!1,!1,0],[!0,!1,0],[!1,!1,180],[!1,!0,0],[!0,!1,90],[!1,!1,90],[!0,!1,-90],[!1,!1,-90]],u=a[0];var c=function(t){return t===o},f=n(3),l=n.n(f),s=n(0);var h,v=(h=function(t){return r=Object(s.readAsArrayBuffer)(t),n=l.a,e?n?n(r):r:(r&&r.then||(r=Promise.resolve(r)),n?r.then(n):r);var r,n,e},function(){for(var t=[],r=0;r<arguments.length;r++)t[r]=arguments[r];try{return Promise.resolve(h.apply(this,t))}catch(n){return Promise.reject(n)}}),p=new Function("return this")(),d=p.Uint8Array,m=p.atob,y=p.Blob,g=p.document,w=(p.DataView,p.Image),b=p.isFinite,j=p.Promise,A=p.createImageBitmap,O=p.OffscreenCanvas,x=p.URL||p.webkitURL;var T=function(t){return"function"===typeof t};var E=function(t){return null===t};var L=function(t){return!E(t)&&(T(t)||"object"===typeof t)},U=T(x),P=U&&T(x.createObjectURL),R=U&&T(x.revokeObjectURL),S=T(A),B=function(t){if(!T(t))return!1;var r=new t(1,1);if(!L(r)||!T(r.convertToBlob))return!1;var n=r.getContext("2d");return!(!L(n)||!T(n.drawImage))}(O),C=P?x.createObjectURL:s.readAsDataURL;var D=R?function(t){try{x.revokeObjectURL(t)}catch(r){}}:function(){};var I=function(t){return new j(function(r,n){var e=new w;e.src=t,e.addEventListener("load",function(){D(t),r(e)}),e.addEventListener("error",n)})},k=A;function F(t,r,n){return n?r?r(t):t:(t&&t.then||(t=Promise.resolve(t)),r?t.then(r):t)}var M=function(t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{return Promise.resolve(t.apply(this,r))}catch(e){return Promise.reject(e)}}}(function(t){return F(C(t),function(t){return F(I(t))})}),q=S?k:M;var H=function(t){var r=t.width,n=t.height;return{width:t.naturalWidth||r,height:t.naturalHeight||n}};function _(t,r){return!r||t<r?1:r/t}var z=function(t,r){var n=r.maxWidth,e=r.maxHeight,i=r.rotate,o=H(t),a=o.width,u=o.height;if(i){var c=[u,a];a=c[0],u=c[1]}var f=_(a,n),l=_(u,e);return Math.min(f,l,1)},W=Math.isFinite||b;var X=function(t){return"number"===typeof t&&W(t)&&t>0};function Y(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=[],e=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(c){i=!0,o=c}finally{try{e||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var J=function(t){var r=Y(Array.isArray(t)?t:[t,t],2),n=r[0],e=r[1];return{maxWidth:X(n)?n:void 0,maxHeight:X(e)?e:void 0}};function V(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=[],e=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(c){i=!0,o=c}finally{try{e||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var $=function(t,r,n){var e=V(a[r-1]||u,3),i=e[0],o=e[1],c=e[2],f=J(n),l=f.maxWidth,s=f.maxHeight,h=90===Math.abs(c),v=z(t,{maxWidth:l,maxHeight:s,rotate:h});return i||o||c||1!==v?{flipX:i,flipY:o,degree:c,rotate:h,scale:v}:null};var G=function(t,r){var n=r.width,e=r.height,i=r.flipX,o=r.flipY,a=i?n:0,u=o?e:0,c=i?-1:1,f=o?-1:1;t.translate(a,u),t.scale(c,f)},K=Math.PI/180;var N=function(t){return t*K};var Q=function(t,r){var n=r.width,e=r.height,i=r.degree,o=r.rotate;t.translate(n/2,e/2),t.rotate(N(i)),t.translate(-n/2,-e/2),o&&t.translate((n-e)/2,-(n-e)/2)};var Z=B?function(t,r){return new O(t,r)}:function(t,r){var n=g.createElement("canvas");return n.width=t,n.height=r,n};function tt(t,r){return function(t){if(Array.isArray(t))return t}(t)||function(t,r){var n=[],e=!0,i=!1,o=void 0;try{for(var a,u=t[Symbol.iterator]();!(e=(a=u.next()).done)&&(n.push(a.value),!r||n.length!==r);e=!0);}catch(c){i=!0,o=c}finally{try{e||null==u.return||u.return()}finally{if(i)throw o}}return n}(t,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var rt=function(t,r){var n=r.flipX,e=r.flipY,i=r.scale,o=r.rotate,a=r.degree,u=H(t),c=u.width,f=u.height,l=tt([c,f].map(function(t){return Math.floor(Math.max(1,t*i))}),2),s=l[0],h=l[1];if(o){var v=[h,s];s=v[0],h=v[1]}var p=Z(s,h),d=p.getContext("2d");return(n||e)&&G(d,{width:s,height:h,flipX:n,flipY:e}),a&&Q(d,{width:s,height:h,degree:a,rotate:o}),d.drawImage(t,0,0,c*i,f*i),p};var nt=function(t,r){var n=m(t.split(",")[1]),e=d.from(n,function(t){return t.charCodeAt(0)});return new y([e],{type:r})};var et=function(t,r){return T(t.toBlob)?function(t,r){var n=r.type,e=r.quality;return new Promise(function(r){return t.toBlob(r,n,e)})}(t,r):B&&T(t.convertToBlob)?function(t,r){var n=r.type,e=r.quality;return t.convertToBlob(n,e)}(t,r):function(t,r){var n=r.type,e=r.quality,i=t.toDataURL(n,e);return nt(i,n)}(t,r)},it={always:!1,quiet:!0,maxSize:1500,quality:void 0,fixOrientation:!0};var ot=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.assign(it,t)};function at(t,r,n){return r in t?Object.defineProperty(t,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[r]=n,t}function ut(t,r,n){return n?r?r(t):t:(t&&t.then||(t=Promise.resolve(t)),r?t.then(r):t)}var ct=function(t){return function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{return Promise.resolve(t.apply(this,r))}catch(e){return Promise.reject(e)}}}(function(t){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};r=function(t){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.forEach(function(r){at(t,r,n[r])})}return t}({},it,r);var n=(t||{}).type,e=void 0===n?"application/octet-stream":n;if(!i(e))return t;var o=r,a=o.fixOrientation,u=o.quality,f=o.maxSize,l=a&&c(e);return ut(l?v(t):0,function(r){return ut(q(t),function(n){var i=H(n),o=i.width,a=i.height;if(!o||!a)return t;var c=$(n,r,f);if(!c)return t;var l=rt(n,c);return ut(et(l,{type:e,quality:u}))})},!l)});ct.setDefaults=ot;var ft=ct,lt=n(4);function st(t,r,n){return n?r?r(t):t:(t&&t.then||(t=Promise.resolve(t)),r?t.then(r):t)}function ht(t){return new Promise(function(r){var n=new window.Image;n.addEventListener("load",function(){return r(n)}),n.src=t})}var vt=window.document.createElement("table");window.document.body.appendChild(vt),vt.innerHTML="<thead><tr><th>orignal</th><th>processed</th><th>time</th></tr></thead>";var pt=window.document.createElement("tbody");vt.appendChild(pt);var dt=!0,mt=!1,yt=void 0;try{for(var gt,wt=function(){var t,r=gt.value;(t=function(){r.name;var t=r.file,n=window.document.createElement("tr");pt.appendChild(n);var e=window.document.createElement("td");n.appendChild(e);var i=window.document.createElement("td");n.appendChild(i);var o=window.document.createElement("td");return n.appendChild(o),st(ht(t),function(r){return e.appendChild(r),st(window.fetch(t),function(t){return st(t.blob(),function(t){var r=window.performance.now();return st(ft(t,{maxSize:200,fixOrientation:!0}),function(t){return o.textContent="".concat((window.performance.now()-r).toFixed(2),"ms"),st(ht(window.URL.createObjectURL(t)),function(t){i.appendChild(t)})})})})})},function(){for(var r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];try{return Promise.resolve(t.apply(this,r))}catch(e){return Promise.reject(e)}})()},bt=lt.a[Symbol.iterator]();!(dt=(gt=bt.next()).done);dt=!0)wt()}catch(jt){mt=!0,yt=jt}finally{try{dt||null==bt.return||bt.return()}finally{if(mt)throw yt}}}],[[5,1]]]);