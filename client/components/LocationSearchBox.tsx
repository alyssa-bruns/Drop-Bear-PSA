import React, { useState } from 'react'
import { OpenStreetMapProvider } from 'leaflet-geosearch'
import Autosuggest from 'react-autosuggest'

const LocationSearchBox: React.FC = () => {
  const [value, setValue] = useState<string>('')
  const [suggestions, setSuggestions] = useState<string[]>([])
  const provider = new OpenStreetMapProvider()

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const results = await provider.search({ query: value })
    console.log(results)
  }

  const inputProps: Autosuggest.InputProps<string> = {
    placeholder: 'Search for a location...',
    value,
    onChange: onChange,
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={(suggestion) => suggestion}
          renderSuggestion={(suggestion) => <div>{suggestion}</div>}
          inputProps={inputProps}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default LocationSearchBox
