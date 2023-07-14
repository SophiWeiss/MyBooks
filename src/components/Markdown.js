import ReactMarkdown from 'react-markdown'
import Link from 'next/link'

export default function Markdown({ children, className, ...other }) {
  return (
    <ReactMarkdown
      {...other}
      className={className}
      components={{
        a: ({ href, children }) => <Link href={href}>{children[0]}</Link>
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
