import React, { useState } from "react";
import { TodoList, TodoForm } from "..";

export const TodoApp = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "TDD 배우기",
      done: true,
    },
    {
      id: 2,
      text: "react-testing-library 사용하기",
      done: true,
    },
  ]);
  const onToggle = () => {};
  const onRemove = () => {};
  return (
    <React.Fragment>
      <TodoForm />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </React.Fragment>
  );
};
