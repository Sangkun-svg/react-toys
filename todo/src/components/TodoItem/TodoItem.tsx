import styled from "styled-components";

export const TodoItem = ({
  todo,
  onChangeSelectedTodo,
  onInsertToggle,
  onRemove,
}: any) => {
  return (
    <Card>
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
    </Card>
  );
};

const Card = styled.div`
  border: 2px solid black;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
`;
