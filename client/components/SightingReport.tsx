import Geosearch from './Geosearch'
import LocationSearchBox from './LocationSearchBox'
import SightSubmissionForm from './SightSubmissionForm'

export default function SightingReport() {
  return (
    <>
      <h2>Sighting Report</h2>
      <LocationSearchBox />
      <Geosearch />
      <SightSubmissionForm />
    </>
  )
}
