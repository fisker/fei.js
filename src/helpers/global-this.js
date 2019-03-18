// eslint-disable-next-line no-new-func
const globalThis = new Function('return this')()

const {Uint8Array, atob, Blob, document, DataView} = globalThis
const URL = globalThis.URL || globalThis.webkitURL

export default globalThis
export {atob, Uint8Array, Blob, URL, document, DataView}
