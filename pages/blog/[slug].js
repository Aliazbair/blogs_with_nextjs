import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import marked from 'marked'
import Link from 'next/link'

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {
  return (
    <div className='container max-w-3xl mx-auto p-5'>
      <Link href="/">
        <a className="bg-gradient-to-tr from-indigo-500 to-indigo-900 p-2 hover:bg-red-900 rounded w-full text-center text-white">
          Go Back
        </a>
      </Link>
      <div className="card card-page prose">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on {date}</div>
        <img src={cover_image} alt="" />
        <div className="prose">
          <div
            classNam=""
            dangerouslySetInnerHTML={{ __html: marked(content) }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  )

  const { data: frontmatter, content } = matter(markdownWithMeta)

  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  }
}
