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

                        <h3>
                            <a href={'https://youtube.com/watch?v=RqcOCBb4arc'}>Posture Routine 1</a>
                        </h3>
                        <ul>
                            <li>Cobra Stretch (10-15 slow reps)</li>
                            <li>Up and Overs (5-10 slow reps with pause at top)</li>
                            <li>Stand and Reach (5-10 reaches each side, pause at end position)</li>
                            <li>Wall Slides with Chin Nod (2 sets of 10-15 reps)</li>
                        </ul>

                        <h3>
                            <a href={'https://youtube.com/watch?v=RqcOCBb4arc'}>Posture Routine 2</a>
                        </h3>
                        <ul>
                            <li>Elbows Floor to Ceiling (10 reps each side with pause at top)</li>
                            <li>Kneeling Hip Flexor Stretch (30-45 second holds each side)</li>
                            <li>Pigeon Stretch (30-45 second holds each side)</li>
                            <li>Glute Bridges (2 sets of 10-15 reps with pause at top position)</li>
                        </ul>
                    </div>
                </main>
            </div>
        </Layout>
    )
}