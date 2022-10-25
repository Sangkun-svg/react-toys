import React, { useState } from "react";

type Props = {
  onInsert: () => void;
};

export const TodoForm = ({ onInsert }: any) => {
  const [value, setValue] = useState<string>("");

  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    onInsert(value);
    setValue("");
    event.preventDefault();
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">등록</button>
    </form>
  );
};
