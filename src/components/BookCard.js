import style from './css/BookCard.module.css'
import Link from 'next/link'
import Markdown from './Markdown'

export default function BookCard({ book, ...other }) {
  return book === undefined ? (
    <div className={style.bookCardEmpty} />
  ) : (
    <Link className={style.bookCard} href={`/books/${book.id}`} {...other}>
      <div className={style.flexRow}>
        <h2 className={style.title}>{book.title}</h2>
        <div className={style.status}>
          <div className={style.statusIndicator} data-status={book.status} />
          <small className={style.statusText}>{book.status}</small>
        </div>
      </div>
      <Markdown className={style.description}>{book.content}</Markdown>
    </Link>
  )
}
