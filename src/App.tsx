
import { SearchProvider } from './hooks/useSearch'
import RoutesApp from './routes'

import GlobalStyle from './styles/global'

export function App() {
  return (
    <SearchProvider>

      <RoutesApp/>

      <GlobalStyle />
    </SearchProvider>

  )
}
