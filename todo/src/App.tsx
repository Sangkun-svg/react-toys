import React, { Fragment, useState } from "react";
import { TodoEditModal } from "./components/Modal/TodoEditModal/TodoEditModal";
import { TodoInsert } from "./components/TodoInsert/TodoInsert";
import { TodoList } from "./components/TodoList/TodoList";

const App = () => {
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
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

  const onChangeSelectedTodo = (todo: any) => {
    setSelectedTodo(todo);
  };

  const onInsertToggle = () => {
    console.log(selectedTodo);
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    onEditModalToggle();
  };

  const onEditModalToggle = (): void => {
    setIsEditModalVisible((prev) => !prev);
  };

  const onRemove = (id: number | string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const addTodo = (newTodo: object): void => {
    setTodos((preState): any => {
      return [...preState, newTodo];
    });
  };
  const updateTodo = (id: number | string, text: string) => {
    onInsertToggle();
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };
  return (
    <Fragment>
      <TodoInsert addTodo={addTodo} />
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onVisible={onEditModalToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
        onInsertToggle={onInsertToggle}
      />
      {isEditModalVisible && (
        <TodoEditModal
          selectedTodo={selectedTodo}
          onVisible={onEditModalToggle}
          updateTodo={updateTodo}
        />
      )}
    </Fragment>
  );
};

export default App;
