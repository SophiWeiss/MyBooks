import SideMenu from '@/components/SideMenu'
import { BiSolidBookBookmark } from 'react-icons/bi'
import Link from 'next/link'
import commonStyle from '@/css/common.module.css'
import { getBookContent } from '@/lib/books'

export default async function ChapterLayout({ children, params }) {
  const { id } = params
  const chapters = await getBookContent(id)

  const chapterLinks = chapters.map(chapter => (
    <Link
      key={chapter.title}
      href={`/books/${id}/${chapter.index}`}
      className={commonStyle.sideMenuLink}
    >
      {chapter.title}
    </Link>
  ))

  return (
    <>
      <SideMenu scroll bottom left icon={<BiSolidBookBookmark size={20} />}>
        {chapterLinks}
      </SideMenu>
      {children}
    </>
  )
}
