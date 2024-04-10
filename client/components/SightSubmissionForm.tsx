import { ChangeEvent, useCallback, useState } from 'react'
import useAddSighting from '../hooks/use-add-sightings'
import { useNavigate } from 'react-router-dom'

export function SightSubmissionForm() {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [time, setTime] = useState('')
  const [email, setEmail] = useState('')
  const [description, setDescription] = useState('')

  const navigate = useNavigate()
  const mutation = useAddSighting()

  const handleLocationChange = (e: ChangeEvent<HTMLInputElement>) => {
    setLocation(e.target.value)
  }

  const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDate(e.target.value)
  }

  const handleTimeChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setTime(e.target.value)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setEmail(e.target.value)
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setDescription(e.target.value)
  }

  return(
    
  )
