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
    <main className={[commonStyle.main, style.allBooks].join(' ')}>
      <h1 className={style.header}>All Books</h1>
      <BookGrid books={books} />
    </main>
  )
}
