import { Outlet, useLocation } from 'react-router-dom'
import { Nav } from './Nav.tsx'
import { Footer } from './Footer.tsx'
import { AnimatePresence, motion } from 'framer-motion'

function App() {
  const location = useLocation()
  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          initial="initialState"
          animate="animateState"
          exit="exitState"
          transition={{
            duration: 0.55,
          }}
          variants={{
            initialState: {
              opacity: 1,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            animateState: {
              opacity: 1,
              clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)',
            },
            exitState: {
              clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
            },
          }}
        >
          <div className="app">
            <Nav />
            <Outlet />
            <Footer />
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default App
