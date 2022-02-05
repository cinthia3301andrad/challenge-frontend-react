import logoMen from '../../assets/images/homem-ferro.png'
import iconTeam from '../../assets/images/icon-team.png'

import { Container } from './styles'

function Header() {
  return (
          <Container>
              <section className="header__main">
                  <div className="header__main-title">
                    <img src={logoMen} alt="logo homem de ferro" />
                    <h1>Marvel Strike Team</h1>
                  </div>
                  <button className="header__main-button">
                    <p> Your team</p>
                    <img src={iconTeam} alt="icon team" />
                  </button>
              </section>
          </Container>
  )
}

export default Header
