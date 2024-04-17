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
import SightingsByLocation from './components/SightingsByLocation'

const routes = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/home" element={<App />}>
        <Route index element={<Home />} />
        <Route
          path="/home/location/:location"
          element={<SightingsByLocation />}
        />
        <Route path="/home/education" element={<EducationalRes />} />
        <Route path="/home/news" element={<News />} />
        <Route path="/home/donate" element={<Donate />} />
        <Route path="/home/safety" element={<TouristSafety />} />
      </Route>
      <Route path="/" element={<LandingPage />} />
    </>,
  ),
)

export default routes
