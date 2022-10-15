import React, { Fragment } from "react";

export const TodoList = ({
  todos,
  onRemove,
  onInsertToggle,
  onChangeSelectedTodo,
}: any) => {
  return (
    <Fragment>
      {todos.map((todo: any) => {
        return (
          <ul key={todo.id}>
            <li>
              <input type={"checkbox"} />
              <p>{todo.text}</p>
              <button
                onClick={() => {
                  onChangeSelectedTodo(todo);
                  onInsertToggle();
                }}
              >
                수정
              </button>
              <button onClick={() => onRemove(todo.id)}>삭제</button>
            </li>
          </ul>
        );
      })}
    </Fragment>
  );
};
