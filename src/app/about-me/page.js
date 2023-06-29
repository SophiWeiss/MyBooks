import { readMd } from '@/lib/markdown'
import Markdown from '@/components/Markdown'

export const metadata = {
  title: 'About Me'
}

export default async function AboutMe() {
  const { content } = await readMd('about-me.md')
  return (
    <article>
      <Markdown>{content}</Markdown>
    </article>
  )
}
