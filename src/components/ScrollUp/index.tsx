'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FaArrowUp } from 'react-icons/fa6'

export default function ScrollUp() {
  const [visible, setVisible] = useState(false)

  const handleScroll = () => {
    console.log(window.scrollY)
    setVisible(window.scrollY > 0)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence mode="wait">
      {visible && (
        <motion.div
          key="scroll-up-btn"
          initial={{ x: 200 }}
          animate={{ x: 0 }}
          exit={{ x: 200 }}
          className="fixed bottom-8 right-8 z-[99] cursor-pointer rounded-full border bg-white/40 p-4 dark:bg-black/50"
          whileHover={{ scale: 1.2 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <FaArrowUp className="text-2xl" />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
