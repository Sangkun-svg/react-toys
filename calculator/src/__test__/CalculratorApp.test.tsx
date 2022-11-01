import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { CalculratorApp } from "../components";

afterEach(cleanup);

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
    const { input, generateOperBtn } = setup();
    const AC_button = generateOperBtn("AC");
    fireEvent.change(input, { target: { value: 1000 } });
    fireEvent.click(AC_button);
    expect(input.value).toBe("");
  });

  it("delete last index in input value", () => {
    const { input, generateOperBtn } = setup();
    const DEL_button = generateOperBtn("DEL");
    fireEvent.change(input, { target: { value: 1000 } });
    fireEvent.click(DEL_button);
    expect(input.value).toBe("100");
  });

  it("input value then click number button", () => {
    const { input, generateOperBtn } = setup();
    const NUMBER_button = generateOperBtn("1");
    fireEvent.click(NUMBER_button);
    expect(input.value).toBe("1");
  });

  it("input value then click operator plus button", () => {
    const { input, generateOperBtn } = setup();
    const NUMBER_button = generateOperBtn("1");
    const OPER_button = generateOperBtn("+");
    const SUM_button = generateOperBtn("=");
    fireEvent.click(NUMBER_button);
    fireEvent.click(OPER_button);
    fireEvent.click(NUMBER_button);
    fireEvent.click(SUM_button);
    expect(input.value).toBe("2");
  });

  it("input value then click operator minus button", () => {
    const { input, generateOperBtn } = setup();
    const NUMBER_Two_button = generateOperBtn("2");
    const NUMBER_One_button = generateOperBtn("1");
    const OPER_button = generateOperBtn("-");
    const SUM_button = generateOperBtn("=");
    fireEvent.click(NUMBER_Two_button);
    fireEvent.click(OPER_button);
    fireEvent.click(NUMBER_One_button);
    fireEvent.click(SUM_button);
    expect(input.value).toBe("1");
  });

  it("input value then click operator multiplication button", () => {
    const { input, generateOperBtn } = setup();
    const NUMBER_Two_button = generateOperBtn("2");
    const OPER_button = generateOperBtn("x");
    const SUM_button = generateOperBtn("=");
    fireEvent.click(NUMBER_Two_button);
    fireEvent.click(OPER_button);
    fireEvent.click(NUMBER_Two_button);
    fireEvent.click(SUM_button);
    expect(input.value).toBe("4");
  });

  it("input value then click operator division button", () => {
    const { input, generateOperBtn } = setup();
    const NUMBER_Two_button = generateOperBtn("2");
    const NUMBER_Four_button = generateOperBtn("4");
    const OPER_button = generateOperBtn("÷");
    const SUM_button = generateOperBtn("=");
    fireEvent.click(NUMBER_Four_button);
    fireEvent.click(OPER_button);
    fireEvent.click(NUMBER_Two_button);
    fireEvent.click(SUM_button);
    expect(input.value).toBe("2");
  });

  it("if click operator button when input is empty", () => {
    const { input, generateOperBtn } = setup();
    const DOT_button = generateOperBtn(".");
    fireEvent.click(DOT_button);
    expect(input.value).toBe("");
  });

  it("if click operator button when input prev value is Operator", () => {
    const { input, generateOperBtn } = setup();
    const NUMBER_Two_button = generateOperBtn("2");
    const Plus_button = generateOperBtn("+");
    fireEvent.click(NUMBER_Two_button);
    fireEvent.click(Plus_button);
    fireEvent.click(Plus_button);
    expect(input.value).toBe("2+");
  });
});
