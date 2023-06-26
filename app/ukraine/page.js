import { renderMd } from '@lib/markdown'

export default async function Ukraine() {
  const { contentHtml } = await renderMd('content/ukraine.md')
  return (
    <article>
      <h1>Чому книжки російською?</h1>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </article>
  )
}
