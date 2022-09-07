import Link from 'next/link'
import styles from './nav.module.css'

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/" passHref>
        <a className={styles.home}>My Next.js Blog</a>
      </Link>

      <Link href="/bio" passHref>
        <a className={styles.bio}>Bio</a>
      </Link>
    </nav>
  )
}

export default Nav
