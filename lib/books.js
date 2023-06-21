import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const booksDirectory = path.join(process.cwd(), path.join('content', 'books'))

export async function getSortedBooksData() {
  const fileNames = fs.readdirSync(booksDirectory)
  const allPostsData = await Promise.all(
    fileNames.map(async id => {
      const summaryPath = path.join(path.join(booksDirectory, id), 'summary.md')
      const fileContents = fs.readFileSync(summaryPath, 'utf8')

      const matterResult = matter(fileContents)
      const description = (
        await remark().use(html).process(matterResult.content)
      ).value

      return { id, ...matterResult.data, description }
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
        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)

        const content = (await remark().use(html).process(matterResult.content))
          .value

        return { content, ...matterResult.data }
      })
  )
}
