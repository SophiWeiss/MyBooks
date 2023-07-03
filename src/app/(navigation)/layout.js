import style from './layout.module.css'
import { HiHome } from 'react-icons/hi2'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function Navigation({ children }) {
  return (
    <main className={style.main}>
      <nav className={style.navLeft}>
        <Link href={'/'} className={style.homeLink}>
          <HiHome />
        </Link>
      </nav>
      {children}
      <nav className={style.navRight}>
        <ThemeSwitch />
      </nav>
    </main>
  )
}
