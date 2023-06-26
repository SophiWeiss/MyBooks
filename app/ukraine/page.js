import { readMd } from '@lib/markdown'
import Markdown from '@/components/Markdown'
import path from 'path'

export const metadata = {
  title: 'Ukraine💙💛'
}

const mdPath = path.join(process.cwd(), path.join('content', 'ukraine.md'))

export default async function Ukraine() {
  const { content } = await readMd(mdPath)
  return (
    <article>
      <Markdown>{content}</Markdown>
    </article>
  )
}
