import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import { TwinSpin } from 'react-cssfx-loading'

import CardComic from '../../components/CardComic'
import CardProfile from '../../components/CardProfile'

import Header from '../../components/Header'
import { api } from '../../services/api'
import {
  IComics,
  IHeroProfile
} from '../../types/@general'

import { Container, ContainsComics, ContainsPresentation } from './styles'
import ReturnHome from '../../components/ReturnHome'

function HeroProfile() {
  const [infosHero, setInfosHero] = useState<IHeroProfile>(
    {} as IHeroProfile
  )
  const [comics, setComics] = useState<IComics[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    api
      .get(`characters/${id}`)
      .then(({ data }) => {
        setInfosHero(data.data.results[0])
      })
      .catch((err) => {
        return Promise.reject(err)
      })
    api
      .get(`characters/${id}/comics`, {
        params: {
          limit: 5
        }
      })
      .then(({ data }) => {
        setComics([...data.data.results])
        setIsLoading(false)
      })
      .catch((err) => {
        return Promise.reject(err)
      })
  }, [])
  return (
    <Container>
      <Header />

      <ContainsPresentation>
        <ReturnHome/>

        <div className="title">
          <h1>Descubra todos os quadrinhos que esse personagem participou</h1>
        </div>

      </ContainsPresentation>

      <ContainsComics>
      <CardProfile
          name={infosHero.name}
          description={infosHero.description}
          thumbnail={infosHero.thumbnail}
        />

        <h2>Comics</h2>

        {isLoading
          ? (
          <TwinSpin color="#969cb3" width="60px" height="60px" duration="3s" />
            )
          : comics.length > 0
            ? (
          <ul>
            {comics.map((comic) => (
              <CardComic key={comic.id} {...comic} />
            ))}
          </ul>
              )
            : (
          <h3>No comics found 🙁</h3>
              )}
      </ContainsComics>
    </Container>
  )
}

export default HeroProfile
