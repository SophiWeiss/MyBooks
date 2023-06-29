import style from './css/Card.module.css'

export default function Card({ children, className = '' }) {
  return <div className={[className, style.card].join(' ')}>{children}</div>
}
