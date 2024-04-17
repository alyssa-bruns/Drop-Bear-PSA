import { useRef } from 'react'
import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet'
import { Icon } from 'leaflet'
import iconPng from 'leaflet/dist/images/marker-icon.png'
import shadowPng from 'leaflet/dist/images/marker-shadow.png'

import 'leaflet/dist/leaflet.css'
import { useGetAllSightings } from '../hooks/use-get-sightings'
import FindSubmission from './FindSubmission'

const icon = new Icon({
  iconUrl: iconPng,
  shadowUrl: shadowPng,
})

const Map = () => {
  const { data: sightings = [], isLoading, isError } = useGetAllSightings()
  const mapRef = useRef(null)
  const latitude = -24.7761086
  const longitude = 134.755

  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error fetching data</div>

  return (
    <MapContainer
      className="map mt-4"
      center={[latitude, longitude]}
      zoom={3}
      ref={mapRef}
      style={{ height: '40vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {sightings.map((sighting) =>
        sighting.is_approved ? (
          <Marker
            icon={icon}
            key={sighting.id}
            position={[sighting.lat, sighting.lon]}
          >
            <Popup>
              <div>
                <h3>{sighting.display_name}</h3>
                <FindSubmission sight={sighting.id} />
                <p>Date: {sighting.date}</p>
                <p>Time: {sighting.time}</p>
                <p>{sighting.description}</p>
              </div>
            </Popup>
          </Marker>
        ) : null,
      )}
    </MapContainer>
  )
}

export default Map
