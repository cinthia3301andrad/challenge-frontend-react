import { useState } from 'react'
import { Popover } from 'antd'

import { useNavigate } from 'react-router-dom'

import { toast } from 'react-toastify'

import iconTeam from '../../assets/images/team-black.png'
import iconTeamFavorite from '../../assets/images/icon-team.png'
import {
  chekingHeroInTeam,
  handleAddHeroToTeam,
  handleRemoveHeroToTeam
} from '../../shared/utils/heroTeam'
import { ICharacters } from '../../types/@general'

import { Container } from './styles'

type CardHeroesProps = {
  attTeam?: (value: ICharacters[]) => void;
  infosHero: ICharacters;
  isFavorite: boolean;
};
function CardHeroes({ attTeam, infosHero, isFavorite }: CardHeroesProps) {
  const { id, name, description, thumbnail } = infosHero

  const [isAlreadyIncluded, setIsAlreadyIncluded] = useState(chekingHeroInTeam(infosHero.id))

  const navigate = useNavigate()
  const redirect = () => {
    navigate(`/profile/${id}`)
  }
  const handleClickCardHero = () => {
    setIsAlreadyIncluded(true)

    if (!isFavorite && isAlreadyIncluded) {
      toast.error('Você já possui esse heroi no time!')
    }

    if (!isFavorite && !isAlreadyIncluded) {
      handleAddHeroToTeam(infosHero)
      toast.success('Herói adicionado ao time!')
    } else if (attTeam) {
      attTeam(handleRemoveHeroToTeam(id))
      toast.success('Herói removido do time')
    }
  }

  const content = isFavorite
    ? (
    <p>Remover herói do time</p>
      )
    : (
    <p>{isAlreadyIncluded ? 'Héroi já está no seu time' : 'Adicionar herói ao time'}</p>
      )

  return (
    <Container>
      {thumbnail && (
        <img
          onClick={redirect}
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt="image heroe"
        />
      )}
      <Popover content={content}>
        <button
          onClick={handleClickCardHero}
          className={isFavorite ? 'favorite' : ''}
        >
          <img src={isFavorite ? iconTeamFavorite : iconTeam} alt="icon team" />
        </button>
      </Popover>

      <section onClick={redirect}>
        <h1>{name}</h1>
        <p>{description}</p>
      </section>
    </Container>
  )
}

export default CardHeroes
