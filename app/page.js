import style from './page.module.css'
import Image from 'next/image'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Nunito } from 'next/font/google'

const nunito = Nunito({ subsets: ['cyrillic', 'latin'] })

function Title() {
  return (
    <header>
      <h1 className={style.header}>
        <span className={style.headerPurple}>My</span> Books
      </h1>
    </header>
  )
}

function Arrow({ right, left }) {
  return (
    <>
      {right && <BsChevronRight />}
      {left && <BsChevronLeft />}
    </>
  )
}

function BookCard({ title, description, status }) {
  return (
    <a className={style.bookCard}>
      <h2 className={style.bookTitle}>{title}</h2>
      <p className={style.bookDescription}>{description}</p>
      <div className={style.bookStatus}>
        <div className={style.bookStatusIndicator} data-status={status} />
        <div className={`${style.bookStatusText} ${nunito.className}`}>
          {status}
        </div>
      </div>
    </a>
  )
}

function Dots() {
  return (
    <div>
      <div />
      <div />
      <div />
      <div />
    </div>
  )
}

function Books() {
  return (
    <main>
      <div>
        <Arrow left />
        <BookCard
          title={'Book 1'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
            ' eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
            'enim ad minim veniam, quis nostrud exercitation ullamco'
          }
          status={'Done'}
        />
        <Arrow right />
      </div>
      <Dots />
    </main>
  )
}

function ModeSwitch() {
  return (
    <div className={style.modeSwitch}>
      <div className={style.innerModeSwitch} />
    </div>
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
      <div className={style.licenceText}>
        This work is licensed under a
        <br />
        <a
          rel="license"
          href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
        >
          Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
          International License.
        </a>
      </div>
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
      <Title />
      <Books />
      <ModeSwitch />
      <License />
      <Ukraine />
    </>
  )
}
