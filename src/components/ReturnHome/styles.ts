import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled(Link)`
  text-decoration: none;
  position: absolute;
  top: 1rem;
  right: 5rem;
  color: #ffcdd2;
  font-weight: 600;

  img {
    width: 17px;
    margin-left: 5px;
  }
`
