import { render, screen, fireEvent } from "@testing-library/react";
import { CalculratorApp } from "../components";

describe("<CalculatorDisplay />", () => {
  const setup = () => {
    render(<CalculratorApp />);
    const input: HTMLInputElement = screen.getByPlaceholderText("0");
    const generateOperBtn = (operatorType: string) => {
      const button: HTMLButtonElement = screen.getByText(operatorType);
      return button;
    };
    return { input, generateOperBtn };
  };

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

  it("input value then click number button", () => {
    render(<CalculratorApp />);
    const input: HTMLInputElement = screen.getByPlaceholderText("0");
    const NUMBER_button: HTMLButtonElement = screen.getByText("1");
    fireEvent.click(NUMBER_button);
    fireEvent.click(NUMBER_button);
    expect(input.value).toBe("11");
  });

  it("input value then click operator plus button", () => {
    render(<CalculratorApp />);
    const input: HTMLInputElement = screen.getByPlaceholderText("0");
    const NUMBER_button: HTMLButtonElement = screen.getByText("1");
    const OPER_button: HTMLButtonElement = screen.getByText("+");
    const SUM_button: HTMLButtonElement = screen.getByText("=");
    fireEvent.click(NUMBER_button);
    fireEvent.click(OPER_button);
    fireEvent.click(NUMBER_button);
    fireEvent.click(SUM_button);
    expect(input.value).toBe("2");
  });

  it("input value then click operator minus button", () => {
    render(<CalculratorApp />);
    const input: HTMLInputElement = screen.getByPlaceholderText("0");
    const NUMBER_Two_button: HTMLButtonElement = screen.getByText("2");
    const NUMBER_One_button: HTMLButtonElement = screen.getByText("1");
    const OPER_button: HTMLButtonElement = screen.getByText("-");
    const SUM_button: HTMLButtonElement = screen.getByText("=");
    fireEvent.click(NUMBER_Two_button);
    fireEvent.click(OPER_button);
    fireEvent.click(NUMBER_One_button);
    fireEvent.click(SUM_button);
    expect(input.value).toBe("1");
  });

  it("input value then click operator multiplication button", () => {
    render(<CalculratorApp />);
    const input: HTMLInputElement = screen.getByPlaceholderText("0");
    const NUMBER_Two_button: HTMLButtonElement = screen.getByText("2");
    const OPER_button: HTMLButtonElement = screen.getByText("x");
    const SUM_button: HTMLButtonElement = screen.getByText("=");
    fireEvent.click(NUMBER_Two_button);
    fireEvent.click(OPER_button);
    fireEvent.click(NUMBER_Two_button);
    fireEvent.click(SUM_button);
    expect(input.value).toBe("4");
  });

  it("input value then click operator division button", () => {
    render(<CalculratorApp />);
    const input: HTMLInputElement = screen.getByPlaceholderText("0");
    const NUMBER_Two_button: HTMLButtonElement = screen.getByText("2");
    const NUMBER_Four_button: HTMLButtonElement = screen.getByText("4");
    const OPER_button: HTMLButtonElement = screen.getByText("÷");
    const SUM_button: HTMLButtonElement = screen.getByText("=");
    fireEvent.click(NUMBER_Four_button);
    fireEvent.click(OPER_button);
    fireEvent.click(NUMBER_Two_button);
    fireEvent.click(SUM_button);
    expect(input.value).toBe("2");
  });

  it("if click operator button when input is empty", () => {
    render(<CalculratorApp />);
    const input: HTMLInputElement = screen.getByPlaceholderText("0");
    const DOT_button: HTMLButtonElement = screen.getByText(".");
    fireEvent.click(DOT_button);
    expect(input.value).toBe("");
  });

  it("if click operator button when input prev value is Operator", () => {
    render(<CalculratorApp />);
    const input: HTMLInputElement = screen.getByPlaceholderText("0");
    const NUMBER_Two_button: HTMLButtonElement = screen.getByText("2");
    const Plus_button: HTMLButtonElement = screen.getByText("+");
    fireEvent.click(NUMBER_Two_button);
    fireEvent.click(Plus_button);
    fireEvent.click(Plus_button);
    expect(input.value).toBe("2+");
  });
});
