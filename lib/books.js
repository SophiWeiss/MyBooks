import fs from 'fs'
import path from 'path'

const booksDirectory = path.join(process.cwd(), path.join('content', 'books'))

import { readMd } from './markdown'
export async function getSortedBooksData() {
  const fileNames = fs.readdirSync(booksDirectory)
  const allPostsData = await Promise.all(fileNames.map(getBookData))
  return allPostsData.sort((a, b) => {
    return a.updatedAt < b.updatedAt ? 1 : -1
  })
}

export async function getBookData(id) {
  const summaryPath = path.join(path.join('books', id), 'summary.md')
  return { id, ...(await readMd(summaryPath)) }
}

export async function getBookContent(id) {
  const chaptersFullPath = path.join(booksDirectory, path.join(id, 'chapters'))
  const chaptersRelativePath = path.join('books', path.join(id, 'chapters'))
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
