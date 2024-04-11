/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import App from './components/App'
import { EducationalRes } from './components/Education'
import { News } from './components/News'
import { Donate } from './components/Donate'
import { TouristSafety } from './components/Safety'
import { LandingPage } from './components/LandingPage'

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route index element={<Home />} />
        <Route path="/education" element={<EducationalRes />} />
        <Route path="/news" element={<News />} />
        <Route path="/donate" element={<Donate />} />
        <Route path="/safety" element={<TouristSafety />} />
      </Route>
      <Route path="landing" element={<LandingPage />} />
    </>,
  ),
)

export default router
