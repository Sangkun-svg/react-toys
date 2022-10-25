import React, { useState, useRef, useCallback } from "react";
import { TodoList, TodoForm } from "..";

type Todo = {
  id: number;
  text: string;
  done: boolean;
};

export const TodoApp = () => {
  const DEFAULT_TODOS = [
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
  ];
  const [todos, setTodos] = useState<Todo[]>(DEFAULT_TODOS);
  const nextId = useRef(3);

  // const onInsert = ({
  //   target: { value },
  // }: React.ChangeEvent<HTMLInputElement>) => {
  //   const newObj = {
  //     id: nextId.current,
  //     text: value,
  //     done: false,
  //   };
  //   setTodos([newObj]);
  // };

  const onInsert = useCallback(
    (text: string) => {
      // 새 항목 추가 후
      setTodos(
        todos.concat({
          id: nextId.current,
          text,
          done: false,
        })
      );
      // nextId 값에 1 더하기
      nextId.current += 1;
    },
    [todos]
  );

  const onToggle = (id: number) => {
    setTodos(() => {
      return todos.map((todo: Todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
    });
  };
  const onRemove = () => {};
  return (
    <React.Fragment>
      <TodoForm onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </React.Fragment>
  );
};
