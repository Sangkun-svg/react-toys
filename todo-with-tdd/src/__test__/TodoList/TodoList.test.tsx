import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TodoList } from "../../components";

const sampleTodos = [
  {
    id: 1,
    text: "TDD 배우기",
    done: true,
  },
  {
    id: 2,
    text: "react-testing-library 사용하기",
    done: true,
  },
];

describe("<TodoList />", () => {
  it("renders todos properly", () => {
    render(
      <TodoList todos={sampleTodos} onRemove={() => {}} onToggle={() => {}} />
    );
    screen.getByText(sampleTodos[0].text);
    screen.getByText(sampleTodos[1].text);
  });

  it("calls onToggle", () => {
    const onToggle = jest.fn();
    render(
      <TodoList todos={sampleTodos} onToggle={onToggle} onRemove={() => {}} />
    );
    fireEvent.click(screen.getByText(sampleTodos[0].text));
    expect(onToggle).toBeCalledWith(sampleTodos[0].id);
  });

  it("calls onRemove", () => {
    const onRemove = jest.fn();
    render(
      <TodoList todos={sampleTodos} onToggle={() => {}} onRemove={onRemove} />
    );
    fireEvent.click(screen.getAllByText("삭제")[0]);
    expect(onRemove).toBeCalledWith(sampleTodos[0].id);
  });
});
