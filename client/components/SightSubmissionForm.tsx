import React, { ChangeEvent, useCallback, useState } from 'react'
import useAddSighting from '../hooks/use-add-sightings'
import { useNavigate } from 'react-router-dom'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import Autosuggest from 'react-autosuggest'

export default function SightSubmissionForm() {
  const [display_name, setDisplay_Name] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [description, setDescription] = useState('')
  const [value, setValue] = useState<string>('')
  const [lat, setLat] = useState(0)
  const [lon, setLon] = useState(0)
  const [suggestions, setSuggestions] = useState<string[]>([])
  const provider = new OpenStreetMapProvider()

  const navigate = useNavigate()
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
      const { display_name, lat, lon } = results[0].raw
      setDisplay_Name(results[0].raw.display_name)
      setLat(Number(results[0].raw.lat))
      setLon(Number(results[0].raw.lon))
      mutation.mutate({
        description,
        date,
        time,
        lat,
        lon,
        display_name,
      })
      setDescription('')
      setDate('')
      setTime('')
      navigate('/home')
    },
    [
      mutation,
      lat,
      lon,
      display_name,
      description,
      date,
      navigate,
      provider,
      value,
      time,
    ],
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
  }
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="location">Location: </label>
          {/* <input
            // placeholder="place of encounter"
            // onChange={handleLocationChange}
            value={display_name}
            id="location"
          ></input> */}
          <Autosuggest
            suggestions={suggestions}
            onSuggestionsFetchRequested={onSuggestionsFetchRequested}
            onSuggestionsClearRequested={onSuggestionsClearRequested}
            onSuggestionSelected={onSuggestionSelected}
            getSuggestionValue={(suggestion) => suggestion}
            renderSuggestion={(suggestion) => <div>{suggestion}</div>}
            inputProps={inputProps}
          />

          <br />
          <label htmlFor="date">Date: </label>
          <input
            placeholder="date of encounter (ex: 2024-04-21)"
            onChange={handleDateChange}
            value={date}
            id="date"
          ></input>
          <br />
          <label htmlFor="time">Time: </label>
          <input
            placeholder="time of encounter (ex: 23:00:00)"
            onChange={handleTimeChange}
            value={time}
            id="time"
          ></input>
          <br />
          <br />
          <label htmlFor="description">Encounter Description: </label>
          <input
            placeholder="Decribe your drop bear encounter with as much detail as you can remember"
            onChange={handleDescriptionChange}
            value={description}
            id="description"
          ></input>
          <br />
          <button>Send Report</button>
          <br />
        </form>
      </div>
    </>
  )
}
