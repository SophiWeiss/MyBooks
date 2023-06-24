import { getBookContent, getBookData, getSortedBooksData } from '@lib/books'

export const dynamicParams = false

export async function generateStaticParams() {
  const books = await getSortedBooksData()

  return books.map(book => ({
    bookID: book.id
  }))
}

export default async function Book({ params }) {
  let { bookID } = params
  let content = await getBookContent(bookID)
  let data = await getBookData(bookID)
  return (
    <article>
      <h1>{data.title}</h1>
      <h2>{content[0].title}</h2>
      <div dangerouslySetInnerHTML={{ __html: content[0].contentHtml }} />
    </article>
  )
}
