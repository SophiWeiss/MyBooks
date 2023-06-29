import Link from 'next/link'
import style from '@/css/Ukraine.module.css'

export default function Ukraine() {
  return (
    <Link href={'/ukraine'} className={style.Ukraine}>
      <div className={style.UkraineBlue} />
      <div className={style.UkraineYellow} />
    </Link>
  )
}
