import React, { Fragment, useContext } from "react";
import { ListContext } from "../../context/ListContext";
import { TodoItem } from "../TodoItem/TodoItem";
import { TodoEditModal } from "../Modal/TodoEditModal/TodoEditModal";
import styled from "styled-components";

export const TodoList = () => {
  const { todo, isEditModalVisible }: any = useContext(ListContext);
  return (
    <Fragment>
      {isEditModalVisible && <TodoEditModal />}
      {todo.map((todo: any) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </Fragment>
  );
};

const Blur = styled.div`
  background-color: rgba(255, 255, 255, 0.4);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
`;
