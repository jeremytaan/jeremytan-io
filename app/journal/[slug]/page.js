import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkHtml from 'remark-html'

export default async function PostPage({ params }) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContents)
  const wordCount = content.split(/\s+/).length
const readingTime = Math.ceil(wordCount / 200)

  const processed = await unified()
    .use(remarkParse)
    .use(remarkHtml)
    .process(content)
  const htmlContent = processed.toString()

  return (
    <main style={{
      background: '#111010',
      minHeight: '100vh',
      padding: '120px 24px 80px',
    }}>
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
      }}>

        {/* Back link */}
        <a href="/journal" style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '11px',
          color: '#E8342A',
          textDecoration: 'none',
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          display: 'inline-block',
          marginBottom: '48px',
        }}>← All Entries</a>

        {/* Date */}
        <p style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '11px',
          color: '#666',
          letterSpacing: '0.08em',
          marginBottom: '16px',
    }}>{data.date} · {readingTime} min read</p>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: '700',
          color: '#F0EDE8',
          lineHeight: '1.1',
          marginBottom: '16px',
          letterSpacing: '-0.02em',
        }}>{data.title}</h1>

        {/* Tag */}
        {data.tag && (
          <p style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '10px',
            color: '#E8342A',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            marginBottom: '56px',
          }}>{data.tag}</p>
        )}

<hr style={{ border: 'none', borderTop: '1px solid #2C2C2C', marginBottom: '16px' }} />
        {/* Content */}
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{
            color: '#C8C4BE',
            fontSize: '17px',
            lineHeight: '1.8',
            fontWeight: '300',
          }}
        />

        <style>{`
          .post-content p {
            margin-bottom: 24px;
          }
          div[dangerouslysetinnerhtml] p,
          div p {
            margin-bottom: 24px;
          }
        `}</style>

      </div>
    </main>
  )
}