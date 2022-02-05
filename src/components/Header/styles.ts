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


    &-title{
        display: flex;
        align-items: center;
        gap: 15px;

        img { 
            height: 45px;
        }

        h1 { 
          color: #FFFFFF;
          font-size: 1.3rem;
        }
    }

    &-button {
      display: flex;
      align-items: center;
      justify-content: center;
      background: #F43735;
      border-radius: 5px 20px;
     
      height: 40px;
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
        color: #FFFFFF;
      }
    }
  }
`
