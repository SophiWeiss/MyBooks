import style from './not-found.module.css'
import commonStyle from '@/css/common.module.css'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className={style.notFound}>
      <h1 className={commonStyle.title}>404</h1>
      <p>
        This cat could not be found.
        <br />
        <small>
          Maybe try looking under <Link href={'/'}>the bed?</Link>
        </small>
      </p>
    </main>
  )
}
