import { ResponseDataAPICharacters } from '../../types/@responseAPI'

import { Container } from './styles'

type PaginationProps = {
  onPageChange: (value: number) => void;
  onCharacters: (value: ResponseDataAPICharacters[]) => void;
  setOffset: (value: number) => void;
  offset: number;
  total: number;
};

const MAX_ITEMS = 5
const MAX_LEFT = (MAX_ITEMS - 1) / 2

function Pagination({ onPageChange, offset, total }: PaginationProps) {
  const limit = 8
  const current = offset ? offset / limit + 1 : 1

  const pages = Math.ceil(total / limit)
  const first = Math.max(current - MAX_LEFT, 1)

  return (
    <Container>
      <ul>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) }).map((_, index) => {
          const page = index + first
          return (
            <li key={page}>
              <button
                className={page === current ? 'active' : ''}
                onClick={() => onPageChange(page)}
              >
                {page}
              </button>
            </li>
          )
        })}
      </ul>
      <button
        onClick={() => onPageChange(current - 1)}
        disabled={current === 1}
      >
        Prev
      </button>
      <button onClick={() => onPageChange(current + 1)}>Next</button>
    </Container>
  )
}

export default Pagination
