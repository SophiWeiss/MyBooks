import style from './page.module.css'
import { getSortedBooksData } from '@/lib/books'
import BookCard from '@/components/BookCard'

export default async function AllBooks() {
  const books = (await getSortedBooksData()).map(book => (
    <li key={book.id}>
      <BookCard book={book} />
    </li>
  ))

  return (
    <section className={style.allBooks}>
      <h1 className={style.header}>All Books</h1>
      <ul className={style.booksList}>{books}</ul>
    </section>
  )
}
