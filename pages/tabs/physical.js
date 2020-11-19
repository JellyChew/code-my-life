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
                            Gym:
                        </h3>
                        <ul>
                            <li>Daily (? Work on schedule)</li>
                            <li>Run more/ do more sets/ more exercises</li>
                            <li>Stretch</li>
                            <li>Consider investing in personal gym set</li>
                        </ul>

                        <h3>
                            Food:
                        </h3>
                        <ul>
                            <li>Portion size</li>
                            <li>No/less drinks</li>
                            <li>Cook more?</li>
                        </ul>

                        <h3>
                            Skincare:
                        </h3>
                        <ul>
                            <li>Hyalauronic acid (fran rec)</li>
                            <li>Paula’s choice liquid exfoliant (smells weird? Saw from daph video, can check strips instead) </li>
                        </ul>
                    </div>
                </main>
            </div>
        </Layout>
    )
}