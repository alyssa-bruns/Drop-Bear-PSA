import { AnimatePresence, motion } from 'framer-motion'

export function News() {
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
          <h2>News</h2>
        </motion.div>
      </AnimatePresence>
    </>
  )
}
