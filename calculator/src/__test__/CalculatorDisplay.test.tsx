import { render, screen, fireEvent } from "@testing-library/react";
import { CalculatorDisplay } from "../components";

describe("<CalculatorDisplay />", () => {
  it("should have default value === 0", () => {
    render(<CalculatorDisplay />);
    const defaultValue = screen.getByPlaceholderText("0");
    expect(defaultValue).toBeTruthy();
  });

  it("should change input", () => {
    render(<CalculatorDisplay />);
    const input = screen.getByPlaceholderText("0");
    fireEvent.change(input, { target: { value: 100 } });
    console.log(input);

    expect(screen.getByDisplayValue(100)).toBeTruthy();
  });
});
