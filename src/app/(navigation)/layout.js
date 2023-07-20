'use client'

import commonStyle from '@/css/common.module.css'
import Link from 'next/link'
import { HiMenuAlt2 } from 'react-icons/hi'
import { IoSettings } from 'react-icons/io5'
import { useSelectedLayoutSegments } from 'next/navigation'
import ThemeSwitch from '@/components/ThemeSwitch'
import Ukraine from '@/components/Ukraine'
import SideMenu from '@/components/SideMenu'

export default function Navigation({ children }) {
  const segment = useSelectedLayoutSegments()
  const isBookChapterSegment = (segment[0] = 'books' && segment.length === 3)

  const links = [
    { href: '/', component: 'Home' },
    { href: '/books', component: 'Books' },
    { href: '/about-me', component: 'About Me' },
    { href: '/ukraine', component: <Ukraine size={20} link={false} /> }
  ]

  const linkElements = links.map(({ href, component }) => (
    <Link href={href} key={href} className={commonStyle.sideMenuLink}>
      {component}
    </Link>
  ))

  return (
    <>
      <SideMenu top left icon={<HiMenuAlt2 size={20} />}>
        {linkElements}
      </SideMenu>
      <SideMenu top right icon={<IoSettings size={20} />}>
        <ThemeSwitch />
      </SideMenu>
      {children}
    </>
  )
}
