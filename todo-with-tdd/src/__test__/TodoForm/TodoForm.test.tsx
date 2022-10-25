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

  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn();
    render(<TodoForm onInsert={onInsert} />);
    const input = screen.getByPlaceholderText("할 일을 입력해주세요");
    const button = screen.getByText("등록");
    fireEvent.change(input, {
      target: {
        value: "TDD 배우기",
      },
    });
    fireEvent.click(button);

    expect(onInsert).toBeCalledWith("TDD 배우기"); // onInsert 가 'TDD 배우기' 파라미터가 호출됐어야함
    expect(input).toHaveAttribute("value", ""); // input이 비워져야함
  });
});
