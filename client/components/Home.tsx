import { Link } from 'react-router-dom'
import Sightingfeed from './Sightingfeed'

export default function Home() {
  return (
    <>
      <Sightingfeed />
      <Link to="/report">
        <button>Report a Sighting</button>
      </Link>
    </>
  )
}
