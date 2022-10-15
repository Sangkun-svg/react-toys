import React, { useState } from "react";
import { TodoEditModal } from "./components/Modal/TodoEditModal/TodoEditModal";
import { TodoInsert } from "./components/TodoInsert/TodoInsert";
import { TodoList } from "./components/TodoList/TodoList";

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "리액트 기초 알아보기",
      checked: true,
    },
    {
      id: 2,
      text: "컴포넌트 스타일링 하기",
      checked: true,
    },
    {
      id: 3,
      text: "투두리스트 만들기",
      checked: false,
    },
  ]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const onInputChange = (id: number | any) => {
    const [{ text }] = todos.filter((todo) => todo.id === id);
    setTodos(todos.filter((todo) => todo.id === id));
  };

  const onEditModalVisible = () => {
    setIsEditModalVisible(true);
  };

  const onRemove = (id: number | any) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo: object) => {
    setTodos((preState): any => {
      return [...preState, newTodo];
    });
  };
  return (
    <React.Fragment>
      <TodoInsert addTodo={addTodo} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onVisible={onEditModalVisible}
      />
      {isEditModalVisible && <TodoEditModal />}
    </React.Fragment>
  );
};

export default App;
