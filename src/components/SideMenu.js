'use client'

import style from './css/SideMenu.module.css'
import { useEffect, Children } from 'react'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'
import Separator from '@/components/Separator'

export default function SideMenu({
  icon,
  top,
  bottom,
  left,
  right,
  children,
  scroll
}) {
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  const staggerDirection = top ? 1 : -1
  const staggerChildren = scroll ? 0 : 0.06
  const opacity = scroll ? 0 : 1
  const variants = {
    initial: { opacity, transition: { staggerChildren, staggerDirection } },
    visible: { opacity: 1, transition: { staggerChildren, staggerDirection } },
    exit: { opacity, transition: { staggerChildren, staggerDirection } }
  }

  const translateX = left ? -100 : 100
  const elementVariants = {
    visible: { opacity: 1, x: 0, scale: 1 },
    initial: { opacity: 0, x: translateX, scale: 0.2 },
    exit: { opacity: 0, x: translateX, scale: 0.2 }
  }

  useEffect(() => setIsOpen(false), [pathName])

  useEffect(() => {
    const addMargin = () => {
      let oldWidth = document.documentElement.clientWidth
      document.body.classList.add(style.sideMenuOpen)
      let newWidth = document.documentElement.clientWidth
      let scrollbarWidth = newWidth - oldWidth
      document.body.style.marginRight = `${scrollbarWidth}px`
    }

    const removeMargin = () => {
      document.body.classList.remove(style.sideMenuOpen)
      document.body.style.marginRight = `0`
    }

    if (isOpen) addMargin()
    else removeMargin()

    return removeMargin
  }, [isOpen, pathName])

  const scrollSeparator = scroll && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Separator horizontal />
    </motion.div>
  )

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className={style.overlay}
          />
        )}
      </AnimatePresence>
      <div
        className={style.sideMenu}
        data-left={left}
        data-right={right}
        data-top={top}
        data-bottom={bottom}
        data-is-open={isOpen}
        data-scroll={scroll}
      >
        <button className={style.button} onClick={() => setIsOpen(x => !x)}>
          {icon}
        </button>
        <div className={style.items}>
          <AnimatePresence>
            {isOpen && (
              <>
                {scrollSeparator}
                <motion.div
                  variants={variants}
                  initial={'initial'}
                  animate={'visible'}
                  exit={'exit'}
                  className={style.itemsList}
                >
                  {Children.map(children, (child, i) => (
                    <motion.div
                      variants={elementVariants}
                      style={{ width: 'max-content' }}
                      key={i}
                    >
                      {child}
                    </motion.div>
                  ))}
                </motion.div>
                {scrollSeparator}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  )
}
