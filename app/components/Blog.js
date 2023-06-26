import { readMd } from '@lib/markdown'
import Markdown from './Markdown'

export default async function Blog({ path }) {
  const { content } = await readMd(path)
  return (
    <article>
      <Markdown>{content}</Markdown>
    </article>
  )
}
