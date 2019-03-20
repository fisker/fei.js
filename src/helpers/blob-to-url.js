// eslint-disable-next-line import/no-extraneous-dependencies, import/extensions
import {readAsDataURL} from './file-reader'
import {SUPPORTS_CREATE_OBJECT_URL} from '../supports'
import {URL} from './global-this'

const toURL = SUPPORTS_CREATE_OBJECT_URL ? URL.createObjectURL : readAsDataURL

export default toURL
