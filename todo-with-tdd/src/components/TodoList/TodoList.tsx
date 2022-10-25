import React from "react";
import { TodoItem } from "..";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

type Props = {
  todos: Todo[];
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};
export const TodoList = ({ todos, onToggle, onRemove }: Props) => {
  return (
    <ul data-testid="TodoList">
      {todos.map((todo: any) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        );
      })}
    </ul>
  );
};
