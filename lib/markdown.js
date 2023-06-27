import matter from 'gray-matter'
import fs from 'fs'
import path from 'path'

export async function readMd(relativePath) {
  const fullPath = path.join(process.cwd(), path.join('content', relativePath))
  const fileContent = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContent)
  return { content: matterResult.content, ...matterResult.data }
}
