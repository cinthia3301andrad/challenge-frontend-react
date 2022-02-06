import styled from 'styled-components'

import imgBackground from '../../assets/images/Background.png'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const ContainsComics = styled.section`
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;

  margin-top: -200px;
  width: 100%;
  min-height: 1000px;

  h2 {
    width: 80%;
    font-size: 1.6rem;
    max-width: 1000px;

    margin-top: 2rem;
  }

  ul {
    width: 80%;
    max-width: 1000px;
  }
  @media (max-width: 568px) {
    margin-top: -150px;
  }
`

export const ContainsPresentation = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  width: 100%;
  height: 400px;
  position: relative;

  background-image: url(${imgBackground});

  .title {
    width: 80%;
    max-width: 1000px;
  }
  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 2rem;
    line-height: 35px;

    color: #ffffff;

    max-width: 500px;
    margin-bottom: 8rem;
  }
`
