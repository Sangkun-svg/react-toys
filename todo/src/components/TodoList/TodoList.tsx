import React from "react";

type todo = {
  id: number;
  text: string;
  checked: boolean;
};
// type list = {
//   todoList: todo[];
// };

type Props = {
  todos: todo[];
  onRemove: Function;
  onEditModalVisible: any;
};

// export const TodoList: React.FC<list> = (props) => {
export const TodoList = ({ todos, onRemove, onVisible }: any) => {
  return (
    <React.Fragment>
      {todos.map((todo: todo) => {
        return (
          <ul key={todo.id}>
            <li>
              <p>check box</p>
              <p>{todo.text}</p>
              <button onClick={onVisible}>수정</button>
              <button onClick={() => onRemove(todo.id)}>삭제</button>
            </li>
          </ul>
        );
      })}
    </React.Fragment>
  );
};
