import style from './css/Ukraine.module.css'
import Link from 'next/link'

export default function Ukraine({ size }) {
  return (
    <Link
      href={'/ukraine'}
      className={style.Ukraine}
      style={{ width: `${size}px`, height: `${(size * 2) / 3}px` }}
    >
      <div className={style.UkraineBlue} />
      <div className={style.UkraineYellow} />
    </Link>
  )
}
