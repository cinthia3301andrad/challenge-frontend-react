import styled from 'styled-components'

import imgBackground from '../../assets/images/Background.png'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`

export const ContainsTeam = styled.section`
  display: flex;
  justify-content: center;
  align-items: start;

  margin-top: -290px;
  padding: 6rem 0;
  width: 100%;

  .section-team {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 2rem;

    width: 80%;

    max-width: 1000px;
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
