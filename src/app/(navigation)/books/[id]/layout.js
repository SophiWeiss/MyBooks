import { getBookData, getSortedBooksData } from '@/lib/books'

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { id } = params
  const { title } = await getBookData(id)
  return { title }
}

export async function generateStaticParams() {
  const books = await getSortedBooksData()
  return books.map(book => ({
    id: book.id
  }))
}

export default function BookLayout({ children }) {
  return children
}
