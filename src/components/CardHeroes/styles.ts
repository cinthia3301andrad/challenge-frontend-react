import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  width: 223px;
  height: 330px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px 30px;

  cursor: pointer;
  transition: filter 0.3s;
  &:hover {
    filter: brightness(0.9);
  }

  > img {
    border-radius: 10px 30px 0px 0px;
    width: 100%;
    height: 52%;
  }
  button {
    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 45%;
    left: 165px;
    width: 45px;
    height: 45px;
    border-radius: 100%;
    border: 0;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    background: #f5f5f5;

    img {
      width: 20px;

      right: 90%;
      top: -10px;
    }
  }
  section {
    overflow-y: hidden;

    height: 130px;

    padding: 10px 20px;

    h1 {
      font-weight: bold;
      font-size: 1.3rem;
      line-height: 37px;

      color: #212121;
    }
    p {
      font-weight: normal;
      font-size: 0.86rem;
      line-height: 19px;

      color: #212121;
    }
  }

  @media (max-width: 415px) {
    width: 100%;
    height: 430px;
    > img {
      height: 55%;
    }

    button {
      top: 49%;
      left: 73%;
      width: 60px;
      height: 60px;

      img {
        width: 25px;
      }
    }
  }
`
