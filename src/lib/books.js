import fs from 'fs'
import path from 'path'
import { readMd } from './markdown'
import readingTime from 'reading-time'

const booksDirectory = path.join(process.cwd(), 'content', 'books')

export async function getSortedBooksData() {
  const fileNames = fs.readdirSync(booksDirectory)
  const allBooksData = await Promise.all(fileNames.map(getBookData))
  return allBooksData.sort((a, b) => {
    return a.index > b.index ? 1 : -1
  })
}

export async function getBookData(id) {
  const summaryPath = path.join('books', id, 'summary.md')
  return { id, ...(await readMd(summaryPath)) }
}

export async function getBookReadingTime(bookContent) {
  const words = bookContent.map(chapter => chapter.content).join(' ')
  console.log(words)
  return Math.round(readingTime(words, { wordsPerMinute: 60 }).minutes)
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
        return { index: parseInt(fileName), ...(await readMd(fullPath)) }
      })
  )
}

export async function getChapterContent(id, chapter) {
  const chapterPath = path.join('books', id, 'chapters', `${chapter}.md`)
  return { index: chapter, ...(await readMd(chapterPath)) }
}
