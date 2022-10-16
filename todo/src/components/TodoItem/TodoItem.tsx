import { Checkbox, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import { ListContext } from "../../context/ListContext";
import styled from "styled-components";

type Todo = {
  id: number;
  text: string;
  checked: boolean;
};

type Props = {
  key: number;
  todo: Todo;
};

export const TodoItem: React.FC<Props> = ({ todo }) => {
  const {
    onInsertToggle,
    onChangeSelectedTodo,
    onRemove,
    updateCheckStatus,
  }: any = useContext(ListContext);

  return (
    <Card>
      <ListWrapper>
        <Checkbox
          checked={todo.checked}
          onClick={() => updateCheckStatus(todo.id, todo.checked)}
        />
        <p>{todo.text}</p>

        <Button
          variant="outlined"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          수정
        </Button>
        <Button variant="outlined" onClick={() => onRemove(todo.id)}>
          삭제
        </Button>
      </ListWrapper>
    </Card>
  );
};

const Card = styled.div`
  width: 320px;
  height: 70px;
  padding: 10px 0px;
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;

const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
