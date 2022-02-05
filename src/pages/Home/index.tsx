import { useCallback, useEffect, useState } from 'react'

import Header from '../../components/Header'
import CardHeroes from '../../components/CardHeroes'

import IconSearch from '../../assets/images/search_24px.svg'

import { ResponseDataAPI } from '../../types/@responseAPI'
import { api } from '../../services/api'

import { Container, ContainsMain, ContainsSearch, Paginaton } from './styles'

function Home() {
  const [characters, setCharacters] = useState<ResponseDataAPI[]>([])
  const [currentPage, setCurrentPage] = useState(1)

  async function handlePaginationPrev () {
    try {
      const requestedOffset = ((currentPage - 1) * 6) - 6
      console.log('o que tmosss', currentPage, requestedOffset)
      const { data } = await api.get('characters', {
        params: {
          limit: 6,
          offset: requestedOffset
        }
      })
      console.log('AAA', data.data)
      setCharacters([...data.data.results])
      setCurrentPage(prev => prev - 1)
    } catch (e) {

    }
  }
  async function handlePaginationNext () {
    try {
      console.log('NEXTTT AA ', currentPage)
      const requestedOffset = currentPage * 6

      const { data } = await api.get('characters', {
        params: {
          limit: 6,
          offset: requestedOffset
        }
      })
      console.log('BBBB', data.data)
      setCharacters([...data.data.results])
      setCurrentPage(prev => prev + 1)
    } catch (e) {

    }
  }

  useEffect(() => {
    api.get('characters', {
      params: {
        limit: 6
      }
    }).then(({ data }) => {
      console.log('Res', data.data.results)
      const response = data.data.results
      setCharacters(response)
    }).catch((err) => {
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
                <button><img src={IconSearch} alt="icon search" /></button>

              </div>
            </div>

          </ContainsSearch>

          <ContainsMain>
            <section>
              {
                characters?.map((character) => {
                  return (<CardHeroes key={character.id} id={character.id} name={character.name} description={character.description} thumbnail={character.thumbnail}/>)
                })
              }
            </section>

            <Paginaton>
            <button onClick={handlePaginationPrev } disabled={currentPage === 1}>Prev</button>
              <button onClick={handlePaginationNext}>Next</button>
            </Paginaton>

          </ContainsMain>

        </Container>
  )
}

export default Home
