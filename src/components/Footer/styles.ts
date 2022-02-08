import styled from 'styled-components'

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--background-header);

  height: 70px;
  width: 100%;

  p {
    color: #ffffff;
    font-size: 0.9rem;
    margin: 0;
  }

  @media (max-width: 430px) {
      flex-direction: column;
  }
`
