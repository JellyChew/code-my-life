import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Layout from '../../components/layout'
import utilStyles from '../../styles/utils.module.css'


export default function Physical() {
    return (
        <Layout>
            <div className={styles.container}>
                <Head>
                    <title>
                        Physical
                    </title>
                </Head>

                <main>
                    <h1 className={styles.title}>
                        Physical
                    </h1>
                    <div className={utilStyles.listcontainer}>
                        <h3>
                            Main Lifts
                        </h3>
                        <ul>
                            <li>Bench Press</li>
                            <li>Pull ups</li>
                            <li>Dips</li>
                            <li>leg raises/windshield wipers</li>
                            <li>Squats/Leg press</li>
                        </ul>

                        <h3>
                            Dumbbell Circuit
                        </h3>
                        <ul>
                            <li>Curls</li>
                            <li>Squat and shoulder press</li>
                            <li>Row and deadlift</li>
                            <li>Lu raises</li>
                        </ul>
                    </div>
                </main>
            </div>
        </Layout>
    )
}