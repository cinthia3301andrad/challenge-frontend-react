import { Container } from './styles'

type TitleMainProps = {
    title: string;
}

function TitleMain({ title }: TitleMainProps) {
  return (
        <Container>
        <h1>{title}</h1>
      </Container>
  )
}

export default TitleMain
