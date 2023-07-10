import style from './css/Arrow.module.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'

export default function Arrow({ right, left, onClick }) {
  return (
    <button
      data-right={right}
      data-left={left}
      className={style.arrow}
      onClick={onClick}
    >
      {right && <BsChevronRight size={30} />}
      {left && <BsChevronLeft size={30} />}
    </button>
  )
}
