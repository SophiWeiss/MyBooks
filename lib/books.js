import fs from 'fs'
import path from 'path'
import { renderMd } from '@lib/markdown'

const booksDirectory = path.join(process.cwd(), path.join('content', 'books'))

export async function getSortedBooksData() {
  const fileNames = fs.readdirSync(booksDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async id => {
      const summaryPath = path.join(path.join(booksDirectory, id), 'summary.md')
      return { id, ...(await renderMd(summaryPath)) }
    })
  )
  return allPostsData.sort((a, b) => {
    return a.updatedAt < b.updatedAt ? 1 : -1
  })
}

export async function getBookContent(id) {
  const bookDirectory = path.join(booksDirectory, id)
  return await Promise.all(
    fs
      .readdirSync(bookDirectory)
      .filter(fileName => !isNaN(parseInt(fileName.replace(/\.md$/, ''))))
      .map(async fileName => {
        const fullPath = path.join(bookDirectory, fileName)
        return await renderMd(fullPath)
      })
  )
}
