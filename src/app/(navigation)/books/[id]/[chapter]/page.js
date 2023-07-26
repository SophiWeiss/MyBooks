import commonStyle from '@/css/common.module.css'
import articleStyle from '@/css/articles.module.css'
import { getBookData, getChapterContent } from '@/lib/books'
import Markdown from '@/components/Markdown'

export default async function Chapter({ params }) {
  const { id, chapter } = params
  const { title: bookTitle } = await getBookData(id)
  const { title: chapterTitle, content } = await getChapterContent(id, chapter)

  return (
    <main className={commonStyle.main}>
      <article className={articleStyle.article}>
        <Markdown>{`# ${bookTitle}\n## ${chapterTitle}\n${content}`}</Markdown>
      </article>
    </main>
  )
}
