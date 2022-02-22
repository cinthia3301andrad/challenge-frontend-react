import { useEffect, useState } from 'react'

import { CardHeroes, Footer, Header, ReturnHome, TitleMain } from '../../components'

import { ICharacters } from '../../types/@general'

import { Container, ContainsPresentation, ContainsTeam } from './styles'

function Team() {
  const [team, setTeam] = useState<ICharacters[]>([])
  const [isCompletShow, setIsCompletShow] = useState(false)

  function handleShowMore() {
    const returnTeam = localStorage.getItem('@MarvelTeam:team') as string
    const currentTeam = [...JSON.parse(returnTeam)]
    const currentTeamAtt = [...team, ...currentTeam.slice(team.length, team.length + 8)]
    setTeam(currentTeamAtt)
    if (currentTeamAtt.length === currentTeam.length) {
      setIsCompletShow(true)
    }
  }

  useEffect(() => {
    const returnTeam = localStorage.getItem('@MarvelTeam:team') as string
    const currentTeam = [...JSON.parse(returnTeam)]
    if (currentTeam.length > 8) {
      const currentTeamAtt = [...currentTeam.slice(0, 8)]
      setTeam(currentTeamAtt)
    } else {
      setTeam(currentTeam)
    }

    return () => {
      setTeam([])
    }
  }, [])
  return (
    <Container>
      <Header />

      <ContainsPresentation>
        <ReturnHome />
        <TitleMain title='Aqui está sua lista de heróis adicionados a equipe'/>
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
        <button onClick={handleShowMore} className="show" disabled={isCompletShow}>Mostrar mais</button>
      </ContainsTeam>
      <Footer />
    </Container>
  )
}

export default Team
