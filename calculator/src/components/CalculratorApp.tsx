import React, { useState } from "react";
import { CalculatorBtn } from "./CalculatorBtn";
import { CalculatorDisplay } from "./CalculatorDisplay";
import styled from "styled-components";
export const CalculratorApp = () => {
  const [enteredValue, setEnteredValue] = useState<number | string>("");

  /** TODO: add can write specify string */
  const onChangeEnteredValue = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (value.match(/^[0-9]+$/)) {
      setEnteredValue(value);
    }
  };

  const allClear = () => {
    setEnteredValue((prev) => "");
  };

  const del = () => {
    setEnteredValue((prev) => prev.toString().slice(0, -1));
  };

  return (
    <MainContainer>
      <CalculatorDisplay
        enteredValue={enteredValue}
        onChangeEnteredValue={onChangeEnteredValue}
      />
      <CalculatorBtn allClear={allClear} del={del} />
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
