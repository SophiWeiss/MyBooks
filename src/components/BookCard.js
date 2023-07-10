import style from './css/BookCard.module.css'
import Link from 'next/link'
import Markdown from './Markdown'

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
          <small className={style.bookStatusText}>{book.status}</small>
        </div>
      </div>
      <Markdown>{book.content}</Markdown>
    </Link>
  )
}
