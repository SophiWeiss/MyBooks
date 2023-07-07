import style from './css/Ukraine.module.css'
import Link from 'next/link'

export default function Ukraine() {
  return (
    <Link href={'/ukraine'} className={style.Ukraine}>
      <div className={style.UkraineBlue} />
      <div className={style.UkraineYellow} />
    </Link>
  )
}
