'use client'

import style from '@/page.module.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import { Nunito } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { wrap } from 'framer-motion'
import Link from 'next/link'

const nunito = Nunito({ subsets: ['cyrillic', 'latin'] })

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0
    }
  },
  center: {
    x: 0,
    opacity: 1,
    scale: 1
  },
  exit: direction => {
    return {
      x: direction < 0 ? 200 : -200,
      opacity: 0,
      scale: 0
    }
  }
}

function Arrow({ right, left, onClick }) {
  return (
    <button
      data-right={right}
      data-left={left}
      className={style.arrow}
      onClick={onClick}
    >
      {right && <BsChevronRight />}
      {left && <BsChevronLeft />}
    </button>
  )
}

function Dots({ count, selectedIndex }) {
  const dots = Array.from({ length: count }).map((_, i) => (
    <div key={i} className={style.dot} data-selected={i === selectedIndex} />
  ))

  return (
    <Link href={'/books'} className={style.dots}>
      {dots}
    </Link>
  )
}

export default function Books() {
  const [[book, direction], setBook] = useState([0, 0])

  const books = [
    {
      id: 1,
      title: 'Book 1',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
        'ad minim veniam, quis nostrud exercitation ullamco',
      status: 'Done'
    },
    {
      id: 2,
      title: 'Book 2',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
        'ad minim veniam, quis nostrud exercitation ullamco',
      status: 'Done'
    },
    {
      id: 3,
      title: 'Book 3',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ' +
        'eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ' +
        'ad minim veniam, quis nostrud exercitation ullamco',
      status: 'Done'
    }
  ]

  const bookIndex = wrap(0, books.length, book)

  const paginate = newDirection => {
    setBook([book + newDirection, newDirection])
  }

  return (
    <>
      <div className={style.books}>
        <Arrow left onClick={() => paginate(-1)} />
        <Link href={`/books/${books[bookIndex].id}`}>
          <AnimatePresence
            initial={false}
            custom={direction}
            mode={'popLayout'}
          >
            <motion.div
              className={style.bookCard}
              key={book}
              custom={direction}
              variants={variants}
              initial={'enter'}
              animate={'center'}
              exit={'exit'}
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 30 },
                opacity: { duration: 0.3 }
              }}
            >
              <h3 className={style.bookTitle}>{books[bookIndex].title}</h3>
              <p className={style.bookDescription}>
                {books[bookIndex].description}
              </p>
              <div className={style.bookStatus}>
                <div
                  className={style.bookStatusIndicator}
                  data-status={books[bookIndex].status}
                />
                <small
                  className={[style.bookStatusText, nunito.className].join(' ')}
                >
                  {books[bookIndex].status}
                </small>
              </div>
            </motion.div>
          </AnimatePresence>
        </Link>
        <Arrow right onClick={() => paginate(1)} />
      </div>
      <Dots count={books.length} selectedIndex={bookIndex} />
    </>
  )
}
