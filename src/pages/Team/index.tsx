import { useEffect, useState } from 'react'

import Header from '../../components/Header'
import CardHeroes from '../../components/CardHeroes'
import ReturnHome from '../../components/ReturnHome'

import { ICharacters } from '../../types/@general'

import { Container, ContainsPresentation, ContainsTeam } from './styles'

function Team() {
  const [team, setTeam] = useState<ICharacters[]>([])

  useEffect(() => {
    const returnTeam = localStorage.getItem('@MarvelTeam:team') as string
    const currentTeam = [...JSON.parse(returnTeam)]
    setTeam(currentTeam)
  }, [])
  return (
    <Container>
      <Header />

      <ContainsPresentation>
        <ReturnHome />
        <div className="title">
          <h1>Aqui está sua lista de heróis adicionados a equipe</h1>
        </div>
      </ContainsPresentation>

      <ContainsTeam>
       <div className="section-team">
        {team?.map((hero) =>
            <CardHeroes
                key={hero.id}
                attTeam={setTeam}
                isFavorite={true}
                infosHero={hero}
            />
        )}
       </div>
      </ContainsTeam>
    </Container>
  )
}

export default Team
