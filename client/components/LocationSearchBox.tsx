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
    // Handle selection here, maybe set the value to state or pass it to a parent component
    setValue(suggestionValue)
  }

  const inputProps: Autosuggest.InputProps<string> = {
    placeholder: 'Search for a location...',
    value,
    onChange: onChange,
  }

  return (
    <div>
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
  )
}

export default LocationSearchBox
