import { readMd } from '@lib/markdown'
import Markdown from '@/components/Markdown'

export const metadata = {
  title: 'Ukraine💙💛'
}

export default async function Ukraine() {
  const { content } = await readMd('ukraine.md')
  return (
    <article>
      <Markdown>{content}</Markdown>
    </article>
  )
}
