import style from './css/Markdown.module.css'
import ReactMarkdown from 'react-markdown'

export default function Markdown(props) {
  const { children, ...other } = props
  return (
    <ReactMarkdown className={style.markdown} {...other}>
      {children}
    </ReactMarkdown>
  )
}
