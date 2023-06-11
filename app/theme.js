'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import style from './page.module.css'
import { motion } from 'framer-motion'

export default function ModeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      {mounted ? (
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className={style.modeSwitch}
        >
          <motion.div layout className={style.innerModeSwitch} />
        </button>
      ) : (
        <div className={style.modeSwitchUnmounted} />
      )}
    </>
  )
}
