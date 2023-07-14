import commonStyle from '@/css/common.module.css'
import articleStyle from '@/css/articles.module.css'
import { readMd } from '@/lib/markdown'
import Markdown from '@/components/Markdown'

export const metadata = {
  title: 'About Me'
}

export default async function AboutMe() {
  const { content, title } = await readMd('about-me.md')
  return (
    <main className={commonStyle.main}>
      <article className={articleStyle.article}>
        <Markdown>{`# ${title}\n${content}`}</Markdown>
      </article>
    </main>
  )
}
