import styled from 'styled-components'

import imgBackground from '../../assets/images/Background.png'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
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

  a {
    text-decoration: none;
    position: absolute;
    top: 1rem;
    right: 5rem;
    color: #ffcdd2;
    font-weight: 600;

    img {
      width: 17px;
      margin-left: 5px;
    }
  }
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

    max-width: 400px;
    margin-bottom: 8rem;
  }
`
