import React from "react";
import { Todo } from "../model";
// import { Todo } from "../models/models";
// import SingleTodo from "./SingleTodo";

interface props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<props> = ({ todos, setTodos }) => {
  return (
    <div className="todos">
      {todos?.map(
        (todo) => console.log(todo)
        // <SingleTodo
        //   todos={todos}
        //   todo={todo}
        //   key={todo.id}
        //   setTodos={setTodos}
        // />
      )}
    </div>
  );
};

export default TodoList;
