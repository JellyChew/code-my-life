import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Todolist from '../components/todolist'
import Layout from '../components/layout'

export default function Home() {

  return (
    <Layout>
      <div className={styles.container}>
        <Head>
          <title>Code My Life</title>
        </Head>

        <main>
          <h1 className={styles.title}>
            ~ Code My Life ~
          </h1>
          <h3>
            I can't fucking believe you can look at yourself in the mirror every morning, realize how fucking mediocre you are, and continue on like everything is okay
          </h3>
          <h3>
            I know you can do better, that's why I'm so fucking mad
          </h3>

          <Todolist />
          
        </main>

      </div>
    </Layout>
  )
}
