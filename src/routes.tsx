import { Route, BrowserRouter, Routes } from 'react-router-dom'
import HeroProfile from './pages/HeroProfile '

import Home from './pages/Home'
import Team from './pages/Team'

const RoutesApp = () => {
  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/profile/:id" element={<HeroProfile/>}/>
                <Route path="/team" element={<Team/>}/>
            </Routes>
        </BrowserRouter>
  )
}

export default RoutesApp
