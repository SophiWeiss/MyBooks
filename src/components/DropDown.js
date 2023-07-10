'use client'

import style from './css/DropDown.module.css'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function DropDown({ icon, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  const variants = {
    visible: { transition: { staggerChildren: 0.07 } },
    initial: { transition: { staggerChildren: 0.07 } },
    exit: { transition: { staggerChildren: 0.07 } }
  }

  const elementVariants = {
    visible: { opacity: 1, x: 0 },
    initial: { opacity: 0, x: -50 },
    exit: { opacity: 0, x: 50 }
  }

  useEffect(() => setIsOpen(false), [pathName])

  return (
    <div className={style.dropDown}>
      <button
        data-is-open={isOpen}
        className={style.button}
        onClick={() => setIsOpen(x => !x)}
      >
        {icon}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={variants}
            initial={'initial'}
            animate={'visible'}
            className={style.elements}
            exit={'exit'}
          >
            {React.Children.map(children, child => (
              <motion.div variants={elementVariants}>{child}</motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
