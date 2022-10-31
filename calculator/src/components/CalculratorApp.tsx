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

  const allClear = () => {
    setEnteredValue((prev) => "");
  };

  const del = () => {
    setEnteredValue((prev) => String(prev).slice(0, -1));
  };

  const numbers = ({ target: { value } }: any) => {
    setEnteredValue((prev) => prev + value);
    setIsPrevOper(false);
  };

  const operators = ({ target: { value } }: any) => {
    if (isPrevOper === false) {
      setEnteredValue((prev) => prev + value);
      setIsPrevOper(true);
    }
  };

  const sum = () => {
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
