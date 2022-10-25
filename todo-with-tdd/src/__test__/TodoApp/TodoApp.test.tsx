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
});
