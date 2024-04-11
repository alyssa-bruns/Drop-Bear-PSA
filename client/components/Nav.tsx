import { Link } from 'react-router-dom'

export function Nav() {
  return (
    <>
      <nav className="navbar" aria-label="main navigation"></nav>
      <Link to="/education">Educational Resources</Link>
      <Link to="/safety">Tourist Safety</Link>
      <Link to="/news">News</Link>
      <Link to="/donate">Donate</Link>
    </>
  )
}
