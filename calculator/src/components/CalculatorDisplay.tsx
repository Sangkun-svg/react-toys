import React, { useState } from "react";
import styled from "styled-components";
export const CalculatorDisplay = () => {
  const [enteredValue, setEnteredValue] = useState<number | string>(0);

  const onChangeEnteredValue = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>): void => {
    if (value.match(/^[0-9]+$/)) {
      // TODO: add can write specify string
      setEnteredValue(value);
    }
  };

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
