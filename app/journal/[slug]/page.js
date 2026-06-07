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
    .use(remarkHtml, { sanitize: false })
    .process(content)
  const htmlContent = processed.toString()

  return (
    <main style={{
      background: '#FAFAF7',
      minHeight: '100vh',
      padding: '120px 24px 80px',
    }}>
      <div style={{
        maxWidth: '680px',
        margin: '0 auto',
      }}>
        {/* Navigation links */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '24px',
          marginBottom: '48px',
        }}>
          <a href="/journal" style={{
            fontFamily: 'DM Mono, monospace',
            fontSize: '11px',
            color: '#E8342A',
            textDecoration: 'none',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
          }}>← All Entries</a>
          <a href="/" style={{
            color: '#E8342A',
            textDecoration: 'none',
            display: 'flex',
            alignItems: 'center',
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </a>
        </div>

        {/* Date */}
        <p style={{
          fontFamily: 'DM Mono, monospace',
          fontSize: '11px',
          color: '#9A9898',
          letterSpacing: '0.08em',
          marginBottom: '16px',
        }}>{data.date} · {readingTime} min read</p>

        {/* Title */}
        <h1 style={{
          fontSize: 'clamp(28px, 4vw, 48px)',
          fontWeight: '700',
          color: '#000000',
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

        <hr style={{ border: 'none', borderTop: '1px solid #DCDAD6', marginBottom: '16px' }} />

        {/* Content */}
        <div
          dangerouslySetInnerHTML={{ __html: htmlContent }}
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: '400',
            color: '#1A1A1A',
            fontSize: '16px',
            lineHeight: '1.85',
          }}
        />
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400&display=swap');
          .post-content p { margin-bottom: 24px; }
          div[dangerouslysetinnerhtml] p, div p { margin-bottom: 24px; } div img { width: 100%; max-height: 420px; object-fit: cover; object-position: top; border-radius: 4px; margin-bottom: 40px; display: block; }
        `}</style>
      </div>
    </main>
  )
}