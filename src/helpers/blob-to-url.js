import {SUPPORTS_CREATE_OBJECT_URL} from '../supports.js'
import {readAsDataURL} from './file-reader.js'
import {URL} from './global-this.js'

const toURL = SUPPORTS_CREATE_OBJECT_URL ? URL.createObjectURL : readAsDataURL

export default toURL
