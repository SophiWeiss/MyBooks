import style from './css/page.module.css'
import Link from 'next/link'

export default function NotFound() {
  return (
    <main className={style.notFound}>
      <h1>404</h1>
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
