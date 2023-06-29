import fs from 'fs'
import path from 'path'
import { readMd } from './markdown'

const booksDirectory = path.join(process.cwd(), 'content', 'books')

export async function getSortedBooksData() {
  const fileNames = fs.readdirSync(booksDirectory)
  const allPostsData = await Promise.all(fileNames.map(getBookData))
  return allPostsData.sort((a, b) => {
    return a.updatedAt < b.updatedAt ? 1 : -1
  })
}

export async function getBookData(id) {
  const summaryPath = path.join('books', id, 'summary.md')
  return { id, ...(await readMd(summaryPath)) }
}

export async function getBookContent(id) {
  const chaptersFullPath = path.join(booksDirectory, id, 'chapters')
  const chaptersRelativePath = path.join('books', id, 'chapters')
  return await Promise.all(
    fs
      .readdirSync(chaptersFullPath)
      .sort((a, b) => (parseInt(a) > parseInt(b) ? 1 : -1))
      .map(async fileName => {
        const fullPath = path.join(chaptersRelativePath, fileName)
        return await readMd(fullPath)
      })
  )
}