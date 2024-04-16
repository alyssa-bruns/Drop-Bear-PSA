import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer className="footer">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="content has-text-centered">
            <p>
              <Link to="/">
                <strong>Drop Bear PSA </strong>
              </Link>
              is created as a final project by
              <Link to="https://github.com/alyssa-bruns"> Alyssa,</Link>
              <Link to="https://github.com/Mae-BC"> Mae </Link> &
              <Link to="https://github.com/KeakOne"> Keanu</Link> as part of
              <Link to="https://devacademy.co.nz/"> Dev Academy Aotearoa</Link>
            </p>
          </div>
          <div className="column has-text-centered is-three-fifths is-offset-one-fifth">
            <div className="content">
              <p>
                This site is created for humorous purposes and should be treated
                as a work of fiction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
