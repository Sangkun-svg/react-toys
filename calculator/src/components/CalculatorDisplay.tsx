import React, { useState } from "react";

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
      <input
        value={enteredValue}
        onChange={onChangeEnteredValue}
        placeholder="0"
      />
    </div>
  );
};
