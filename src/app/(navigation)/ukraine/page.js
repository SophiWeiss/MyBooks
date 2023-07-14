import style from '@/css/articles.module.css'
import { readMd } from '@/lib/markdown'
import Markdown from '@/components/Markdown'

export const metadata = {
  title: 'Ukraine💙💛'
}

export default async function Ukraine() {
  const { content, title } = await readMd('ukraine.md')
  return (
    <main>
      <article className={style.article}>
        <Markdown>{`# ${title}\n${content}`}</Markdown>
      </article>
    </main>
  )
}
