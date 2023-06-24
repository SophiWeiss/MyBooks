import { renderMd } from '@lib/markdown'

export default async function AboutMe() {
  const { title, contentHtml } = await renderMd('content/about-me.md')
  return (
    <article>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  )
}
