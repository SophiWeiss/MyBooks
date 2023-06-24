'use client'

import style from './css/Books.module.css'
import { Nunito } from 'next/font/google'
import { AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { motion, wrap } from 'framer-motion'
import Link from 'next/link'
import Card from './Card'
import Dots from './Dots'
import Arrow from './Arrow'

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

const transition = {
  x: { type: 'spring', stiffness: 300, damping: 30 },
  opacity: { duration: 0.3 }
}

export default function Books({ books }) {
  const [[book, direction], setBook] = useState([0, 0])

  const bookIndex = wrap(0, books.length, book)
  const bookData = books[bookIndex]

  const paginate = newDirection => {
    setBook([book + newDirection, newDirection])
  }

  return (
    <>
      <div className={style.books}>
        <Arrow left onClick={() => paginate(-1)} />
        <Link href={`/books/${bookData.id}`}>
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
              <Card>
                <div className={style.bookTitle}>
                  <h3>{bookData.title}</h3>
                  <div className={style.bookStatus}>
                    <div
                      className={style.bookStatusIndicator}
                      data-status={bookData.status}
                    />
                    <small
                      className={[style.bookStatusText, nunito.className].join(
                        ' '
                      )}
                    >
                      {bookData.status}
                    </small>
                  </div>
                </div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: bookData.contentHtml
                  }}
                />
              </Card>
            </motion.div>
          </AnimatePresence>
        </Link>
        <Arrow right onClick={() => paginate(1)} />
      </div>
      <Dots count={books.length} selectedIndex={bookIndex} />
    </>
  )
}
