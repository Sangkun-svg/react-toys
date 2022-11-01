import React, { useState } from "react";
import { CalculatorBtn } from "./CalculatorBtn";
import { CalculatorDisplay } from "./CalculatorDisplay";
import styled from "styled-components";
export const CalculratorApp = () => {
  const [enteredValue, setEnteredValue] = useState<string>("");
  const [isPrevOper, setIsPrevOper] = useState<boolean>(true);

  /** TODO: add can write specify string */
  const onChangeEnteredValue = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (value.match(/^[0-9]+$/)) {
      setEnteredValue((prev) => prev + value);
      setIsPrevOper(false);
    }
  };

  const allClear: React.MouseEventHandler = (): void => {
    setEnteredValue((prev) => "");
  };

  const del: React.MouseEventHandler = (): void => {
    setEnteredValue((prev) => String(prev).slice(0, -1));
  };

  const numbers: React.MouseEventHandler<HTMLButtonElement> = ({
    currentTarget: { value },
  }): void => {
    setEnteredValue((prev) => prev + value);
    setIsPrevOper(false);
  };

  const operators = ({
    currentTarget: { value },
  }: React.MouseEvent<HTMLButtonElement>): void => {
    if (isPrevOper === false) {
      setEnteredValue((prev) => prev + value);
      setIsPrevOper(true);
    }
  };

  const sum: React.MouseEventHandler = (): void => {
    const result = eval(enteredValue);
    setEnteredValue((prev) => result);
  };

  return (
    <MainContainer>
      <CalculatorDisplay
        enteredValue={enteredValue}
        onChangeEnteredValue={onChangeEnteredValue}
      />
      <CalculatorBtn
        allClear={allClear}
        del={del}
        numbers={numbers}
        operators={operators}
        sum={sum}
      />
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
