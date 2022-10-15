import React, { useState } from "react";

export const TodoEditModal = ({ onVisible }: any) => {
  const [input, setInput] = useState("");
  const inputHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(value);
  };
  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <p>수정</p>
      <input
        value={input}
        onChange={inputHandler}
        placeholder="할 일을 입력하세요"
      />
      <button type="submit">수정하기</button>
    </form>
  );
};
