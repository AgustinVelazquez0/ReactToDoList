import { useContext } from "react";
import TodoItem from "/src/components/TodoItem.jsx";
import { TodoContext } from "/src/components/TodoContext.jsx";
import styles from "./Styles/TodoList.module.css";

function TodoList() {
  const { todos, deleteTodo, toggleComplete } = useContext(TodoContext);

  console.log(todos); // Verifica la estructura de los datos

  return (
    <div className={styles.containerToDoList}>
      <ul className={styles.list}>
        {todos.length === 0 ? (
          <li>No hay tareas disponibles</li>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo._id} // Asegúrate de usar una clave única
              todo={todo}
              deleteTodo={deleteTodo}
              toggleComplete={toggleComplete}
            />
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;
