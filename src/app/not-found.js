import style from './not-found.module.css'
import commonStyle from '@/css/common.module.css'
import Link from 'next/link'

export const metadata = {
  title: '404: This cat could not be found'
}

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
