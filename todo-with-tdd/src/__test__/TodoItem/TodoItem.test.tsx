import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TodoItem } from "../../components";

const sampleTodo = {
  id: 1,
  text: "TDD 배우기",
  done: false,
};

describe("<TodoItem />", () => {
  const setup = (props: any = {}) => {
    const initialProps = { todo: sampleTodo };
    const utils = render(<TodoItem {...initialProps} {...props} />);
    const todo = props.todo || initialProps.todo;
    const span = screen.getByText(todo.text);
    const button = screen.getByText("삭제");
    return { ...utils, span, button };
  };

  it("should have span and button", () => {
    const { span, button } = setup();
    expect(span).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("shows line-through on span when done is true", () => {
    const { span } = setup({ todo: { ...sampleTodo, done: true } });
    expect(span).toHaveStyle("text-decoration: line-through;");
  });

  it("shows line-through on span when done is false", () => {
    const { span } = setup({ todo: { ...sampleTodo, done: false } });
    expect(span).not.toHaveStyle("text-decoration: line-through;");
  });

  it("calls onToggle", () => {
    const onToggle = jest.fn();
    const { span } = setup({ onToggle });
    fireEvent.click(span);
    expect(onToggle).toBeCalledWith(sampleTodo.id);
  });

  it("calls onRemove", () => {
    const onRemove = jest.fn();
    const { button } = setup({ onRemove });
    fireEvent.click(button);
    expect(onRemove).toBeCalledWith(sampleTodo.id);
  });
});
