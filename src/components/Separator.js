import style from './css/Separator.module.css'

export default function Separator({ horizontal, vertical }) {
  return (
    <div
      className={style.separator}
      data-horizontal={horizontal}
      data-vertical={vertical}
    />
  )
}
