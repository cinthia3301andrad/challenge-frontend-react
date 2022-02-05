import Header from '../../components/Header'

import IconSearch from '../../assets/images/search_24px.svg'

import { Container, ContainsSearch } from './styles'
function Home() {
  return (
        <Container>
          <Header />
          <ContainsSearch>
            <div className="container-search">
              <h1>Explore the most powerful characters in Marvel</h1>
              <div className="search-input">
                <input type="text" />
                <button><img src={IconSearch} alt="icon search" /></button>

              </div>
            </div>

          </ContainsSearch>

        </Container>
  )
}

export default Home
