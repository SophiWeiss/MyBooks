'use client'

import style from './css/SideMenu.module.css'
import { useEffect, Children } from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function SideMenu({ icon, side, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  const variants = {
    initial: { transition: { staggerChildren: 0.07 } },
    visible: { transition: { staggerChildren: 0.07 } },
    exit: { transition: { staggerChildren: 0.07 } }
  }

  const translateX = side === 'left' ? -100 : 100
  const elementVariants = {
    visible: { opacity: 1, x: 0, scale: 1 },
    initial: { opacity: 0, x: translateX, scale: 0.2 },
    exit: { opacity: 0, x: translateX, scale: 0.2 }
  }

  useEffect(() => setIsOpen(false), [pathName])

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.6 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className={style.overlay}
          />
        )}
      </AnimatePresence>
      <div className={style.dropDown} data-is-open={isOpen}>
        <button className={style.button} onClick={() => setIsOpen(x => !x)}>
          {icon}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={variants}
              initial={'initial'}
              animate={'visible'}
              exit={'exit'}
              className={style.elements}
              style={side === 'right' && { alignItems: 'flex-end', right: 0 }}
            >
              {Children.map(children, child => (
                <motion.div variants={elementVariants}>{child}</motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}
