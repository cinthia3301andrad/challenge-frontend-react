import { createContext, ReactNode, useContext, useState } from 'react'

interface SearchProviderProps {
  children: ReactNode;
}

interface SearchContextData {
  setTextSearch: (value: string) => void;
  textSearch: string;
}

const SearchContext = createContext<SearchContextData>({} as SearchContextData)

export function SearchProvider({ children }: SearchProviderProps): JSX.Element {
  const [textSearch, setTextSearch] = useState('')
  return (
    <SearchContext.Provider value={{ textSearch, setTextSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export function useSearch(): SearchContextData {
  const context = useContext(SearchContext)

  return context
}
