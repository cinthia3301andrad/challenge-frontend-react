
import { Container } from './styles'

type CardProfileProps = {
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string
    }
}

function CardProfile({ name, description, thumbnail }: CardProfileProps) {
  console.log('ue', thumbnail, name, description)
  return (
        <Container >
            {
                thumbnail && <img src={`${thumbnail.path}.${thumbnail.extension}`} alt="image heroe" />
            }
            <div>
                <h1>{name}</h1>
                <p>{description}</p>
            </div>
        </Container>
  )
}

export default CardProfile
