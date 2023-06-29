import style from '@/css/Arrow.module.css'
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs'
import Button from '@/components/Button'

export default function Arrow({ right, left, onClick }) {
  let icon
  if (right) icon = <BsChevronRight />
  else if (left) icon = <BsChevronLeft />
  return (
    <Button
      className={style.arrow}
      onClick={onClick}
      data-right={right}
      data-left={left}
    >
      {icon}
    </Button>
  )
}
