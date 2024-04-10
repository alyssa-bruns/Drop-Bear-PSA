/* eslint-disable react/jsx-key */
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'
import Home from './components/Home'
import App from './components/App'
import { EducationalRes } from './components/EducationalRes'
import { News } from './components/News'
import { Donate } from './components/Donate'
import { TouristSafety } from './components/TouristSafety'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/home" element={<Home />} />
      <Route path="/education" element={<EducationalRes />} />
      <Route path="/news" element={<News />} />
      <Route path="/donate" element={<Donate />} />
      <Route path="/safety" element={<TouristSafety />} />
    </Route>,
  ),
)

export default router
