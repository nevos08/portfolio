'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export default function Animator({ children }: { children: ReactNode }) {
  return (
    <motion.div initial={{ y: -100 }} animate={{ y: 0 }} transition={{ delay: 0.5 }}>
      {children}
    </motion.div>
  )
}
