import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TodoApp } from "../../components";

describe("<TodoApp />", () => {
  it("render TodoList and TodoForm", () => {
    render(<TodoApp />);
    screen.getByText("등록"); //  TodoForm 존재유무 확인
    screen.getByTestId("TodoList"); //  TodoList 존재유무 확인
  });

  it("render two default todos", () => {
    render(<TodoApp />);
    screen.getByText("TDD 배우기");
    screen.getByText("react-testing-library 사용하기");
  });

  it("create new todo", () => {
    render(<TodoApp />);
    const input = screen.getByPlaceholderText("할 일을 입력해주세요");
    const button = screen.getByText("등록");
    fireEvent.change(input, { target: { value: "새 항목 추가하기" } });
    fireEvent.click(button);
    expect(screen.getByText("새 항목 추가하기")).toBeTruthy();
  });

  it("toggles todo", () => {
    render(<TodoApp />); // default done : true
    const todoItem = screen.getByText("TDD 배우기");
    expect(todoItem).toHaveStyle("text-decoration: line-through;"); // done : true
    fireEvent.click(todoItem); // toggle
    expect(todoItem).toHaveStyle("text-decoration: none;"); // done : false
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through;"); // done : true
  });
});
