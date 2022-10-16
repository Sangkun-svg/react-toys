import React, { ProviderProps, useState } from "react";
import { DEFAULT_INFO } from "../../constant/demo";
import { ListContext } from "../ListContext";

export const ListContextProvider = ({ children }: ProviderProps<{}>) => {
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
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);

  const addTodo = (newTodo: object): void => {
    setTodos((preState): any => {
      return [...preState, newTodo];
    });
  };

  const onRemove = (id: number | string): void => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    onEditModalToggle();
  };
  const onEditModalToggle = (): void => {
    console.log("toggle : ", isEditModalVisible);
    setIsEditModalVisible((prev) => !prev);
  };
  const onChangeSelectedTodo = (todo: any) => {
    setSelectedTodo(todo);
  };
  const updateTodo = (id: number | string, text: string) => {
    onInsertToggle();
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, text } : todo)));
  };
  const updateCheckStatus = (id: number | string, checked: boolean) => {
    const newStatus = !checked;
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: newStatus } : todo
      )
    );
  };

  return (
    <ListContext.Provider
      value={{
        todo: todos,
        isEditModalVisible: isEditModalVisible,
        selectedTodo: selectedTodo,
        onVisivle: isEditModalVisible,
        updateCheckStatus: updateCheckStatus,
        updateTodo: updateTodo,
        onRemove: onRemove,
        onInsertToggle: onInsertToggle,
        onChangeSelectedTodo: onChangeSelectedTodo,
        addTodo: addTodo,
      }}
    >
      {children}
    </ListContext.Provider>
  );
};
