import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import CardHeroes from '../../components/CardHeroes'

import { ResponseDataAPICharacters } from '../../types/@responseAPI'
import { api } from '../../services/api'

import Pagination from '../../components/Pagination'
import SearchInput from '../../components/SearchInput'

import { getCharactersDefault } from '../../services/utils/getCharactersDefault'
import { useSearch } from '../../hooks/useSearch'

import { Container, ContainsMain, ContainsSearch } from './styles'

function Home() {
  const { textSearch } = useSearch()

  const [characters, setCharacters] = useState<ResponseDataAPICharacters[]>([])
  const [totalCharacters, setTotalCharacters] = useState(0)
  const [offset, setOffset] = useState(0)

  const limit = 8

  async function handlePagination(page: number) {
    try {
      const requestedOffset = (page - 1) * limit
      const paramsName = textSearch.length > 0
        ? {
            nameStartsWith: textSearch,
            limit: limit,
            offset: requestedOffset
          }
        : {
            limit: limit,
            offset: requestedOffset
          }
      const { data } = await api.get('characters', {
        params: paramsName
      })
      setCharacters([...data.data.results])
      setOffset(requestedOffset)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  async function handleGetCharacter() {
    const response = await getCharactersDefault({ limit })

    setCharacters([...response.results])
    setTotalCharacters(response.total)
  }

  useEffect(() => {
    handleGetCharacter()
  }, [])

  return (

      <Container>
        <Header />
        <ContainsSearch>
          <div className="container-search">
            <h1>Explore the most powerful characters in Marvel</h1>
            <SearchInput
              onCharacters={setCharacters}
              onTotalCharacters={setTotalCharacters}
              setOffset={setOffset}
            />
          </div>
        </ContainsSearch>

        <ContainsMain>
          <section className="content-characters">
            {characters?.map((character) => {
              return (
                <CardHeroes
                  key={character.id}
                  id={character.id}
                  name={character.name}
                  description={character.description}
                  thumbnail={character.thumbnail}
                />
              )
            })}
          </section>

          <Pagination
            onPageChange={handlePagination}
            onCharacters={setCharacters}
            setOffset={setOffset}
            offset={offset}
            total={totalCharacters}
          />
        </ContainsMain>
      </Container>

  )
}

export default Home
