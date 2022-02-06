import styled from 'styled-components'

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-header);

  height: 90px;
  width: 100%;

  .header__main {
    display: flex;
    align-items: center;
    justify-content: space-around;

    width: 100%;
    margin: 0;

    &-title {
      display: flex;
      align-items: center;
      gap: 15px;

      img {
        height: 45px;
      }

      h1 {
        color: #ffffff;
        font-size: 1.3rem;
      }
    }

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--red);
      border-radius: 5px 20px;

      height: 45px;
      padding: 5px 14px;
      gap: 13px;

      border: 0;
      transition: filter 0.3s;
      &:hover {
        filter: brightness(0.9);
      }

      img {
        height: 15px;
        margin: 0;
      }

      p {
        font-size: 1rem;
        margin: 0;
        color: #ffffff;
      }
    }
  }
  @media (max-width: 430px) {
    height: 135px;
    .header__main {
      flex-direction: column;
      &-title {
        gap: 1.8rem;

        img {
          height: 37px;
        }
      }
      &-button {
        width: 70%;
        margin-top: 13px;
      }
    }
  }
`
