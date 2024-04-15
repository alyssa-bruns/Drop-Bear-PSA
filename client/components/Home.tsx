import { Link } from 'react-router-dom'
import Sightingfeed from './Sightingfeed'
import Map from './Map'
import SightSubmissionForm from './SightSubmissionForm'

export default function Home() {
  return (
    <>
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <Map />
          <Sightingfeed />
          <Link to="/home/report">
            <button>Report a Sighting</button>
          </Link>
        </div>
      </div>
    </>
  )
}
