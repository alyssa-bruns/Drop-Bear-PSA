import { OpenStreetMapProvider } from 'leaflet-geosearch'
import provider from 'leaflet-geosearch/dist/providers/provider.d.ts'

export default function Geosearch() {
  const form = document.querySelector('form')
  const input = document.querySelector('input[type="text"]')
  const provider = new OpenStreetMapProvider()

  document.addEventListener('submit', async (event) => {
    event.preventDefault()
    console.log(input)
    const results = await provider.search({ query: input.value })
    console.log(results) // » [{}, {}, {}, ...]
  })
  return (
    <>
      <form>
        <label htmlFor="location">Location: </label>
        <input placeholder="search" type="text">
          {}
        </input>
      </form>
    </>
  )
}
