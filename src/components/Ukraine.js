import style from './css/Ukraine.module.css'
import Link from 'next/link'

export default function Ukraine({ size, link = true }) {
  return link ? (
    <Link
      href={'/ukraine'}
      className={style.UkraineLink}
      style={{ width: `${size}px`, height: `${(size * 2) / 3}px` }}
    >
      <div className={style.UkraineBlue} />
      <div className={style.UkraineYellow} />
    </Link>
  ) : (
    <div
      className={style.Ukraine}
      style={{ width: `${size}px`, height: `${(size * 2) / 3}px` }}
    >
      <div className={style.UkraineBlue} />
      <div className={style.UkraineYellow} />
    </div>
  )
}
