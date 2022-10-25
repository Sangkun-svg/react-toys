import React from "react";
import { TodoItem } from "..";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export const TodoList = ({ todos }: any | Todo[]) => {
  return (
    <ul>
      {todos.map((todo: Todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemove={() => {}}
            onToggle={() => {}}
          />
        );
      })}
    </ul>
  );
};
