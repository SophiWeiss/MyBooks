import style from './page.module.css'
import commonStyle from '@/css/common.module.css'
import { getBookContent, getBookData } from '@/lib/books'
import Separator from '@/components/Separator'
import Markdown from '@/components/Markdown'
import Link from 'next/link'

export default async function Book({ params }) {
  const { id } = params
  const data = await getBookData(id)
  const chapters = await getBookContent(id)
  return (
    <main className={style.book}>
      <h1 className={commonStyle.title}>{data.title}</h1>
      <div className={style.data}>
        <p>
          <span className={style.propertyLabel}>Status:</span> {data.status}
        </p>
        <Separator vertical />
        <p>
          <span className={style.propertyLabel}>Last Update:</span>{' '}
          {new Date(data.updatedAt).toLocaleDateString()}
        </p>
        <Separator vertical />
        <p>
          <span className={style.propertyLabel}>Read Time:</span> not yet
          implemented
        </p>
      </div>
      <Markdown className={style.description}>{data.content}</Markdown>
      <Separator horizontal />
      <div className={style.chapters}>
        {chapters.map((chapter, i) => (
          <Link
            key={chapter.title}
            href={`/books/${id}/${i + 1}`}
            className={style.chapter}
          >
            {chapter.title}
          </Link>
        ))}
      </div>
    </main>
  )
}
