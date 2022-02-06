import iconReturn from '../../assets/images/return.svg'
import { Container } from './styles'

function ReturnHome() {
  return (
        <Container to={'/'}>
          Return to previous page
          <img src={iconReturn} alt="icon return" />
        </Container>
  )
}

export default ReturnHome
