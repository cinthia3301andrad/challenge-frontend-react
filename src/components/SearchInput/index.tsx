import { useEffect, useState } from 'react'

import IconSearch from '../../assets/images/search_24px.svg'

import { useSearch } from '../../hooks/useSearch'
import { getCharactersDefault } from '../../services/utils/getCharactersDefault'

import { ICharacters } from '../../types/@general'
import { api } from '../../services/api'

import { Container } from './styles'

type SearchInputProps = {
    onCharacters: (value: ICharacters[]) => void;
    onTotalCharacters: (value: number) => void;
    setOffset: (value: number) => void;
}

function SearchInput({ onCharacters, onTotalCharacters, setOffset }: SearchInputProps) {
  const { textSearch, setTextSearch } = useSearch()

  const [isInitialSearch, setIsInitialSearch] = useState(true)

  async function handleGetCharacter() {
    const response = await getCharactersDefault({ limit: 8 })
    onCharacters([...response.results])
    onTotalCharacters(response.total)
  }

  async function handleChangeSearch(text: string) {
    try {
      const { data } = await api.get('characters', {
        params: {
          nameStartsWith: text,
          limit: 8
        }
      })
      onCharacters([...data.data.results])
      onTotalCharacters(data.data.total)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  useEffect(() => {
    if (isInitialSearch) {
      setOffset(0)
      setIsInitialSearch(false)
    }
    if (textSearch === '') {
      setIsInitialSearch(true)
    } else {
      handleChangeSearch(textSearch)
    }
  }, [textSearch])

  return (
        <Container>
            <input
                type="text"
                value={textSearch}
                onChange={(event) => {
                  if (event.target.value === '') handleGetCharacter()
                  setTextSearch(event.target.value)
                }}
            />
            <span>
             <img src={IconSearch} alt="icon search" />
            </span>
      </Container>
  )
}
export default SearchInput
