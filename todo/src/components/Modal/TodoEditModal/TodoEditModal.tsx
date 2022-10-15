import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

export const TodoEditModal = ({ selectedTodo, onVisible, updateTodo }: any) => {
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
      <Modal>
        <form onSubmit={onSubmit}>
          <p>수정</p>
          <input
            value={input}
            onChange={inputHandler}
            placeholder="할 일을 입력하세요"
          />
          <button>수정하기</button>
        </form>
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

const Modal = styled.div`
  position: fixed;
  top: 30vh;
  left: 10%;
  width: 80%;
  z-index: 100;
  overflow: hidden;
`;
