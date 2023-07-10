import style from './layout.module.css'
import Link from 'next/link'
import { HiMenuAlt2 } from 'react-icons/hi'
import ThemeSwitch from '@/components/ThemeSwitch'
import Ukraine from '@/components/Ukraine'
import DropDown from '@/components/DropDown'

export default function Navigation({ children }) {
  const links = [
    { href: '/', component: 'Home' },
    { href: '/books', component: 'Books' },
    { href: '/about-me', component: 'About Me' },
    { href: '/ukraine', component: <Ukraine size={20} link={false} /> }
  ]

  const linkElements = links.map(({ href, component }) => (
    <Link href={href} key={href} className={style.linkElement}>
      {component}
    </Link>
  ))

  return (
    <>
      <nav className={style.nav}>
        <DropDown
          direction={'row'}
          align={'start'}
          icon={<HiMenuAlt2 size={20} />}
        >
          {linkElements}
        </DropDown>
        <ThemeSwitch />
      </nav>
      <main>{children}</main>
    </>
  )
}
