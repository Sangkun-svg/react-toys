import React, { useState } from "react";

export const useInput = (initialValue: string, validator?: Function) => {
  const [value, setValue] = useState(initialValue);
  const onChange = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement> | any) => {
    setValue(value);
  };
  return { value, onChange };
};
