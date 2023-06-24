import style from './page.module.css'

export default function NotFound() {
  return (
    <main className={style.notFound}>
      <h1>404</h1>
      <p>
        This cat could not be found.
        <br />
        <small>Maybe try looking under the bed?</small>
      </p>
    </main>
  )
}
