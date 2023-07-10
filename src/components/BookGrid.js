'use client'

import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import { useEffect, useState } from 'react'
import BookCard from './BookCard'

export default function BookGrid({ books }) {
  const bookElements = books.map(book => (
    <BookCard style={{ maxWidth: 'unset' }} key={book.id} book={book} />
  ))

  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])

  return (
    mounted && (
      <ResponsiveMasonry columnsCountBreakPoints={{ 400: 1, 800: 2, 1200: 3 }}>
        <Masonry gutter={'20px'}>{bookElements}</Masonry>
      </ResponsiveMasonry>
    )
  )
}
