'use client'

import style from './css/MiniHeader.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MiniHeader({ book, chapter, visibleScrollPosition }) {
  const [scrollPosition, setScrollPosition] = useState(0)
  const handleScroll = () => {
    const position = window.scrollY
    setScrollPosition(position)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <AnimatePresence>
      {scrollPosition > visibleScrollPosition && (
        <motion.h2
          className={style.miniHeader}
          initial={{ y: '-100%' }}
          animate={{ y: 0 }}
          exit={{ y: '-100%' }}
          transition={{
            duration: 0.2,
            ease: [0, 0.66, 0.17, 1]
          }}
        >
          {book} | {chapter}
        </motion.h2>
      )}
    </AnimatePresence>
  )
}
