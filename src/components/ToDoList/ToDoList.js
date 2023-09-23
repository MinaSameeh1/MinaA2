import './ToDoList.css';

const ToDoList = ({ toDoItems, handleIsDoneToDo, handleDeleteToDo }) =>
  toDoItems.map((toDoItem, index) => (
    <div key={`todo-${index}`} className="todo-list-wrapper">
      <p className={`${toDoItem.isDone === true && "text-line-through"}`}>
        {toDoItem.val}
      </p>
      <button onClick={(e) => handleDeleteToDo(e, toDoItem.id)}>delete</button>
      <button onClick={(e) => handleIsDoneToDo(e, toDoItem.id)}>complete</button>
    </div>
  ));

export default ToDoList;
