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
});
