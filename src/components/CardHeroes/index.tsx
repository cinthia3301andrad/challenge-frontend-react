import iconTeam from '../../assets/images/team-black.png'

import { Container } from './styles'

type CardHeroesProps = {
    img: string;
    title: string;
    subTitle: string;
}

function CardHeroes({ img, title, subTitle }: CardHeroesProps) {
  return (
        <Container>
            <img src={img} alt="image heroe" />
            <button>
                    <img src={iconTeam} alt="icon team" />
                </button>
            <section>

                <h1>{title}</h1>
                <p>{subTitle}</p>
            </section>
        </Container>
  )
}

export default CardHeroes
