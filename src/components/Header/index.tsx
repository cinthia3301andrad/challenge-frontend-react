import { Link } from 'react-router-dom'
import logoMen from '../../assets/images/homem-ferro.png'
import iconTeam from '../../assets/images/icon-team.png'

import { Container } from './styles'

function Header() {
  return (
    <Container>
      <section className="header__main">
        <div className="header__main-title">
          <img src={logoMen} alt="icon Iron men" />
          <h1>Equipe de ataque - Marvel</h1>
        </div>
         <Link to={'/team'} className="header__main-button">
          <p>Seu time</p>
          <img src={iconTeam} alt="icon team" />
        </Link>
      </section>
    </Container>
  )
}

export default Header
