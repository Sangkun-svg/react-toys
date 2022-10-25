import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { TodoForm } from "../../components";

describe("<TodoForm />", () => {
  it("should have Input & Button", () => {
    render(<TodoForm />);
    screen.getByText("등록");
    screen.getByPlaceholderText("할 일을 입력해주세요");
  });

  it("changes input", () => {
    render(<TodoForm />);
    const input = screen.getByPlaceholderText("할 일을 입력해주세요");
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD 배우기");
  });
});
