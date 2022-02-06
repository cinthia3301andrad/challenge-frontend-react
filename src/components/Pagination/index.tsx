import { useSearch } from '../../hooks/useSearch'
import { api } from '../../services/api'
import { ICharacters } from '../../types/@general'

import { Container } from './styles'

type PaginationProps = {
  onCharacters: (value: ICharacters[]) => void;
  setOffset: (value: number) => void;
  offset: number;
  total: number;
};

const MAX_ITEMS = 5
const MAX_LEFT = (MAX_ITEMS - 1) / 2

function Pagination({ onCharacters, setOffset, offset, total }: PaginationProps) {
  const { textSearch } = useSearch()

  const limit = 8
  const current = offset ? offset / limit + 1 : 1

  const pages = Math.ceil(total / limit)
  const first = Math.max(current - MAX_LEFT, 1)

  async function handlePagination(page: number) {
    try {
      const requestedOffset = (page - 1) * limit
      const paramsName =
        textSearch.length > 0
          ? {
              nameStartsWith: textSearch,
              limit: limit,
              offset: requestedOffset
            }
          : {
              limit: limit,
              offset: requestedOffset
            }
      const { data } = await api.get('characters', {
        params: paramsName
      })
      onCharacters([...data.data.results])
      setOffset(requestedOffset)
    } catch (err) {
      return Promise.reject(err)
    }
  }

  return (
    <Container>
      <ul>
        {Array.from({ length: Math.min(MAX_ITEMS, pages) }).map((_, index) => {
          const page = index + first
          return (
            <li key={page}>
              <button
                className={page === current ? 'active' : ''}
                onClick={() => handlePagination(page)}
              >
                {page}
              </button>
            </li>
          )
        })}
      </ul>
      <button
        onClick={() => handlePagination(current - 1)}
        disabled={current === 1}
      >
        Prev
      </button>
      <button onClick={() => handlePagination(current + 1)}>Next</button>
    </Container>
  )
}

export default Pagination
