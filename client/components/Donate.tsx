export function Donate() {
  return (
    <>
      <header>Donate</header>
      <div>
        <div id="alyssa" className="card">
          <img
            alt="Auckland Zoo logo"
            src="../images/donation/auckland-zoo-logo.png"
            className="image is-16by9"
            width="200px"
          />
          <header className="card-header-title">WildWork Aotearoa</header>
          <div className="card-content">WildWork Aotearoa description</div>
          <img
            alt="researching holding a native bird"
            src="../images/donation/wild-work-aotearoa.jpeg"
            className="image is-3by2"
            width="200px"
          />
        </div>
        <div id="mae" className="card">
          <img
            alt="close-up of whale reentering ocean"
            src="../images/donation/wwf-nz.png"
            className="image is-3by2"
            width="200px"
          />
          <header className="card-header-title">
            World Wildlife Foundation
          </header>
          <div className="card-content">charity description</div>
          <img
            alt="WWF logo"
            src="../images/donation/wwf-logo.png"
            className="image is-16by9"
            width="200px"
          />
        </div>
        <div id="keanu" className="card">
          <img
            alt="Friends of the Koala logo"
            src="../images/donation/fotk-logo.png"
            className="image is-16by9"
            width="200px"
          />
          <header className="card-header-title">Friends of the Koala</header>
          <div className="card-content">charity description</div>
          <img
            alt="koala lying on a branch"
            src="../images/donation/fotk.png"
            className="image is-3by2"
            width="200px"
          />
        </div>
      </div>
    </>
  )
}
