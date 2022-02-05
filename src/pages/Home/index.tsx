import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import CardHeroes from '../../components/CardHeroes'

import IconSearch from '../../assets/images/search_24px.svg'

import { ResponseDataAPI } from '../../types/@responseAPI'
import { api } from '../../services/api'

import { Container, ContainsMain, ContainsSearch } from './styles'

function Home() {
  const [characters, setCharacters] = useState<ResponseDataAPI[]>([])

  useEffect(() => {
    api.get('characters').then(({ data }) => {
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
            {
              characters.map((character) => {
                return (<CardHeroes key={character.id} id={character.id} name={character.name} description={character.description} thumbnail={character.thumbnail}/>)
              })
            }

          </ContainsMain>

        </Container>
  )
}

export default Home
