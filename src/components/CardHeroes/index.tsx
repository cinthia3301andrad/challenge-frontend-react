import { useNavigate } from 'react-router-dom'

import iconTeam from '../../assets/images/team-black.png'
import { ResponseDataAPICharacters } from '../../types/@responseAPI'

import { Container } from './styles'

function CardHeroes({ id, name, description, thumbnail }: ResponseDataAPICharacters) {
  const navigate = useNavigate()

  const redirect = () => {
    navigate(`/profile/${id}`)
  }
  return (
        <Container onClick={redirect}>
            {
                thumbnail && <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="image heroe" />
            }

            <button>
                    <img src={iconTeam} alt="icon team" />
                </button>
            <section>
                <h1>{name}</h1>
                <p>{description}</p>
            </section>
        </Container>
  )
}

export default CardHeroes
