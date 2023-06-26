import { readMd } from '@lib/markdown'
import Markdown from '@/components/Markdown'
import path from 'path'

export const metadata = {
  title: 'About Me'
}

const mdPath = path.join(process.cwd(), path.join('content', 'about-me.md'))

export default async function AboutMe() {
  const { content } = await readMd(mdPath)
  return (
    <article>
      <Markdown>{content}</Markdown>
    </article>
  )
}
