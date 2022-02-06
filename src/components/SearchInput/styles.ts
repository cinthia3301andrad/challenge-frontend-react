import styled from 'styled-components'

export const Container = styled.section`
   display: flex;
    position: relative;
    height: 50px;
    width: 100%;
    
    input { 
      padding: 10px 25px;
      width: 100%;
      height: 100%;
      border: 0;
      border-radius: 5px 20px 5px 20px;
   
      color: #858585;
      font-size: 1.2rem;
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
`
