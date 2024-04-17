import { AnimatePresence, motion } from 'framer-motion'

/* eslint-disable react/no-unescaped-entities */
export function TouristSafety() {
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
          <div className="columns ">
            <div className="column is-three-fifths is-offset-one-fifth">
              <h2 className="is-size-2 has-text-centered has-text-weight-bold block mt-3">
                Tourist Safety
              </h2>

              <div className="block column">
                <h3 className="is-size-4 has-text-centered">
                  Drop bears! Cute and Cuddly or Creatures of Chaos?
                </h3>
              </div>

              <div className="block column">
                <p>
                  Attention, fellow nature enthusiasts and outdoor adventurers!
                  As you explore the breathtaking wilderness of Australia,
                  there's something you need to be aware of: Drop Bears.
                </p>
              </div>
              <div className="block column">
                <img
                  className="image"
                  src="../images/koala.png"
                  alt="Ominous koala in a tree"
                />
              </div>

              <div className="column">
                <div className="block">
                  <p>
                    What are Drop Bears, you ask? Well, they're not your average
                    cuddly koalas. Drop Bears are a unique species of marsupial
                    found exclusively in the dense forests and woodlands of
                    Australia.
                  </p>
                </div>

                <div className="block">
                  <p>
                    It is rumored that Drop bears only attack tourists as
                    repeated consumption of Vegemite over one's lifetime
                    effectively inoculates oneself for reasons not yet
                    understood by science.
                  </p>
                </div>

                <div className="block">
                  <p>
                    They resemble their adorable koala cousins at first glance,
                    but don't be fooled by their innocent appearance!
                  </p>
                </div>

                <div className="block">
                  <p>
                    These crafty creatures have developed a rather unusual
                    hunting technique. From the lofty heights of eucalyptus
                    trees, Drop Bears wait patiently for unsuspecting prey to
                    amble though the forest. When the moment is right, they drop
                    down with astonishing speed and accuracy onto their prey
                    below. With powerful jaws and sharp claws, they can deliver
                    quite a surprise to anyone caught off guard.
                  </p>
                </div>

                <div className="block">
                  <p>
                    Now, you might be wondering, "How can I protect myself from
                    these airborne ambushes?" Fear not! Here are some essential
                    tips to stay safe in Drop Bear territory:
                  </p>
                </div>
              </div>

              <div className="column">
                <div className="block">
                  <img
                    className="image"
                    src="../images/koalaAtNight.png"
                    alt="Ominous koala in the dark"
                  />
                </div>

                <div className="block">
                  <h3 className=" is-size-3 has-text-centered">
                    How to keep yourself safe from drop bears
                  </h3>
                </div>

                <div className="block">
                  <p>
                    <p className="has-text-weight-semibold">
                      Avoid High-Risk Areas:
                    </p>{' '}
                    If possible, steer clear of dense forested areas, especially
                    during dusk and dawn when Drop Bears are most active
                  </p>
                </div>

                <div className="block">
                  <p>
                    <p className="has-text-weight-semibold">Stick Together:</p>{' '}
                    There is safety in numbers! While exploring the great
                    outdoors, its wise to travel in groups as they scare drop
                    bears away. The Drop Bear is famously anti-social and has
                    crippling social anxiety.
                  </p>
                </div>

                <div className="block">
                  <p>
                    <p className="has-text-weight-semibold">Stay Vigilant:</p>{' '}
                    Be on the look out for any suspicious rustling or movement
                    from the trees above. Drop bears will leave you alone if you
                    force them to make unnecessarily long or uncomfortably
                    intimate eye contact.
                  </p>
                </div>

                <div className="block">
                  <p>
                    <p className="has-text-weight-semibold">
                      Imitate The Locals:
                    </p>{' '}
                    Australian scientists have noticed a pattern of tourists
                    being attacked over locals. They recommend tourists imitate
                    the Australian accent to trick drop bears into thinking you
                    are Australian. It's important to note that if a drop bear
                    discovers your accent is fake they will become violent,
                    almost demonically so.
                  </p>
                </div>

                <div className="block">
                  <p>
                    <p className="has-text-weight-semibold">Mask Your Scent:</p>{' '}
                    Like most animals, the drop bear has a strong sense of
                    smell, they can sniff out a tourist over a kilometer away.
                    To protect yourself rub a bit of vegemite behind your ear.
                  </p>
                </div>

                <div className="block">
                  <p>
                    <p className="has-text-weight-semibold">
                      {' '}
                      Wearing Protective Gear:{' '}
                    </p>
                    Drop bears are intelligent creatures and will ignore people
                    who are wearing protective head gear. Effective head gear
                    can include spiked helmets also known as Pickelhaubes. For a
                    more cost effective solution weaving sharpened forks into
                    your hair is highly recommended by locals.
                  </p>
                </div>

                <div className="block">
                  {' '}
                  <h3 className="has-text-weight-semibold has-text-centered">
                    In the event of a Drop bear attack, remember the GRASS
                    method!
                  </h3>
                </div>

                <section className="hero grasshero is-small has-text-centered mb-4">
                  <div className="hero-body">
                    <p className="title">G.R.A.S.S.</p>
                    <div className="has-text-left">
                      <p className="subtitle">
                        <strong>Giggle</strong> excessively while making eye
                        contact. It makes drop bears uncomfortable.
                      </p>
                      <p className="subtitle">
                        <strong>Romance</strong> the drop bear into submission
                      </p>
                      <p className="subtitle">
                        <strong>Attempt</strong> to escape (You cant win this
                        one mate.)
                      </p>
                      <p className="subtitle">
                        <strong>Sacrifice</strong> the smallest member of your
                        group
                      </p>
                      <p className="subtitle">
                        <strong>Salvage</strong> whatever remaining pride you
                        have left. (You just got beaten up by an oversized rat.)
                      </p>
                    </div>
                  </div>
                </section>

                <div className="block">
                  <p>
                    Remember GRASS while out in the wilds and you will
                    (probably) survive!
                  </p>
                </div>

                <div className="block">
                  <img
                    className="image"
                    src="../images/koalaInATree.png"
                    alt="Koala looking down from a tree"
                  />
                </div>
                <div className="block">
                  <p className="is-size-7 has-text-weight-light block">
                    Developers of this website are not responsible for any
                    injuries that might incur while using the GRASS defense
                    method. The GRASS defense method is a specialized defense
                    mechanism against drop bears specifically and will likely to
                    be ineffective against other Australian wildlife.
                  </p>
                  <br />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
