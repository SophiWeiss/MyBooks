import style from './page.module.css'

export default function NotFound() {
  return (
    <main className={style.notFound}>
      <h1>404</h1>
      <p>This page could not be found.</p>
    </main>
  )
}
