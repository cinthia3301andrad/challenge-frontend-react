import axios from 'axios'
import md5 from 'md5'

const publickey = '8824d8ec207997cf271919ebe07530b4'
const privatekey = '308d96a183b31bbdf52c20e28bb3d1b15a344883'

const ts = new Date().getTime()
const stringToHash = ts + privatekey + publickey
const hash = md5(stringToHash)

export const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts,
    apikey: publickey,
    hash
  }
})
