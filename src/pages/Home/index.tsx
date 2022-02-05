import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import CardHeroes from '../../components/CardHeroes'

import IconSearch from '../../assets/images/search_24px.svg'

import { ResponseDataAPI } from '../../types/@responseAPI'
import { api } from '../../services/api'

import { Container, ContainsMain, ContainsSearch } from './styles'
import Pagination from '../../components/Pagination'

function Home() {
  const [characters, setCharacters] = useState<ResponseDataAPI[]>([])
  const [totalCharacters, setTotalCharacters] = useState(0)
  const [offset, setOffset] = useState(0)

  const limit = 8

  async function handlePagination(page: number) {
    try {
      const requestedOffset = (page - 1) * limit
      const { data } = await api.get('characters', {
        params: {
          limit: limit,
          offset: requestedOffset
        }
      })
      setCharacters([...data.data.results])
      setOffset(requestedOffset)
    } catch (e) {}
  }

  useEffect(() => {
    api
      .get('characters', {
        params: {
          limit: limit
        }
      })
      .then(({ data }) => {
        const response = data.data.results
        setTotalCharacters(data.data.total)
        setCharacters(response)
      })
      .catch((err) => {
        console.log('Error', err)
      })
  }, [])

  return (
    <Container>
      <Header />
      <ContainsSearch>
        <div className="container-search">
          <h1>Explore the most powerful characters in Marvel</h1>
          <div className="search-input">
            <input type="text" />
            <button>
              <img src={IconSearch} alt="icon search" />
            </button>
          </div>
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
          onCharacters = {setCharacters}
          setOffset={setOffset}
          offset={offset}
          total={totalCharacters}

        />
      </ContainsMain>
    </Container>
  )
}

export default Home
