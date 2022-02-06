import styled from 'styled-components'

export const Container = styled.li`
  display: flex;

  align-items: center;

  width: 100%;

  height: 175px;
  margin-top: 2rem;

  background: #ffffff;
  border-radius: 10px 50px;

  img {
    min-width: 165px;
    width: 65px;
    height: 175px;
    border-radius: 10px 0px 0px 50px;
  }

  .details {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 0.7rem 0 0 2rem;

    span {
      background: #212121;
      height: 5px;
      width: 5px;
      border-radius: 100%;
      margin: 0;

      margin: 0 0.7rem;
    }

    p {
      margin: 0;
      font-size: 0.8rem;
    }
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
      text-overflow: ellipsis;
      margin-top: 1rem;
      font-weight: normal;
      font-size: 1rem;
    }
  }

  @media (max-width: 500px) {
    flex-direction: column;
    padding: 2rem;
    height: auto;
    img {
      width: 100%;
      height: 150px;

      margin-bottom: 1rem;
      border-radius: 10px 50px 10px 10px;
    }
    .details {
      margin: 0.7rem 0;
    }
    > div {
      h1,
      p {
        margin: 0;
      }
    }
  }
`
