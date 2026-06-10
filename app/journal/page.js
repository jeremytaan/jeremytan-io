import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import Link from 'next/link'

export default function JournalPage() {
  const postsDir = path.join(process.cwd(), 'posts')
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.mdx'))

  const posts = files.map(filename => {
    const slug = filename.replace('.mdx', '')
    const fileContents = fs.readFileSync(path.join(postsDir, filename), 'utf8')
    const { data } = matter(fileContents)
    return { slug, ...data }
  })

  return (
    <main style={{ background: '#111010', minHeight: '100vh', padding: '120px 24px 80px' }}>
      <div style={{ maxWidth: '860px', margin: '0 auto' }}>

        {/* Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginBottom: '48px' }}>
          <a href="/" style={{ color: '#E8342A', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
              <polyline points="9 22 9 12 15 12 15 22"/>
            </svg>
          </a>
        </div>

        <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#E8342A', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>— Latest Writing</p>
        <h1 style={{ fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: '700', marginBottom: '80px' }}>Journal <span style={{ fontFamily: 'Noto Sans SC, sans-serif', fontWeight: '300', fontSize: '0.5em', color: '#7A7268' }}>日志</span></h1>

        {posts.map(post => (
          <div key={post.slug}>
            <Link href={`/journal/${post.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'block', padding: '32px 0' }}>
              <p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#666', marginBottom: '12px' }}>{post.slug}</p>
              <h2 style={{ fontSize: '18px', fontWeight: '500', color: '#F0EDE8', marginBottom: '12px' }}>{post.title}</h2>
              {post.tag && <span style={{ fontFamily: 'DM Mono, monospace', fontSize: '10px', color: '#E8342A', border: '1px solid #E8342A', padding: '3px 8px', letterSpacing: '0.08em' }}>{post.tag}</span>}
<p style={{ fontFamily: 'DM Mono, monospace', fontSize: '11px', color: '#666', marginTop: '16px' }}>{post.date}</p>
            </Link>
            <hr style={{ border: 'none', borderTop: '1px solid #2C2C2C' }} />
          </div>
        ))}
      </div>
    </main>
  )
}