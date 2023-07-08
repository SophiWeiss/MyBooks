import style from './layout.module.css'
import ThemeSwitch from '@/components/ThemeSwitch'

export default function Navigation({ children }) {
  return (
    <>
      <nav className={style.nav}>
        <ThemeSwitch />
      </nav>
      <main className={style.main}>{children}</main>
    </>
  )
}
