'use client'

import style from './css/ThemeSwitch.module.css'
import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { BsFillMoonFill, BsSunFill } from 'react-icons/bs'
import { RiComputerFill } from 'react-icons/ri'

export default function ThemeSwitch() {
  const { theme: currentTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  const themes = [
    { theme: 'dark', icon: <BsFillMoonFill size={15} key={'dark'} /> },
    { theme: 'system', icon: <RiComputerFill size={15} key={'system'} /> },
    { theme: 'light', icon: <BsSunFill size={15} key={'light'} /> }
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
