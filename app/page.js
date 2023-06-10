import style from './page.module.css'
import Image from 'next/image'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Nunito } from 'next/font/google'
import ModeSwitch from './theme'

const nunito = Nunito({ subsets: ['cyrillic', 'latin'] })

function Title() {
  return (
    <h1 className={style.title}>
      <a>My</a> Books
    </h1>
  )
}

function Arrow({ right, left }) {
  return (
    <>
      {right && <BsChevronRight className={style.arrow} />}
      {left && <BsChevronLeft className={style.arrow} />}
    </>
  )
}

function BookCard({ title, description, status }) {
  return (
    <a className={style.bookCard}>
      <h3 className={style.bookTitle}>{title}</h3>
      <p className={style.bookDescription}>{description}</p>
      <div className={style.bookStatus}>
        <div className={style.bookStatusIndicator} data-status={status} />
        <small className={[style.bookStatusText, nunito.className].join(' ')}>
          {status}
        </small>
      </div>
    </a>
  )
}

function Dots() {
  return (
    <div className={style.dots}>
      <div className={style.dot} data-selected={true} />
      <div className={style.dot} />
      <div className={style.dot} />
      <div className={style.dot} />
    </div>
  )
}

function Books() {
  return (
    <>
      <div className={style.books}>
        <Arrow left />
        <BookCard
          title={'Book 1'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
            ' eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut' +
            ' enim ad minim veniam, quis nostrud exercitation ullamco'
          }
          status={'Done'}
        />
        <Arrow right />
      </div>
      <Dots />
    </>
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
    <a className={style.Ukraine}>
      <div className={style.UkraineBlue} />
      <div className={style.UkraineYellow} />
    </a>
  )
}

export default function Home() {
  return (
    <>
      <header className={style.header}>
        <ModeSwitch />
      </header>
      <main className={style.main}>
        <Title />
        <Books />
      </main>
      <footer className={style.footer}>
        <License />
        <Ukraine />
      </footer>
    </>
  )
}
