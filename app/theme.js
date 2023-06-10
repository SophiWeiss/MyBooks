'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import style from './page.module.css'

export default function ModeSwitch() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    <>
      {mounted ? (
        <div
          onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          className={style.modeSwitch}
          style={{
            justifyContent: theme === 'dark' ? 'flex-end' : 'flex-start'
          }}
        >
          <div className={style.innerModeSwitch} />
        </div>
      ) : (
        <div className={style.modeSwitchUnmounted} />
      )}
    </>
  )
}
