import axios from 'axios'
import md5 from 'md5'

const publickey = process.env.REACT_APP_MARVEL_PUBLIC_KEY as string
const privatekey = process.env.REACT_APP_MARVEL_PRIVATE_KEY as string

const ts = new Date().getTime()
const stringToHash = ts + privatekey + publickey
const hash = md5(stringToHash)

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    ts,
    apikey: publickey,
    hash
  }
})
