import fs from 'fs'
import path from 'path'
import { readMd } from './markdown'

const booksDirectory = path.join(process.cwd(), path.join('content', 'books'))

export async function getSortedBooksData() {
  const fileNames = fs.readdirSync(booksDirectory)
  const allPostsData = await Promise.all(fileNames.map(getBookData))
  return allPostsData.sort((a, b) => {
    return a.updatedAt < b.updatedAt ? 1 : -1
  })
}

export async function getBookData(id) {
  const summaryPath = path.join(path.join(booksDirectory, id), 'summary.md')
  return { id, ...(await readMd(summaryPath)) }
}

export async function getBookContent(id) {
  const chaptersDirectory = path.join(booksDirectory, path.join(id, 'chapters'))
  return await Promise.all(
    fs
      .readdirSync(chaptersDirectory)
      .sort((a, b) => (parseInt(a) > parseInt(b) ? 1 : -1))
      .map(async fileName => {
        const fullPath = path.join(chaptersDirectory, fileName)
        return await readMd(fullPath)
      })
  )
}
