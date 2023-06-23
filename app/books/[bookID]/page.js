import { getSortedBooksData } from '@lib/books'

export async function generateStaticParams() {
  const books = await getSortedBooksData()

  return books.map(book => ({
    bookID: book.id
  }))
}

export default function Book({ params }) {
  let { bookID } = params
  return (
    <main>
      <h1>Book {bookID}</h1>
    </main>
  )
}
