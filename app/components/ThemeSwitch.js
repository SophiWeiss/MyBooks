'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import style from './css/ThemeSwitch.module.css'
import { motion } from 'framer-motion'

export default function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      {mounted ? (
        <button
          onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className={style.themeSwitch}
        >
          <motion.div layout className={style.themeSwitch} />
        </button>
      ) : (
        <div className={style.themeSwitchUnmounted} />
      )}
    </>
  )
}
