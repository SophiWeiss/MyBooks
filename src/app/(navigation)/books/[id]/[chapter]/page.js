import commonStyle from '@/css/common.module.css'
import articleStyle from '@/css/articles.module.css'
import { getBookContent, getBookData, getChapterContent } from '@/lib/books'
import Markdown from '@/components/Markdown'
import SideMenu from '@/components/SideMenu'
import { BiSolidBookBookmark } from 'react-icons/bi'
import Link from 'next/link'

export const dynamicParams = false

export async function generateMetadata({ params }) {
  const { id, chapter } = params
  const { title: bookTitle } = await getBookData(id)
  const { title: chapterTitle } = await getChapterContent(id, chapter)
  return { title: `${bookTitle} | ${chapterTitle}` }
}

export async function generateStaticParams({ params }) {
  const { id } = params
  const chapters = await getBookContent(id)
  return chapters.map(chapter => ({
    chapter: chapter.index.toString()
  }))
}

export default async function Chapter({ params }) {
  const { id, chapter } = params
  const { title: bookTitle } = await getBookData(id)
  const { title: chapterTitle, content } = await getChapterContent(id, chapter)
  const chapters = await getBookContent(id)

  const chapterLinks = chapters.map(chapter => (
    <Link
      key={chapter.title}
      href={`/books/${id}/${chapter.index}`}
      className={commonStyle.sideMenuLink}
    >
      {chapter.title}
    </Link>
  ))

  return (
    <>
      <SideMenu bottom left icon={<BiSolidBookBookmark size={20} />}>
        {chapterLinks}
      </SideMenu>
      <main className={commonStyle.main}>
        <article className={articleStyle.article}>
          <Markdown>{`# ${bookTitle}\n## ${chapterTitle}\n${content}`}</Markdown>
        </article>
      </main>
    </>
  )
}
