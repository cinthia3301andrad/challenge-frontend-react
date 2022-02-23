import { useEffect, useRef, useState } from 'react'

import IconSearch from '../../assets/images/search_24px.svg'

import { useSearch } from '../../hooks/useSearch'
import { getCharactersDefault } from '../../services/utils/getCharactersDefault'

import { ICharacters } from '../../types/@general'
import { api } from '../../services/api'

import { Container } from './styles'
import { inputStringFormat } from '../../shared/utils/format'

type SearchInputProps = {
  onCharacters: (value: ICharacters[]) => void;
  onTotalCharacters: (value: number) => void;
  setOffset: (value: number) => void;
};

function SearchInput({
  onCharacters,
  onTotalCharacters,
  setOffset
}: SearchInputProps) {
  const { textSearch, setTextSearch } = useSearch()
  const timeoutId = useRef() as React.MutableRefObject<any>

  const [isInitialSearch, setIsInitialSearch] = useState(true)

  async function handleGetCharacter() {
    const response = await getCharactersDefault({ limit: 8 })
    onCharacters([...response.results])
    onTotalCharacters(response.total)
  }

  async function handleChangeSearch(text: string) {
    try {
      setTimeout(async () => {
        const { data } = await api.get('characters', {
          params: {
            nameStartsWith: text,
            limit: 8
          }
        })
        onCharacters([...data.data.results])
        onTotalCharacters(data.data.total)
      }, 500)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  useEffect(() => {
    if (!textSearch.trim()) return
    if (isInitialSearch) {
      setOffset(0)
      setIsInitialSearch(false)
    }
    if (textSearch === '') {
      setIsInitialSearch(true)
    } else {
      clearTimeout(timeoutId.current)

      timeoutId.current = setTimeout(() => {
        handleChangeSearch(textSearch)
      }, 800)
    }
  }, [textSearch])

  return (
    <Container>
      <input
        type="text"
        value={textSearch}
        onChange={(event) => {
          if (event.target.value === '') handleGetCharacter()
          setTextSearch(inputStringFormat(event.target.value))
        }}
      />
      <span>
        <img src={IconSearch} alt="icon search" />
      </span>
    </Container>
  )
}
export default SearchInput
