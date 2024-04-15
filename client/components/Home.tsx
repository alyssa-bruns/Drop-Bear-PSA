import { Link } from 'react-router-dom'
import Sightingfeed from './Sightingfeed'
import Map from './Map'
import SightSubmissionForm from './SightSubmissionForm'
import { AnimatePresence, motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
          }}
        >
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">
              <Map />
              <Sightingfeed />
              <Link to="/report">
                <button>Report a Sighting</button>
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
