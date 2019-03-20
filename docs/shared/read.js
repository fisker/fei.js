import {readFileSync} from 'fs'
import mem from 'mem'

export default mem(readFileSync)
