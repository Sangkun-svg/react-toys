import React from "react";
import { render, screen } from "@testing-library/react";
import { TodoForm } from "../../components";

describe("<TodoForm />", () => {
  it("should have @", () => {
    render(<TodoForm />);
    screen.getByText("등록");
    screen.getByPlaceholderText("할 일을 입력해주세요");
  });
});
