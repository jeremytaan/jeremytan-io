import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function PostPage({ params }) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContents)
  const paragraphs = content.split(/\n\n+/).filter(p => p.trim())

  return (
    <main>
      <p style={{ fontSize: '13px', color: '#7A7268' }}>{data.date}</p>
      <h1 style={{ fontSize: '32px', fontWeight: '700', margin: '8px 0 40px' }}>{data.title}</h1>
      <article>
        {paragraphs.map((para, i) => (
          <p key={i}>{para.trim()}</p>
        ))}
      </article>
    </main>
  )
}