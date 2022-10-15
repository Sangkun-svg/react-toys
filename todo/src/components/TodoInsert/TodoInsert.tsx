import React, { useState } from "react";
export const TodoInsert = (props: any) => {
  const [input, setInput] = useState("");
  const inputHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(value);
  };

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  const addTodoHandler = () => {
    const newA = {
      id: 4,
      text: input,
      checked: false,
    };
    props.addTodo(newA);
  };
  return (
    <form onSubmit={onSubmit}>
      <input value={input} onChange={inputHandler} />
      <button onClick={addTodoHandler}>등록</button>
    </form>
  );
};
