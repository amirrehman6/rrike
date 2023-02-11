import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          &nbsp;
          <code className={styles.code}>Accounting & FinTech Consultants</code>
        </p>
        <div>
          <a
            href="https://www.amirrehman.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image
              src="/sign.svg"
              alt="amir rehman"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/reganrike.png"
          alt="Next.js Logo"
          width={313}
          height={80}
          priority
        />
        {/* <div className={styles.thirteen}>
          <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
        </div> */}
      </div>

      <div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Accounting <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
            Stay on the top and make informed decisions for your business.
          </p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Blockchain <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Secure decentralized solutions that help businesses to achieve their goals.</p>
        </a>

        <a
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_self"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            AI & IOT Systems <span>-&gt;</span>
          </h2>
          <p className={inter.className}>
          Innovative solutions that help businesses to connect and automate devices and systems.
          </p>
        </a>
      </div>
    </main>
  )
}
