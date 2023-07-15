import { getBookContent, getBookData } from '@/lib/books'

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { id, chapter } = params
  const { title } = await getBookData(id)
  return { title }
}

export async function generateStaticParams({ params }) {
  const { id } = params
  const chapters = await getBookContent(id)
  return chapters.map(chapter => ({
    chapter: chapter.index.toString()
  }))
}

export default function Chapter({ params }) {
  const { id, chapter } = params
  return (
    <h1>
      Book {id}, Chapter {chapter}
    </h1>
  )
}
