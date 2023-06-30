import style from './page.module.css'
import { getSortedBooksData } from '@/lib/books'
import BookList from '@/components/BookList'

export const metadata = {
  title: 'All Books'
}

export default async function AllBooks() {
  const books = await getSortedBooksData()

  return (
    <section className={style.allBooks}>
      <h1 className={style.header}>All Books</h1>
      <BookList books={books} />
    </section>
  )
}
