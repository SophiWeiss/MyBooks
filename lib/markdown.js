import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'
import fs from 'fs'

export async function renderMd(path) {
  const fileContent = fs.readFileSync(path, 'utf8')
  const matterResult = matter(fileContent)
  const contentHtml = (await remark().use(html).process(matterResult.content))
    .value
  return { contentHtml, ...matterResult.data }
}
