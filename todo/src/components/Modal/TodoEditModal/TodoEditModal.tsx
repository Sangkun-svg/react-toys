import React, { useContext, useState } from "react";
import styled from "styled-components";
import { ListContext } from "../../../context/ListContext";
import { Modal, Box, TextField, Button } from "@mui/material";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const TodoEditModal = () => {
  const { selectedTodo, updateTodo, onVisible, isEditModalVisible }: any =
    useContext(ListContext);
  const [input, setInput] = useState(selectedTodo.text);

  const inputHandler = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    setInput(value);
  };
  const onSubmit = (event: any) => {
    event.preventDefault();
  };

  return (
    <div>
      <BackDrop onClick={onVisible} />
      <Modal open={isEditModalVisible}>
        <Box sx={style}>
          <form onSubmit={onSubmit}>
            <p>할 일 수정하기</p>
            <TextField
              value={input}
              onChange={inputHandler}
              placeholder="할 일을 입력하세요"
            />
            <Button
              variant="outlined"
              onClick={() => updateTodo(selectedTodo.id, input)}
            >
              수정
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
};

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background: rgba(0, 0, 0, 0.75);
`;
