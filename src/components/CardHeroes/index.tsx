import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

import iconTeam from '../../assets/images/team-black.png'
import iconTeamFavorite from '../../assets/images/icon-team.png'
import { chekingHeroInTeam, handleAddHeroToTeam, handleRemoveHeroToTeam } from '../../shared/utils/heroTeam'
import { ICharacters } from '../../types/@general'

import { Container } from './styles'

type CardHeroesProps = {
  attTeam?: (value: ICharacters[]) => void;
  infosHero: ICharacters;
  isFavorite: boolean;
}
function CardHeroes({ attTeam, infosHero, isFavorite } : CardHeroesProps) {
  const { id, name, description, thumbnail } = infosHero

  const navigate = useNavigate()
  const redirect = () => {
    navigate(`/profile/${id}`)
  }
  const handleClickCardHero = () => {
    const include = chekingHeroInTeam(infosHero.id)

    if (!isFavorite && include) {
      toast.error('Você já possui esse heroi no time!')
    }

    if (!isFavorite && !include) {
      handleAddHeroToTeam(infosHero)
      toast.success('Herói adicionado ao time!')
    } else if (attTeam) {
      attTeam(handleRemoveHeroToTeam(id))
      toast.success('Herói removido do time')
    }
  }

  return (
        <Container>
            {
                thumbnail && <img onClick={redirect} src={`${thumbnail.path}.${thumbnail.extension}`} alt="image heroe" />
            }

            <button onClick={handleClickCardHero} className={isFavorite ? 'favorite' : ''}>
                    <img src={isFavorite ? iconTeamFavorite : iconTeam} alt="icon team" />
                </button>
            <section onClick={redirect}>
                <h1>{name}</h1>
                <p>{description}</p>
            </section>
        </Container>
  )
}

export default CardHeroes
