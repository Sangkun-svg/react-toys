import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const TodoInsert = (props: any) => {
  const [input, setInput] = useState("");
  const inputHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(value);
  };

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };
  const addTodoHandler = (): void => {
    props.addTodo({ id: uuidv4(), text: input, checked: false });
    setInput("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input value={input} onChange={inputHandler} />
      <button onClick={addTodoHandler}>등록</button>
    </form>
  );
};
