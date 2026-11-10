import type { Metadata } from 'next'
import Link from 'next/link'
import styles from '../legal.module.css'
import { HTML, TITLE } from './content'

export const metadata: Metadata = {
  title: `${TITLE} — BlueArkive`,
}

export default function Page() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <Link href="/" className={styles.home}>
          ← BlueArkive
        </Link>
        <h1 className={styles.title}>{TITLE}</h1>
        {/* Static text of our own (content.ts), not user input. */}
        <div className={styles.body} dangerouslySetInnerHTML={{ __html: HTML }} />
        <nav className={styles.other}>
          <Link href="/privacy">Privacy Policy</Link>
          <a href="mailto:support@bluearkive.com">Contact support</a>
        </nav>
      </div>
    </main>
  )
}
