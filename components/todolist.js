import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Todoitem from './todoitem'
import { useState } from 'react'

export default function Todolist() {
    
    let dailies = [ 'morning routine', 'sunshine and supplements', 'daily coding problem', 
    'daily regular expression exercise', 'daily project', 'exercise', 'shower early', 'draw some' ]
    const [ todos, setTodos ] = useState([]);
    const [ newTodo, setNewTodo ] = useState('');

    function handleOnChange(e) {
        setNewTodo(e.target.value);
    }

    function handleOnSubmit(e) {
        e.preventDefault();

        if (newTodo.length > 0) {
            setTodos([...todos, newTodo]);
        }
        setNewTodo('');
    }

    function clearTodos() {
        setTodos([]);
    }

    return(
        <div className={styles.container}>
            <main>
            <div className={utilStyles.todolist}>

                <h3 style={{ margin: '.5rem' }}>Dailies</h3>
                {dailies.map((daily) => <Todoitem item={daily} />)}

                <div className={utilStyles.todotitle}>
                    <h3 style={{ margin: '.5rem' }}>To do list</h3>
                    <div className={utilStyles.spacer}></div>
                    <form onSubmit={handleOnSubmit}>
                        <input 
                            className={utilStyles.search} 
                            type="text" 
                            placeholder="New todo item.." 
                            value={newTodo}
                            onChange={handleOnChange}
                        />
                    </form>
                    <button onClick={clearTodos}>Clear list</button>
                </div>
                {todos.map((todo) => <Todoitem item={todo} />)}
            </div>
            </main>
        </div>
    )
}