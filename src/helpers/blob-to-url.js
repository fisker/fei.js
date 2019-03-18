import {URL} from './global-this'
import {readAsDataURL} from './file-reader'

const blobToUrl = URL ? URL.createObjectURL : readAsDataURL

export default blobToUrl
