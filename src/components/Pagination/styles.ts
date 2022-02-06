import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  justify-content: flex-end;

  height: 25px;
  padding: 2rem;

  width: 100%;

  button {
    font-size: 1rem;
    font-weight: 600;

    border: none;
    background: transparent;
    margin-left: 1rem;
  }

  ul {
    display: flex;
    list-style: none;

    li + li {
      margin-left: 0.1rem;
    }
  }

  .active {
    background: #e5e5e5;
    border-radius: 100%;
    padding: 1px;
    color: #5429cc;
  }
`
