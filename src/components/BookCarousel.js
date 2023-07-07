'use client'

import style from './css/BookCarousel.module.css'
import { AnimatePresence, motion, wrap } from 'framer-motion'
import { useEffect, useState } from 'react'
import Dots from './Dots'
import Arrow from './Arrow'
import BookCard from '/src/components/BookCard'

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

const transition = {
  x: { type: 'spring', stiffness: 300, damping: 30 },
  opacity: { duration: 0.3 }
}

export default function BookCarousel({ books }) {
  const [[book, direction], setBook] = useState([null, 0])

  useEffect(() => {
    setBook([parseInt(localStorage.getItem('book')) || 0, 0])
  }, [])

  const bookIndex = wrap(0, books.length, book)
  const bookData = books[bookIndex]

  const paginate = newDirection => {
    setBook([book + newDirection, newDirection])
    localStorage.setItem('book', book + newDirection)
  }

  return (
    <>
      <div className={style.books}>
        <Arrow left onClick={() => paginate(-1)} />
        {book === null ? (
          <div className={style.bookCardEmpty} />
        ) : (
          <AnimatePresence
            initial={false}
            custom={direction}
            mode={'popLayout'}
          >
            <motion.div
              key={book}
              custom={direction}
              variants={variants}
              initial={'enter'}
              animate={'center'}
              exit={'exit'}
              transition={transition}
            >
              <BookCard book={bookData} />
            </motion.div>
          </AnimatePresence>
        )}
        <Arrow right onClick={() => paginate(1)} />
      </div>
      <Dots count={books.length} selectedIndex={bookIndex} />
    </>
  )
}
