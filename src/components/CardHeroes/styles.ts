import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

background: red;
  width: 210px;
  height: 300px;
  background: #FFFFFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px 30px;

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
        left: 155px;
        width: 45px;
        height: 45px;
        border-radius: 100%;
        border: 0;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        background: #F5F5F5;

      
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
`
