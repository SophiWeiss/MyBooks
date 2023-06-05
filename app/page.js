import Image from 'next/image'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
function Title() {
  return <h1>My Books</h1>
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
    <a>
      <h2>{title}</h2>
      <p>{description}</p>
      <div data-status={status}>{status}</div>
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
    <section>
      <div>
        <Arrow right />
        <BookCard
          title={'Book 1'}
          description={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do' +
            ' eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut ' +
            'enim ad minim veniam, quis nostrud exercitation ullamco'
          }
          status={'Done'}
        />
        <Arrow left />
      </div>
      <Dots />
    </section>
  )
}

function ModeSwitch() {
  return (
    <div>
      <div />
    </div>
  )
}

function License() {
  return (
    <>
      <a
        rel="license"
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
      >
        <Image
          priority
          alt="Creative Commons License"
          style="border-width:0"
          src="/by-nc-nd.svg"
          width={88}
          height={31}
        />
      </a>
      This work is licensed under a{' '}
      <a
        rel="license"
        href="https://creativecommons.org/licenses/by-nc-nd/4.0/"
      >
        Creative Commons Attribution-NonCommercial-NoDerivatives 4.0
        International License.
      </a>
    </>
  )
}

function Ukraine() {
  return (
    <a>
      <div />
      <div />
    </a>
  )
}

export default function Home() {
  return (
    <main>
      <Title />
      <Books />
      <ModeSwitch />
      <License />
      <Ukraine />
    </main>
  )
}
