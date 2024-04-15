import { useGetAllSightings } from '../hooks/use-get-sightings'

export default function Sightingfeed() {
  const { data } = useGetAllSightings()

  return (
    <ul>
      {data &&
        data.map((sighting) =>
          sighting.is_approved ? (
            <div className="card" key={sighting.id}>
              <header className="card-header">
                <p className="card-header-title">{sighting.display_name}</p>
                <br />
              </header>
              <p className="card-header-title is-size-7">
                Sighting recorded at {sighting.time} on {sighting.date}
              </p>
              <div className="card-content">
                <div className="content">{sighting.description}</div>
              </div>
            </div>
          ) : null,
        )}
    </ul>
  )
}
