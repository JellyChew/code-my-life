import styles from '../styles/Home.module.css'
import utilStyles from '../styles/utils.module.css'
import Todoitem from './todoitem'
import { useState } from 'react'

export default function Todolist() {
    
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
                <div>
                    <h3 style={{ margin: '.5rem' }}>To Do List</h3>
                    <button onClick={clearTodos}>Clear list</button>
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