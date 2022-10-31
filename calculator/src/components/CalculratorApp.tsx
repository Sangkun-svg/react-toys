import React from "react";
import { CalculatorBtn } from "./CalculatorBtn";
import { CalculatorDisplay } from "./CalculatorDisplay";

export const CalculratorApp = () => {
  return (
    <React.Fragment>
      <CalculatorDisplay />
      <CalculatorBtn />
    </React.Fragment>
  );
};
