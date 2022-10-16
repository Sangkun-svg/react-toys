import { TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Button } from "@mui/material";
import { width } from "@mui/system";
import { ListContext } from "../../context/ListContext";

export const TodoInsert = (props: any) => {
  const [input, setInput] = useState("");
  const [isError, setIsError] = useState(false);
  const { addTodo }: any = useContext(ListContext);
  const inputHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    setInput(value);
  };

  const onSubmit = (event: React.FormEvent): void => {
    event.preventDefault();
  };
  const addTodoHandler = (): void => {
    if (input.trim().toString().length <= 0) {
      return setIsError(true);
    }
    addTodo({ id: uuidv4(), text: input, checked: false });
    setIsError(false);
    setInput("");
  };
  return (
    <form onSubmit={onSubmit}>
      <TextField
        id="filled-basic"
        value={input}
        onChange={inputHandler}
        label={
          isError
            ? "공백을 제외한 문자열을 넣어주세요"
            : "오늘의 할 일을 추가해주세요"
        }
        variant="filled"
        style={{
          width: 250,
        }}
        error={isError}
      />

      <Button variant="contained" onClick={addTodoHandler}>
        등록
      </Button>
    </form>
  );
};
