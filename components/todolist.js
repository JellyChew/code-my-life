import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Todoitem from './todoitem'
import { useState } from 'react'

export default function Todolist() {
    
    const [ todos, setTodos ] = useState(['Clean Desk', 'Learn Caching', 'CDN Networks', 'master/slave database', 'Database sharding', 'Scripts for convenience', 'research/practice async/await']);
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

    return(
        <div className={styles.container}>
            <main>
            <div className={utilStyles.todolist}>
                <div>
                    <h3 style={{ margin: '.5rem' }}>To Do List</h3>
                    <form onSubmit={handleOnSubmit}>
                        <input 
                            className={utilStyles.search} 
                            type="text" 
                            placeholder="New todo item.." 
                            value={newTodo}
                            onChange={handleOnChange}
                        />
                    </form>
                </div>

                {todos.map((todo) => <Todoitem item={todo} />)}
            </div>
            </main>
        </div>
    )
}