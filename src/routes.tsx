import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HeroProfile from './pages/HeroProfile '

import Home from './pages/Home'

const RoutesApp = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<HeroProfile/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default RoutesApp
