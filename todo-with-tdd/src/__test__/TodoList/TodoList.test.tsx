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
    render(<TodoList todos={sampleTodos} />);
    screen.getByText(sampleTodos[0].text);
    screen.getByText(sampleTodos[1].text);
  });
});
