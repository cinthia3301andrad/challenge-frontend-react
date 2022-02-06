import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import iconReturn from '../../assets/images/return.svg'
import CardComic from '../../components/CardComic'
import CardProfile from '../../components/CardProfile'

import Header from '../../components/Header'
import { api } from '../../services/api'
import { ResponseDataAPIComics, ResponseDataAPIHeroProfile } from '../../types/@responseAPI'
import { Container, ContainsComics, ContainsPresentation } from './styles'

function HeroProfile() {
  const [infosHero, setInfosHero] = useState<ResponseDataAPIHeroProfile>({} as ResponseDataAPIHeroProfile)
  const [comics, setComics] = useState<ResponseDataAPIComics[]>([])
  const { id } = useParams()

  useEffect(() => {
    api.get(`characters/${id}`).then(({ data }) => {
      setInfosHero(data.data.results[0])
    }).catch((err) => {
      console.log('ee', err)
    })
    api.get(`characters/${id}/comics`).then(({ data }) => {
      setComics([...data.data.results])
    }).catch((err) => {
      console.log('ee', err)
    })
  }, [])
  return (
    <Container>
      <Header />

      <ContainsPresentation>
          <Link to={'/'}>
              Return to previous page
              <img src={iconReturn} alt="icon return" />
          </Link>
          <div className="title">  <h1>Discover all comics this character took part in</h1></div>
          <CardProfile name={infosHero.name} description={infosHero.description} thumbnail={infosHero.thumbnail}/>

      </ContainsPresentation>

      <ContainsComics>
          <h2>Comics</h2>
        <ul>
        {comics.map(comic => (<CardComic key={comic.id} {...comic}/>))}

        </ul>

      </ContainsComics>
    </Container>
  )
}

export default HeroProfile
