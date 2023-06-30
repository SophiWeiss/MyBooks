import style from './css/Card.module.css'

export default function Card({ children, ...other }) {
  return (
    <div className={style.card} {...other}>
      {children}
    </div>
  )
}
