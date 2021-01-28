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
            Reminders: Stop swearing, sleep well, use bidet, good posture, don't multitask
          </h3>
          <h3>
            "Success is found in the work you're avoiding"
          </h3>

          <Todolist />
          
        </main>

      </div>
    </Layout>
  )
}
