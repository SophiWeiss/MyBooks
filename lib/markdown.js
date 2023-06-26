import matter from 'gray-matter'
import fs from 'fs'

export async function readMd(path) {
  const fileContent = fs.readFileSync(path, 'utf8')
  const matterResult = matter(fileContent)
  return { content: matterResult.content, ...matterResult.data }
}
