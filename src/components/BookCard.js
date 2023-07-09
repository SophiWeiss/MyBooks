import style from './css/BookCard.module.css'
import { Nunito } from 'next/font/google'
import Link from 'next/link'
import Markdown from './Markdown'

const nunito = Nunito({ subsets: ['cyrillic', 'latin'] })

export default function BookCard({ book, ...other }) {
  return (
    <Link className={style.bookCard} href={`/books/${book.id}`} {...other}>
      <div className={style.bookTitle}>
        <h3>{book.title}</h3>
        <div className={style.bookStatus}>
          <div
            className={style.bookStatusIndicator}
            data-status={book.status}
          />
          <small className={[style.bookStatusText, nunito.className].join(' ')}>
            {book.status}
          </small>
        </div>
      </div>
      <Markdown>{book.content}</Markdown>
    </Link>
  )
}
