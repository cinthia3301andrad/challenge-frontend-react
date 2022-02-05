import axios from 'axios'
import md5 from 'md5'

const baseURL = 'http://gateway.marvel.com/v1/public'

const publicKey = '8824d8ec207997cf271919ebe07530b4'
const privateKey = '308d96a183b31bbdf52c20e28bb3d1b15a344883'

const time = Number(new Date())
const hash = md5(time + privateKey + publicKey)

export const api = axios.create({
  baseURL,
  params: {
    ts: time,
    apiKey: publicKey,
    hash
  }
})
