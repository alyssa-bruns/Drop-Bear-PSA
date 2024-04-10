import { useGetAllSightings } from '../hooks/use-get-sightings.ts'
import Home from './Home.tsx'
function App() {
  const { data } = useGetAllSightings()

  return (
    <>
      <div className="app">
        <h1>Drop Bear Sightings</h1>
        <ul>
          {data &&
            data.map((sighting) => (
              <>
                <p>{sighting.location}</p>
                <p>{sighting.date}</p>
                <p>{sighting.time}</p>
                <p>{sighting.description}</p>
              </>
            ))}
        </ul>
        <Home />
      </div>
    </>
  )
}

export default App
