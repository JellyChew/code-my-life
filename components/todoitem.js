import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'

export default function Todoitem({ item }) {


    return (
        <div className={utilStyles.todoitem}>
            <p>{item}</p>
        </div>
    )
}