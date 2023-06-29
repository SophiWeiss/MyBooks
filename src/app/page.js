import style from './page.module.css'
import Link from 'next/link'
import { getSortedBooksData } from '@/lib/books'
import ThemeSwitch from '@/components/ThemeSwitch'
import Books from '@/components/Books'
import Ukraine from '@/components/Ukraine'
import License from '@/components/License'

export default async function Home() {
  return (
    <>
      <header className={style.header}>
        <ThemeSwitch />
      </header>
      <main className={style.main}>
        <h1 className={style.title}>
          <Link href={'/about-me'}>My</Link> Books
        </h1>
        <Books books={await getSortedBooksData()} />
      </main>
      <footer className={style.footer}>
        <License />
        <Ukraine />
      </footer>
    </>
  )
}
