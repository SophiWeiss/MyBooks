import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

export default function Markdown(props) {
  const { children, ...other } = props
  return (
    <ReactMarkdown
      {...other}
      components={{
        a: ({ href, children }) => <Link href={href}>{children[0]}</Link>
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
