import { Link } from 'react-router-dom'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DropBear } from './DropBear'
import { DropBear2 } from './DropBear2'

export function LandingPage() {
  return (
    <>
      <div className="landing-page">
        <div className="centered">
          <img src="../images/logo1.png" alt="logo" />
          <Link
            className="button is-large is-responsive is-outlined is-light"
            to="/home"
          >
            Enter
          </Link>
        </div>
        <div className="three">
          <DropBear2 />
        </div>
      </div>
    </>
  )
}
