import React, { useEffect, useRef } from 'react'
import {
  MapContainer,
  TileLayer,
  useMap,
  Popup,
  Marker,
  useMapEvents,
} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

const Map = () => {
  const mapRef = useRef(null)
  const latitude = -37.2109
  const longitude = 142.398

  return (
    // Make sure you set the height and width of the map container otherwise the map won't show
    <MapContainer
      center={[latitude, longitude]}
      zoom={13}
      ref={mapRef}
      style={{ height: '30vh', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  )
}

export default Map
