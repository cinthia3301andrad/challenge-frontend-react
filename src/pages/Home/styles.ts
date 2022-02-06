import styled from 'styled-components'

import imgBackground from '../../assets/images/Background.png'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const ContainsSearch = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 400px;
  

  background-image: url(${imgBackground});

  h1 { 
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 35px;

    max-width: 400px;

    color: #FFFFFF;

    margin-bottom: 25px;
  }

  .container-search {
    width: 80%;
    max-width: 550px;
  }


`
export const ContainsMain = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 3rem 4rem;

  .content-characters {
    display: flex;
    
    justify-content: center;
    flex-wrap: wrap;

    gap: 2rem;
    width: 100%;
    max-width: 1000px;
    min-height: 400px;

  }
 
`
