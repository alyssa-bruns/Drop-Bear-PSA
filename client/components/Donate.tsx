import { Link } from 'react-router-dom'

export function Donate() {
  return (
    <>
      <header>Donate</header>
      <div className="columns">
        <div className="column is-three-fifths is-offset-one-fifth">
          <div id="alyssa" className="columns is-centered is-mobile card">
            <div className="column">
              <Link
                target="_blank"
                to="https://www.aucklandzoo.co.nz/get-involved/donate-wild-work-aotearoa"
              >
                Donate
              </Link>
            </div>
            <div className="column is-half">
              <header className="card-header-title">WildWork Aotearoa</header>
              <div className="card-content">WildWork Aotearoa description</div>
            </div>
            <div className="column">
              <img
                alt="researching holding a native bird"
                src="../images/donation/wild-work-aotearoa.jpeg"
                className="image is-3by2"
              />
            </div>
          </div>
          <div id="mae" className="columns is-centered is-mobile card">
            <div className="column">
              <img
                alt="WWF logo"
                src="../images/donation/wwf-logo.png"
                className="image is-16by9"
              />
            </div>
            <div className="column is-half">
              <header className="card-header-title">
                World Wildlife Foundation
              </header>
              <div className="card-content">charity description</div>
            </div>
            <div className="column">
              <Link
                target="_blank"
                to="https://www.aucklandzoo.co.nz/get-involved/donate-wild-work-aotearoa"
              >
                Donate
              </Link>
            </div>
          </div>
          <div id="keanu" className=" columns is-centered is-mobile card">
            <div className="column">
              <Link
                target="_blank"
                to="https://www.aucklandzoo.co.nz/get-involved/donate-wild-work-aotearoa"
              >
                Donate
              </Link>
            </div>
            <div className="column is-half">
              <header className="card-header-title">
                Friends of the Koala
              </header>
              <div className="card-content">charity description</div>
            </div>
            <div className="column">
              <img
                alt="koala lying on a branch"
                src="../images/donation/fotk.png"
                className="image is-3by2"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
