import style from './css/Dots.module.css'
import Link from 'next/link'
import Button from './Button'

export default function Dots({ count, selectedIndex }) {
  const dots = Array.from({ length: count }).map((_, i) => (
    <div key={i} className={style.dot} data-selected={i === selectedIndex} />
  ))

  return (
    <Link href={'/books'}>
      <Button className={style.dots}>{dots}</Button>
    </Link>
  )
}
