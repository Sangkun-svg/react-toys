import React, { useState } from "react";

export const TodoForm = () => {
  const [value, setValue] = useState<string>("");
  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(value);
  };
  return (
    <form>
      <input
        placeholder="할 일을 입력해주세요"
        value={value}
        onChange={onChange}
      />
      <button>등록</button>
    </form>
  );
};
