/* eslint-disable react/no-unescaped-entities */
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Donate() {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ y: 25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 0.75,
          }}
        >
          <div className="columns">
            <div className="column is-three-fifths is-offset-one-fifth">
              <h2 className="is-size-2 has-text-centered has-text-weight-bold block mt-3">
                Donate
              </h2>
              <p>
                While they can give you a bite or a fright, even Drop Bears
                deserve protection. Here at Drop Bear PSA, we believe in caring
                for all animals - scary or sweet. Please consider donating to
                one of the following organizations dedicated to caring and
                protecting our animals here, in Aotearoa, and around the world.
              </p>
              <br />
              <br />
              <div id="alyssa" className="columns is-centered is-mobile card">
                <div className="column">
                  <Link
                    target="_blank"
                    to="https://www.aucklandzoo.co.nz/get-involved/donate-wild-work-aotearoa"
                  >
                    Donate
                  </Link>
                </div>
                <div className="column is-two-thirds">
                  <header className="card-header-title">
                    WildWork Aotearoa
                  </header>
                  <div className="card-content">
                    <p>
                      Wild Work Aotearoa is a conservation initiative by
                      Auckland Zoo aimed at preserving New Zealand's native
                      species and ecosystems. The program focuses on various
                      conservation projects across the country, including
                      habitat restoration, breeding programs for endangered
                      species, and community education.
                    </p>
                    <p>
                      Donating to Wild Work Aotearoa supports these critical
                      conservation efforts by providing funds for essential
                      activities such as wildlife research, veterinary care for
                      injured animals, and community outreach programs. By
                      contributing, individuals can directly contribute to
                      safeguarding New Zealand's unique biodiversity for future
                      generations.
                    </p>
                  </div>
                </div>
                <div className="column">
                  <Link to="https://www.aucklandzoo.co.nz/" target="_blank">
                    <img
                      alt="Auckland Zoo logo"
                      src="../images/donation/auckland-zoo-logo.png"
                      className="image is-3by2"
                    />
                  </Link>
                </div>
              </div>
              <br />
              <div id="mae" className="columns is-centered is-mobile card">
                <div className="column">
                  <Link target="_blank" to="https://wwf.org.nz/">
                    <img
                      alt="WWF logo"
                      src="../images/donation/wwf-logo.png"
                      className="image is-16by9"
                    />
                  </Link>
                </div>
                <div className="column is-two-thirds">
                  <header className="card-header-title">
                    World Wildlife Foundation
                  </header>
                  <div className="card-content">
                    <p>
                      WWF New Zealand (World Wide Fund for Nature) is a
                      prominent conservation organization dedicated to
                      protecting the natural environment and biodiversity both
                      locally and globally.
                    </p>
                    <p>
                      WWF NZ works on various conservation initiatives aimed at
                      preserving ecosystems, wildlife, and natural resources.
                      These efforts include habitat restoration, species
                      protection, sustainable fisheries management, climate
                      change mitigation, and advocating for policies that
                      promote environmental sustainability.
                    </p>
                    <p>
                      The organization focuses on protecting iconic New Zealand
                      species such as the kiwi, kakapo, and Hector's dolphin,
                      along with their habitats. WWF NZ supports research,
                      monitoring, and conservation projects to ensure the
                      survival of these native species.
                    </p>
                  </div>
                </div>
                <div className="column">
                  <Link target="_blank" to="https://wwf.org.nz/donate">
                    Donate
                  </Link>
                </div>
              </div>
              <br />
              <div id="keanu" className=" columns is-centered is-mobile card">
                <div className="column">
                  <Link
                    target="_blank"
                    to="https://friendsofthekoala.org/save-koalas/donate/"
                  >
                    Donate
                  </Link>
                </div>
                <div className="column is-two-thirds">
                  <header className="card-header-title">
                    Friends of the Koala
                  </header>
                  <div className="card-content">
                    <p>
                      Friends of the Koala is a non-profit organization
                      dedicated to the conservation and welfare of koalas in
                      Australia. Friends of the Koala works to protect and
                      conserve koalas and their habitats. This includes habitat
                      restoration, wildlife corridors, and advocating for
                      policies that safeguard koala populations and their
                      ecosystems.
                    </p>
                    <p>
                      The organization operates a koala rescue and
                      rehabilitation service, rescuing injured, sick, or
                      orphaned koalas and providing them with veterinary care
                      and rehabilitation. Once recovered, koalas are released
                      back into suitable habitats.
                    </p>
                    <p>
                      Friends of the Koala educates the public about koalas,
                      their habitat, and the threats they face. They engage with
                      local communities to raise awareness about koala
                      conservation and promote actions individuals can take to
                      protect these iconic marsupials.
                    </p>
                    <p>
                      The organization conducts research and monitoring programs
                      to better understand koala populations, their behaviors,
                      and the factors impacting their survival. This scientific
                      data informs conservation efforts and helps identify
                      priority areas for intervention.
                    </p>
                  </div>
                </div>
                <div className="column">
                  <Link target="_blank" to="https://friendsofthekoala.org/">
                    <img
                      alt="Friends of the Koala logo"
                      src="../images/donation/fotk-logo.png"
                      className="image is-3by2"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
