import React from "react";
import { TodoList, TodoForm } from "..";

export const TodoApp = () => {
  const onToggle = () => {};
  const onRemove = () => {};
  return (
    <React.Fragment>
      <TodoForm />
      <TodoList todos={[]} onRemove={onRemove} onToggle={onToggle} />
    </React.Fragment>
  );
};
