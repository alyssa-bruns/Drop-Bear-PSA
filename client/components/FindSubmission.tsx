import { HashLink } from 'react-router-hash-link'

export default function FindSubmission(props: { sight: number }) {
  console.log(props)
  return (
    <>
      <HashLink to={`/home#id${props.sight}`}>Find Submission</HashLink>
    </>
  )
}
