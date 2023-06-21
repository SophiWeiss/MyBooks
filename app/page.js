import style from './page.module.css'
import Image from 'next/image'
import ThemeSwitch from './components/theme'
import Books from './components/books'
import Link from 'next/link'
import { getSortedBooksData } from '@lib/books'

function Title() {
  return (
    <h1 className={style.title}>
      <Link href={'/about-me'}>My</Link> Books
    </h1>
  )
}

function License() {
  return (
    <div className={style.license}>
      <a
        rel="license"
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
        className={style.licenseImage}
      >
        <Image fill alt="Creative Commons License" src="/by-nc-nd.svg" />
      </a>
      <small className={style.licenceText}>
        This work is licensed under a
        <br />
        <a
          rel="license"
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
          International License.
        </a>
      </small>
    </div>
  )
}

function Ukraine() {
  return (
    <Link href={'/ukraine'} className={style.Ukraine}>
      <div className={style.UkraineBlue} />
      <div className={style.UkraineYellow} />
    </Link>
  )
}

export default async function Home() {
  return (
    <>
      <header className={style.header}>
        <ThemeSwitch />
      </header>
      <main className={style.main}>
        <Title />
        <Books books={await getSortedBooksData()} />
      </main>
      <footer className={style.footer}>
        <License />
        <Ukraine />
      </footer>
    </>
  )
}
