import React from "react";

type Props = {
  todo: {
    id: number;
    text: string;
    done: boolean;
  };
  onToggle: (id: number) => void;
  onRemove: (id: number) => void;
};

export const TodoItem = ({
  todo: { id, text, done },
  onToggle,
  onRemove,
}: Props) => {
  return (
    <li>
      <span
        style={{
          textDecoration: done ? "line-through" : "none",
        }}
        onClick={() => onToggle(id)}
      >
        {text}
      </span>
      <button onClick={() => onRemove(id)}>삭제</button>
    </li>
  );
};
