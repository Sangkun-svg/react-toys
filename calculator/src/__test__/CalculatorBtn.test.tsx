import { render, screen, fireEvent } from "@testing-library/react";
import { CalculatorBtn } from "../components";

describe("<CalculatorBtn />", () => {
  it("should has number Button", () => {
    render(<CalculatorBtn />);
    const btns = screen.getAllByText(/^[0-9]/);
    expect(btns.length).toBe(10);
  });
});
