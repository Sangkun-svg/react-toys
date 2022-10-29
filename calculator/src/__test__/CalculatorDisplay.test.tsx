import { render, screen } from "@testing-library/react";
import { CalculatorDisplay } from "../components";

describe.only("<CalculatorDisplay />", () => {
  it("should have default value === 0", () => {
    render(<CalculatorDisplay />);
    const defaultValue = screen.getByDisplayValue(0);
    expect(defaultValue).toBeTruthy();
  });
});
