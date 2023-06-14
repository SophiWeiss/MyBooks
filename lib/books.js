import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const booksDirectory = path.join(process.cwd(), path.join('content', 'books'))

export function getAllBooksIds() {
  const fileNames = fs.readdirSync(booksDirectory)
  return fileNames.map(fileName => ({ params: { id: fileName } }))
}

export function getSortedBooksData() {
  const fileNames = fs.readdirSync(booksDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')

    const fullPath = path.join(booksDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, { encoding: 'utf8' })

    const matterResult = matter(fileContents)

    return { id, ...matterResult.data }
  })
  return allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1
  })
}

export async function getBooksData(id) {
  const fullPath = path.join(booksDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
