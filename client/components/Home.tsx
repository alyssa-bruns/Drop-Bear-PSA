import { Link } from 'react-router-dom'
import Sightingfeed from './Sightingfeed'
import SightingReport from './SightingReport'
import Map from './Map'
import SightSubmissionForm from './SightSubmissionForm'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

export default function Home() {
  const [isReporting, setIsReporting] = useState(false)

  if (isReporting) {
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
                <div className="buttons is-centered m-3">
                  <button
                    className="button is-danger is-outlined"
                    onClick={() => {
                      setIsReporting(false)
                    }}
                  >
                    cancel
                  </button>
                </div>
                <SightingReport />
                <Sightingfeed />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </>
    )
  }
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
              <div className="buttons is-centered m-3">
                <button
                  className="button is-success is-outlined is-large"
                  onClick={() => {
                    setIsReporting(true)
                  }}
                >
                  Add your own drop bear sighting!
                </button>
              </div>
              <Sightingfeed />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
