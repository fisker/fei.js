// eslint-disable-next-line import/no-extraneous-dependencies
import PromisifyFileReader from 'promisify-file-reader'

const {readAsDataURL, readAsArrayBuffer} = PromisifyFileReader

export {readAsDataURL, readAsArrayBuffer}
