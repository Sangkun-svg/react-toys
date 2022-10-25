import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TodoApp } from "../../components";

describe("<TodoApp />", () => {
  it("render TodoList and TodoForm", () => {
    render(<TodoApp />);
    screen.getByText("등록"); //  TodoForm 존재유무 확인
    screen.getByTestId("TodoList");
  });
});
