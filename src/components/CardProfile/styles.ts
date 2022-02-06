import styled from 'styled-components'

export const Container = styled.section`
  display: flex;

  align-items: center;

  position: absolute;

  padding: 1rem 4rem;
  top: 51%;

  width: 80%;
  max-width: 1000px;
  min-height: 250px;

  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 50px;

  img {
    width: 150px;
    height: 150px;

    border-radius: 100%;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    height: 100%;

    h1,
    p {
      font-style: normal;
      font-weight: bold;
      font-size: 1.7rem;

      color: #212121;
      margin: 0;
      margin-left: 2rem;
    }
    p {
      margin-top: 1rem;
      font-weight: normal;
      font-size: 1rem;
    }
  }

  @media (max-width: 568px) {
    flex-direction: column;
    padding: 1.5em 1rem;
    img {
      width: 100px;
      height: 100px;

      margin-bottom: 1rem;
    }
  }
`
