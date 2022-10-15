import React, { Fragment } from "react";
import { TodoItem } from "../TodoItem/TodoItem";

export const TodoList = ({
  todos,
  onRemove,
  onInsertToggle,
  onChangeSelectedTodo,
}: any) => {
  return (
    <Fragment>
      {todos.map((todo: any) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={onRemove}
            onInsertToggle={onInsertToggle}
            onChangeSelectedTodo={onChangeSelectedTodo}
          />
        );
      })}
    </Fragment>
  );
};
