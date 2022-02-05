import iconTeam from '../../assets/images/team-black.png'
import { ResponseDataAPI } from '../../types/@responseAPI'

import { Container } from './styles'

function CardHeroes({ id, name, description, thumbnail }: ResponseDataAPI) {
  return (
        <Container>
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
