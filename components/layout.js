import styles from './layout.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Swal from 'sweetalert2'

export default function layout({ children }) {

    const [ showSidebar, setShowSidebar ] = useState(true);

    useEffect(() => {
        setShowSidebar('true' === localStorage.getItem('sidebar'));
    }, [])

    useEffect(() => {
        localStorage.setItem('sidebar', showSidebar);
    }, [showSidebar])

    function handleSidebar() {
        setShowSidebar(!showSidebar);
    }

    let updateMsg = 'content update! shuffled dailies, checkup after icloud fix'

    function whatsNew() {
        Swal.fire({
            icon: 'question',
            title: 'Whats new?',
            text: updateMsg
        })
    }

    return (
        <div className={styles.outercontainer}>
            <div className={styles.navbar}>
                <button onClick={handleSidebar}>☰</button>
                <div className={styles.navbarspacer}></div>
                <button onClick={whatsNew}>What's New?</button>
                <p>filler for account info and other</p>
            </div>
            <div className={styles.middlecontainer}>
                {(showSidebar && 
                    <div className={styles.sidebar}>
                        <Link href='/'><a>Home</a></Link> <br />
                        <Link href='/tabs/physical'><a>Physical</a></Link> <br />
                        <Link href='/tabs/food'><a>Food</a></Link>
                        
                    </div>
                )}
                <div className={styles.innercontainer}>{children}</div>
            </div>
            
        </div>
        
    )
    
}