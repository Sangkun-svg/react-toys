import React, { useState } from "react";
import styled from "styled-components";

export const CalculatorDisplay = ({
  enteredValue,
  onChangeEnteredValue,
}: any) => {
  return (
    <div>
      <InputBar
        value={enteredValue}
        onChange={onChangeEnteredValue}
        placeholder="0"
      />
    </div>
  );
};
const InputBar = styled.input`
  width: 400px;
  max-width: 500px;
  height: 65px;
  margin-bottom: 10px;
  border-radius: 10px;
  font-size: 30px;
  border: 2px solid #4b89dc;
  text-align: right;
  padding-right: 20px;
  &:focus {
    outline: none;
  }
`;
