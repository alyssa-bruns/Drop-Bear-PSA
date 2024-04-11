import { Link } from 'react-router-dom'
import Sightingfeed from './Sightingfeed'

export default function Home() {
  return (
    <>
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <Sightingfeed />
          <Link to="/report">
            <button>Report a Sighting</button>
          </Link>
        </div>
      </div>
    </>
  )
}
