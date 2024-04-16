/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { ChangeEvent, useCallback, useState } from 'react'
import useAddSighting from '../hooks/use-add-sightings'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import Autosuggest from 'react-autosuggest'

export default function SightSubmissionForm({ onFormSubmit }) {
  const [display_name, setDisplay_Name] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState<string>('')
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [suggestions, setSuggestions] = useState<string[]>([])
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const provider = new OpenStreetMapProvider()

  const mutation = useAddSighting()

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value)
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      const results = await provider.search({ query: value })
      setDisplay_Name(results[0].raw.display_name)
      setLat(Number(results[0].raw.lat))
      setLon(Number(results[0].raw.lon))
      mutation.mutate({
        description,
        date,
        time,
        lat: Number(results[0].raw.lat),
        lon: Number(results[0].raw.lon),
        display_name: results[0].raw.display_name,
      })
      onFormSubmit() //Sets isReporting to false upon submit
      setDescription('')
      setDate('')
      setTime('')
      setValue('') // Sets location input blank
      //Scroll to footer upon submit
      const successDiv = document.getElementById('footer')
      if (successDiv) {
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    },
    [provider, value, mutation, description, date, time, onFormSubmit],
  )

  const getSuggestions = async (value: string) => {
    const results = await provider.search({ query: value })
    setSuggestions(results.map((result) => result.label))
  }

  const onChange = (
    event: React.FormEvent<HTMLInputElement>,
    { newValue }: Autosuggest.ChangeEvent,
  ) => {
    setValue(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }: { value: string }) => {
    getSuggestions(value)
  }

  const onSuggestionsClearRequested = () => {
    setSuggestions([])
  }

  const onSuggestionSelected = async (
    event: React.FormEvent<HTMLInputElement>,
    { suggestionValue }: Autosuggest.SuggestionSelectedEventData<string>,
  ) => {
    setValue(suggestionValue)
  }

  const inputProps: Autosuggest.InputProps<string> = {
    placeholder: 'Search for a location...',
    value,
    onChange: onChange,
    required: 'true',
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="field is-horizontal">
            <div className="field-label">
              <label className="label has-text-left" htmlFor="location">
                Location:{' '}
              </label>
              <div className="input">
                <Autosuggest
                  suggestions={suggestions}
                  onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                  onSuggestionsClearRequested={onSuggestionsClearRequested}
                  onSuggestionSelected={onSuggestionSelected}
                  getSuggestionValue={(suggestion) => suggestion}
                  renderSuggestion={(suggestion) => <div>{suggestion}</div>}
                  inputProps={inputProps}
                />
              </div>
            </div>

            <div className="field-label">
              <label className="label has-text-left" htmlFor="date">
                Date:{' '}
              </label>
              <div className="control"></div>
              <input
                required
                type="date"
                className="input"
                placeholder="date of encounter (ex: 2024-04-21)"
                onChange={handleDateChange}
                value={date}
                id="date"
              ></input>
            </div>

            <div className="field-label">
              <label className="has-text-left label" htmlFor="time">
                Time:{' '}
              </label>
              <input
                required
                type="time"
                className="input"
                placeholder="time of encounter (ex: 23:00:00)"
                onChange={handleTimeChange}
                value={time}
                id="time"
              ></input>
            </div>
          </div>

          <div className="field">
            <label className="has-text-left label" htmlFor="description">
              Encounter Description:{' '}
            </label>
            <div className="control">
              <input
                required
                className="input textarea has-text-centered"
                placeholder="Decribe your drop bear encounter with as much detail as you can remember"
                onChange={handleDescriptionChange}
                value={description}
                id="description"
              ></input>
            </div>

            <div className="buttons is-centered m-3">
              <button className="button is-large is-success is-outlined">
                Submit encounter!
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}
