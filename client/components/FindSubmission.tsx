import { useGetSightingById } from '../hooks/use-get-sightings'

export default function FindSubmission() {
  return (
    <>
      <HashLink smooth to={`/home#id${sighting.id}`}></HashLink>
    </>
  )
}
