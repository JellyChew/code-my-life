import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'
import { useState } from 'react'

export default function ImportantTopics() {
    const [ topics, setTopics ] = useState([

    ]);

    return(
        <Layout>
            <div className={styles.container}>

                <Head>
                    Important Topics
                </Head>

                <main>
                    <h1 className={styles.title}>Important Topics</h1>
                    
                    
                    
                </main>

            </div>
        </Layout>
    )
}