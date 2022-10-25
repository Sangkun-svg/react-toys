import React from "react";

type Props = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
};

export const TodoItem = ({ todo: { id, text, done } }: Props) => {
  return (
    <li>
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
      >
        {text}
      </span>
      <button>삭제</button>
    </li>
  );
};
