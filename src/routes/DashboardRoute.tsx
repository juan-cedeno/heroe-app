import {  Route, Routes } from 'react-router-dom'
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DcScreen } from '../components/dc/DcScreen';
import { NavBar } from '../components/NavBar';
import { HeroScreen } from '../components/heros/HeroScreen';
import { SearchScreen } from '../screens/SearchScreen';

export const DashboardRoute = () => {
  return (
    <div>
        <NavBar/>
        <Routes>
            <Route path="/" element={<MarvelScreen />} />
            <Route path="/marvel" element={<MarvelScreen />} />
            <Route path="/dc" element={<DcScreen />} />
            <Route path="/hero/:id" element={<HeroScreen />} />
            <Route path="/search" element={<SearchScreen />} />
        </Routes>
    </div>
  )
}
