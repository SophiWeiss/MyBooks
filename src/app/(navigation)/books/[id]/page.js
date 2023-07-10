import style from '@/css/articles.module.css'
import { getBookContent, getBookData, getSortedBooksData } from '@/lib/books'
import Markdown from '@/components/Markdown'

export const dynamicParams = false

export async function generateMetadata({ params }) {
  let { id } = params
  let { title } = await getBookData(id)
  return { title }
}

export async function generateStaticParams() {
  const books = await getSortedBooksData()
  return books.map(book => ({
    id: book.id
  }))
}

export default async function Book({ params }) {
  let { id } = params
  let chapters = await getBookContent(id)
  let { title } = await getBookData(id)
  return (
    <article className={style.article}>
      <Markdown>
        {`# ${title}\n${chapters
          .map(chapter => `## ${chapter.title}\n${chapter.content}`)
          .join('\n')}`}
      </Markdown>
    </article>
  )
}
