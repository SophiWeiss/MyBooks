'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import style from './css/ThemeSwitch.module.css'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'
import { RiComputerFill } from 'react-icons/ri'

export default function ThemeSwitch() {
  const { theme: currentTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const themes = [
    { theme: 'dark', icon: <BsFillMoonFill key={'dark'} /> },
    { theme: 'system', icon: <RiComputerFill key={'system'} /> },
    { theme: 'light', icon: <BsSunFill key={'light'} /> }
  ]

  useEffect(() => setMounted(true), [])

  return mounted ? (
    <div className={style.switch}>
      {themes.map(({ theme, icon }) => (
        <button
          key={theme}
          data-selected={currentTheme === theme}
          onClick={() => setTheme(theme)}
        >
          {icon}
        </button>
      ))}
      <div className={style.selected} data-theme={currentTheme} />
    </div>
  ) : (
    <div className={style.switch}>
      {themes.map(({ theme, icon }) => (
        <button key={theme} disabled>
          {icon}
        </button>
      ))}
    </div>
  )
}
