import ReactMarkdown from 'react-markdown'

export default function Markdown(props) {
  const { children, ...other } = props
  return <ReactMarkdown {...other}>{children}</ReactMarkdown>
}
