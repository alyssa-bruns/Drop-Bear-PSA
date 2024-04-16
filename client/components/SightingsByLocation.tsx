import { Link, useParams } from 'react-router-dom'
import { useGetSightingsByLocation } from '../hooks/use-get-sightings'
import Map from './Map'
import { AnimatePresence, motion } from 'framer-motion'

export default function SightingsByLocation() {
  const { location } = useParams()
  const { data } = useGetSightingsByLocation(String(location))

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
                <Link to="/home">
                  <button className="button is-danger is-outlined ">
                    Back to Sighting Feed
                  </button>
                </Link>
              </div>
              <ul>
                {data &&
                  data.map((sighting) =>
                    sighting.is_approved ? (
                      <div className="card" key={sighting.id}>
                        <header className="card-header">
                          <p className="card-header-title">
                            {sighting.display_name}
                          </p>
                          <br />
                        </header>
                        <p className="card-header-title is-size-7">
                          Sighting recorded at {sighting.time} on{' '}
                          {sighting.date}
                        </p>
                        <div className="card-content">
                          <div className="content">{sighting.description}</div>
                        </div>
                      </div>
                    ) : null,
                  )}
              </ul>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
