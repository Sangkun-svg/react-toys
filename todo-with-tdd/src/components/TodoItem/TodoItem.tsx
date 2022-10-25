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
      <span>{text}</span>
      <button>삭제</button>
    </li>
  );
};
