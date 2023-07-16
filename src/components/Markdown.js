import style from './css/Markdown.module.css'
import ReactMarkdown from 'react-markdown'
import Link from 'next/link'
import Image from 'next/image'

export default function Markdown({ children, className, ...other }) {
  return (
    <ReactMarkdown
      {...other}
      className={className}
      components={{
        a: ({ href, children }) => <Link href={href}>{children[0]}</Link>,
        p: ({
          node: {
            children: [image]
          },
          children: otherChildren
        }) => {
          if (image.tagName === 'img') {
            const metastring = image.properties.alt
            const alt = metastring?.replace(/ *\{[^)]*} */g, '')
            const metaWidth = metastring.match(/{([^}]+)x/)
            const metaHeight = metastring.match(/x([^}]+)}/)
            const width = metaWidth ? metaWidth[1] : '720'
            const height = metaHeight ? metaHeight[1] : '400'
            const isPriority = metastring?.toLowerCase().match('{priority}')

            return (
              <div
                className={style.imgContainer}
                style={{ aspectRatio: `${width / height}` }}
              >
                <Image
                  src={image.properties.src}
                  alt={alt}
                  priority={isPriority}
                  fill
                />
              </div>
            )
          }
          return <p>{otherChildren}</p>
        }
      }}
    >
      {children}
    </ReactMarkdown>
  )
}
