import style from '@/css/Button.module.css'

export default function Button(props) {
  const { children, onClick, className, ...other } = props
  return (
    <button
      tabIndex={onClick ? null : -1}
      onClick={onClick}
      className={[className, style.button].join(' ')}
      {...other}
    >
      {children}
    </button>
  )
}
