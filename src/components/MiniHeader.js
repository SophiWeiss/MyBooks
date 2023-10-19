'use client'

import style from './css/MiniHeader.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function MiniHeader({ book, chapter, targetId }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const target = document.getElementById(targetId)
      if (target.getBoundingClientRect().bottom < 0) {
        setVisible(true)
      } else {
        setVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [targetId])

  return (
    <AnimatePresence>
      {visible && (
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
