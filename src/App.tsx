
import { SearchProvider } from './hooks/useSearch'
import { ToastContainer } from 'react-toastify'

import RoutesApp from './routes'

import GlobalStyle from './styles/global'

export function App() {
  return (
    <SearchProvider>

      <RoutesApp/>
      <ToastContainer autoClose={3000} />
      <GlobalStyle />
    </SearchProvider>

  )
}
