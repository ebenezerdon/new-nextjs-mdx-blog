import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from 'next/head'

const Home = ({ posts }) => {
  return (
    <>
      <Head>
        <title>My Next.js Blog</title>
      </Head>

      <div className={styles.articleList}>
        {posts.map((post, index) => (
          <Link href={'/blog/' + post.slug} passHref key={index}>
            <a className={styles.item}>
              <div className={styles.thumbnail}>
                <Image src={post.frontmatter.thumbnailUrl} alt="thumbnail" width={500} height={400} objectFit="cover" />
              </div>

              <div>
                <h2 className={styles.title}>{post.frontmatter.title}</h2>
                <p className={styles.description}>{post.frontmatter.description}</p>
                <p className={styles.date}>{post.frontmatter.date}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export const getStaticProps = async () => {
  const fs = require('fs')
  const path = require('path')
  const matter = require('gray-matter')

  const files = fs.readdirSync(path.join('posts'))

  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join('posts', filename), 'utf-8')
    const { data } = matter(markdownWithMeta)

    return {
      frontmatter: data,
      slug: filename.split('.')[0],
    }
  })

  return {
    props: { posts },
  }
}

export default Home
