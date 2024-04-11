import { ChangeEvent, useCallback, useState } from 'react'
import useAddSighting from '../hooks/use-add-sightings'
import { useNavigate } from 'react-router-dom'

export default function SightSubmissionForm() {
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

  const handleTimeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTime(e.target.value)
  }

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
  }

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      mutation.mutate({
        description,
        date,
        time,
        location,
        email,
      })
      setDescription('')
      setDate('')
      setTime('')
      setLocation('')
      setEmail('')
      navigate('/')
    },
    [mutation, location, description, email, date, navigate, time],
  )
  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="location">Location: </label>
          <input
            placeholder="place of encounter"
            onChange={handleLocationChange}
            value={location}
            id="location"
          ></input>
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
          <label htmlFor="email">Email: </label>
          <input
            placeholder="email"
            onChange={handleEmailChange}
            value={email}
            id="email"
          ></input>
          <br />
          <label htmlFor="description">Encounter Description: </label>
          <input
            placeholder="Decribe your drop bear encounter with as much detail as you can remember"
            onChange={handleDescriptionChange}
            value={description}
            id="description"
          ></input>
          <br />
        </form>
      </div>
    </>
  )
}
