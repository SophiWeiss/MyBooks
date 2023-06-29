import style from './layout.module.css'
import { BsHouse } from 'react-icons/bs'
import Link from 'next/link'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function Navigation({ children }) {
  return (
    <main className={style.main}>
      <nav className={style.navLeft}>
        <Link href={'/'} className={style.homeLink}>
          <BsHouse />
        </Link>
      </nav>
      {children}
      <nav className={style.navRight}>
        <ThemeSwitch />
      </nav>
    </main>
  )
}
