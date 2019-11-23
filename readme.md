# fei.js

[![gzip size](http://img.badgesize.io/https://unpkg.com/fei.js/dist/index.min.mjs?compression=gzip&style=flat-square)](http://img.badgesize.io/https://unpkg.com/fei.js/dist/index.min.mjs)

[![Travis](https://img.shields.io/travis/fisker/fei.js.svg?style=flat-square)](https://travis-ci.org/fisker/fei.js)
[![Codacy Badge](https://api.codacy.com/project/badge/Grade/f1c92423809b450e871e4812581f8fe6)](https://app.codacy.com/app/fisker/fei.js?utm_source=github.com&utm_medium=referral&utm_content=fisker/fei.js&utm_campaign=Badge_Grade_Settings)

[![devDependencies](https://img.shields.io/david/dev/fisker/fei.js.svg?style=flat-square)](https://david-dm.org/fisker/fei.js)
[![Issues](http://img.shields.io/github/issues/fisker/fei.js.svg?style=flat-square)](https://github.com/fisker/fei.js/issues)
[![Issues](https://img.shields.io/github/issues-pr/fisker/fei.js.svg?style=flat-square)](https://github.com/fisker/fei.js/pulls)
[![GitHub last commit](https://img.shields.io/github/last-commit/fisker/fei.js.svg?style=flat-square)](https://github.com/fisker/fei.js/commits)
[![GitHub Release Date](https://img.shields.io/github/release-date/fisker/fei.js.svg?style=flat-square)](https://github.com/fisker/fei.js/releases)

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![MIT license](https://img.shields.io/github/license/fisker/fei.js.svg?style=flat-square)](http://opensource.org/licenses/MIT)

## API

### fei(input[, options])

#### input

Type: `Blob`

#### options

Type: `Object`

##### options.always

Type: `Boolean`, Default: `false`

always process with canvas

##### options.fixOrientation

Type: `Boolean`, Default: `true`

detect `jpeg` orientation, and rotate if needed

##### options.maxWidth

Type: `Number`, Default: `1500`

maxWidth of image, set to `Infinity` to disable

##### options.maxHeight

Type: `Number`, Default: `1500`

maxHeight of image, set to `Infinity` to disable

##### options.quality

Type: `Number`, Default: `undefined`

`qualityArgument` for `HTMLCanvasElement#toBlob()`

see: <https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toBlob>

##### options.preferSmaller

Type: `Boolean`, Default: `false`

if no rotate and resize, compare original blob and result, returns smaller one

## Todo List

- [x] allow skip Orientation fix, via `fixOrientation`
- [x] support `OffscreenCanvas`
- [x] `quality` test
- [x] support `options.always`
- [x] support `options.preferSmaller`
- [ ] support `Worker`
