import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import { useState, useEffect } from 'react'

export default function Todoitem({ item }) {

    const [ finished, setFinished ] = useState(false);
    const [ bgcolor, setbgcolor ] = useState('yellow');

    function finish() {
        setFinished(!finished);
    }

    useEffect(() => {
        if (finished) {
            setbgcolor('lightgreen')
        } else {
            setbgcolor('yellow')
        }
    }, [finished])

    return (
        <div style={{ backgroundColor: `${bgcolor}`}} className={utilStyles.todoitem}>
            <p>{item}</p>
            <div className={utilStyles.spacer}></div>
            <button className={utilStyles.finishbutton} onClick={finish}>✔️</button>
        </div>
    )
}