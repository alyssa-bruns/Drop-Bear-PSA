import Sightingfeed from './Sightingfeed'

export default function Home() {
  return (
    <>
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <Sightingfeed />
        </div>
      </div>
    </>
  )
}
