import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async function PostPage({ params }) {
  const { slug } = await params
  const filePath = path.join(process.cwd(), 'posts', `${slug}.mdx`)
  const fileContents = fs.readFileSync(filePath, 'utf8')
  const { content, data } = matter(fileContents)

  return (
    <main className="max-w-2xl mx-auto px-6 py-24">
      <p className="text-sm text-gray-400 mb-2">{data.date}</p>
      <h1 className="text-3xl font-bold mb-8">{data.title}</h1>
      <article className="prose prose-invert whitespace-pre-wrap">
        {content}
      </article>
    </main>
  )
}