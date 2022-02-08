import { useEffect, useState } from 'react'

import { ICharacters } from '../../types/@general'

import { getCharactersDefault } from '../../services/utils/getCharactersDefault'
import { useSearch } from '../../hooks/useSearch'

import { Container, ContainsMain, ContainsSearch } from './styles'
import { TwinSpin } from 'react-cssfx-loading/lib'
import { CardHeroes, Footer, Header, Pagination, SearchInput } from '../../components'

function Home() {
  const { setTextSearch } = useSearch()

  const [characters, setCharacters] = useState<ICharacters[]>([])
  const [totalCharacters, setTotalCharacters] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [offset, setOffset] = useState(0)

  const limit = 8

  async function handleGetCharacter() {
    const response = await getCharactersDefault({ limit })

    setCharacters([...response.results])
    setIsLoading(false)
    setTotalCharacters(response.total)
  }

  useEffect(() => {
    handleGetCharacter()

    return () => {
      setTextSearch('')
    }
  }, [])

  return (
    <Container>
      <Header />
      <ContainsSearch>
        <div className="container-search">
          <h1>Explore os personagens mais poderosos da Marvel</h1>
          <SearchInput
            onCharacters={setCharacters}
            onTotalCharacters={setTotalCharacters}
            setOffset={setOffset}
          />
        </div>
      </ContainsSearch>

      <ContainsMain>
        <section className="content-characters">
          {isLoading
            ? (
            <TwinSpin
              color="#969cb3"
              width="60px"
              height="60px"
              duration="3s"
            />
              )
            : characters.length > 0
              ? (
                  characters.map((character) => {
                    return (
                <CardHeroes
                  key={character.id}
                  isFavorite={false}
                  infosHero={character}
                />
                    )
                  })
                )
              : (
            <h2>No result 🙁</h2>
                )}
        </section>

        <Pagination
          onCharacters={setCharacters}
          setOffset={setOffset}
          offset={offset}
          total={totalCharacters}
        />
      </ContainsMain>
      <Footer />
    </Container>
  )
}

export default Home
