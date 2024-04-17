import { Link } from 'react-router-dom'

export function Footer() {
  return (
    <footer id="footer" className="footer">
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div className="content has-text-centered">
            <p>
              <Link to="/" className={'link-styles'}>
                <strong>Drop Bear PSA </strong>
              </Link>
              is created as a final project by
              <Link
                to="https://github.com/alyssa-bruns"
                className={'link-styles'}
              >
                {' '}
                Alyssa,
              </Link>
              <Link to="https://github.com/Mae-BC" className={'link-styles'}>
                {' '}
                Mae{' '}
              </Link>{' '}
              &
              <Link to="https://github.com/KeakOne" className={'link-styles'}>
                {' '}
                Keanu
              </Link>{' '}
              as part of
              <Link to="https://devacademy.co.nz/" className={'link-styles'}>
                {' '}
                Dev Academy Aotearoa
              </Link>
            </p>
          </div>
          <div className="column has-text-centered is-three-fifths is-offset-one-fifth">
            <div className="content has-text-weight-light">
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
