import { render, screen } from "@testing-library/react";
import { CalculatorBtn } from "../components";

describe("<CalculatorBtn />", () => {
  it("should has number Button", () => {
    render(<CalculatorBtn />);
    const NUMBER_buttons = screen.getAllByText(/^[0-9]/);
    expect(NUMBER_buttons).toHaveLength(10);
  });
  it("should has operator Button", () => {
    render(<CalculatorBtn />);
    const AC_button = screen.getByText("AC");
    const DEL_button = screen.getByText("DEL");
    const PERSENT_button = screen.getByText("%");
    const PLUS_button = screen.getByText("+");
    const MINUS_button = screen.getByText("-");
    const MULTI_button = screen.getByText("x");
    const DIVISION_button = screen.getByText("÷");

    expect(AC_button).toBeInTheDocument();
    expect(DIVISION_button).toBeInTheDocument();
    expect(MULTI_button).toBeInTheDocument();
    expect(MINUS_button).toBeInTheDocument();
    expect(PLUS_button).toBeInTheDocument();
    expect(PERSENT_button).toBeInTheDocument();
    expect(DEL_button).toBeInTheDocument();
  });
});
