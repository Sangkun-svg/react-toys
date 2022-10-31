import { render, screen, fireEvent } from "@testing-library/react";
import { CalculratorApp } from "../components";

describe("<CalculatorDisplay />", () => {
  it("input value all clear when click AC button", () => {
    render(<CalculratorApp />);
    const AC_button: HTMLButtonElement = screen.getByText("AC");
    const input: HTMLInputElement = screen.getByPlaceholderText("0");
    fireEvent.change(input, { target: { value: 1000 } });
    fireEvent.click(AC_button);
    expect(input.value).toBe("");
  });

  it("delete last index in input value", () => {
    render(<CalculratorApp />);
    const DEL_button: HTMLButtonElement = screen.getByText("DEL");
    const input: HTMLInputElement = screen.getByPlaceholderText("0");
    fireEvent.change(input, { target: { value: 1000 } });
    fireEvent.click(DEL_button);
    expect(input.value).toBe("100");
  });
});
