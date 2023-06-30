import { getBookContent, getBookData, getSortedBooksData } from '@/lib/books'
import Markdown from '@/components/Markdown'

export const dynamicParams = false

export async function generateMetadata({ params }) {
  let { bookID } = params
  let { title } = await getBookData(bookID)
  return { title }
}

export async function generateStaticParams() {
  const books = await getSortedBooksData()
  return books.map(book => ({
    bookID: book.id
  }))
}

export default async function Book({ params }) {
  let { bookID } = params
  let chapters = await getBookContent(bookID)
  let { title } = await getBookData(bookID)
  let { content } = chapters[0]
  return (
    <article>
      <h1>{title}</h1>
      {chapters[0] && <Markdown>{content}</Markdown>}
    </article>
  )
}
