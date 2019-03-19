import {SUPPORTS_CREATE_OBJECT_URL} from '../supports'
import {URL} from './global-this'
import {readAsDataURL} from './file-reader'

const toURL = SUPPORTS_CREATE_OBJECT_URL ? URL.createObjectURL : readAsDataURL

export default toURL
