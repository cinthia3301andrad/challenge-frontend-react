import Header from '../../components/Header'

import IconSearch from '../../assets/images/search_24px.svg'
import imageMock from '../../assets/images/Image.png'

import { Container, ContainsMain, ContainsSearch } from './styles'
import CardHeroes from '../../components/CardHeroes'
function Home() {
  const mockSub = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
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

          <ContainsMain>
            <CardHeroes img={imageMock} title='Homem Aranha' subTitle={mockSub}/>
            <CardHeroes img={imageMock} title='Homem Aranha' subTitle={mockSub}/>
            <CardHeroes img={imageMock} title='Homem Aranha' subTitle={mockSub}/>
            <CardHeroes img={imageMock} title='Homem Aranha' subTitle={mockSub}/>
            <CardHeroes img={imageMock} title='Homem Aranha' subTitle={mockSub}/>
            <CardHeroes img={imageMock} title='Homem Aranha' subTitle={mockSub}/>
            <CardHeroes img={imageMock} title='Homem Aranha' subTitle={mockSub}/>
            <CardHeroes img={imageMock} title='Homem Aranha' subTitle={mockSub}/>
          </ContainsMain>

        </Container>
  )
}

export default Home
