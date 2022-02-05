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

  .search-input{
    display: flex;
    position: relative;
    height: 50px;
    width: 100%;
    
    input { 
      padding: 10px;
      width: 100%;
      height: 100%;
      border: 0;
      border-radius: 5px 20px 5px 20px;
   
      color: #858585;
      font-size: 1rem;
      letter-spacing: 1.5px;
      :focus {
        border-color: var( --text-body);
      }
   
    }
    button {
      position: absolute;
      right: 0px;
      border: 0;
      
      min-width: 70px;
      height: 100%;
      background: var(--red);
      border-radius: 5px 20px 5px 5px;

      img {
        width: 22px;
       }
    }
  }
`
