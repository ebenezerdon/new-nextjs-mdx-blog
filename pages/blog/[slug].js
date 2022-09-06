import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import fs from 'fs'
import path from 'path'
import SyntaxHighlighter from 'react-syntax-highlighter'

import { Nav, Button } from '../../components'

const components = { Nav, Button, SyntaxHighlighter }

const PostPage = ({ serializedContent }) => {
  const { frontmatter } = serializedContent

  return (
    <div className="mt-4">
      <h1>{frontmatter.title}</h1>
      <MDXRemote {...serializedContent} components={components} />
    </div>
  )
}

const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join('posts'))

  const paths = files.map((filename) => ({
    params: {
      slug: filename.split('.')[0],
    },
  }))

  return {
    paths,
    fallback: false,
  }
}

const getStaticProps = async ({ params: { slug } }) => {
  const markdown = fs.readFileSync(path.join('posts', slug + '.mdx'), 'utf-8')

  const serializedContent = await serialize(markdown, {
    format: 'mdx',
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      useDynamicImport: true,
    },
  })

  return {
    props: {
      slug,
      serializedContent,
    },
  }
}

export { getStaticProps, getStaticPaths }
export default PostPage
