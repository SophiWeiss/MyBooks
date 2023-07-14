import style from './page.module.css'
import commonStyle from '@/css/common.module.css'
import { getSortedBooksData } from '@/lib/books'
import BookGrid from '@/components/BookGrid'

export const metadata = {
  title: 'All Books'
}

export default async function AllBooks() {
  const books = await getSortedBooksData()

  return (
    <main className={style.allBooks}>
      <h1 className={commonStyle.title}>All Books</h1>
      <BookGrid books={books} />
    </main>
  )
}
