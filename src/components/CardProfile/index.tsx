import { Container } from './styles'

type CardProfileProps = {
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

function CardProfile({ name, description, thumbnail }: CardProfileProps) {
  return (
    <Container>
      {thumbnail && (
        <img
          src={`${thumbnail.path}.${thumbnail.extension}`}
          alt="image heroe"
        />
      )}
      <div>
        <h1>{name}</h1>
        <p>{description?.split(' ').slice(0, 200).join(' ')}</p>
      </div>
    </Container>
  )
}

export default CardProfile
