import { api } from '../api'

interface CharactersParams {
    limit?: number;
}

export const getCharactersDefault = async (params?: CharactersParams) => {
  try {
    const { limit } = params ?? {}

    const { data } = await api.get('characters', {
      params: {
        limit: limit
      }
    })

    return data.data
  } catch (err) {
    return Promise.reject(err)
  }
}
