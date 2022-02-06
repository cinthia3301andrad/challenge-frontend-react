import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import iconReturn from '../../assets/images/return.svg'
import CardProfile from '../../components/CardProfile'

import Header from '../../components/Header'
import { api } from '../../services/api'
import { ResponseDataAPIComics, ResponseDataAPIHeroProfile } from '../../types/@responseAPI'
import { Container, ContainsPresentation } from './styles'

function HeroProfile() {
  const [infosHero, setInfosHero] = useState<ResponseDataAPIHeroProfile>({} as ResponseDataAPIHeroProfile)
  const [comics, setComics] = useState<ResponseDataAPIComics[]>([])
  const { id } = useParams()

  useEffect(() => {
    api.get(`characters/${id}`).then(({ data }) => {
      console.log('O Q TEMOS', data.data.results)
      setInfosHero(data.data.results[0])
    }).catch((err) => {
      console.log('ee', err)
    })
    api.get(`characters/${id}/comics`).then(({ data }) => {
      console.log('O Q TEMOS AQUI', data.data)
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
    </Container>
  )
}

export default HeroProfile
