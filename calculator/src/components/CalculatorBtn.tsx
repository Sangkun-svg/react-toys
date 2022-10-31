import React from "react";
import styled from "styled-components";

export const CalculatorBtn = ({}: any) => {
  return (
    <ButtonContainer>
      <Button>AC</Button>
      <Button>DEL</Button>
      <CalButton value="%">%</CalButton>
      <CalButton value="÷">÷</CalButton>
      <Button value={7}>7</Button>
      <Button value={8}>8</Button>
      <Button value={9}>9</Button>
      <CalButton value="×">×</CalButton>
      <Button value={4}>4</Button>
      <Button value={5}>5</Button>
      <Button value={6}>6</Button>
      <CalButton value="-">-</CalButton>
      <Button value={1}>1</Button>
      <Button value={2}>2</Button>
      <Button value={3}>3</Button>
      <CalButton value="+">+</CalButton>
      <ZeroButton value={0}>0</ZeroButton>
      <Button value=".">.</Button>
      <CalButton>=</CalButton>
    </ButtonContainer>
  );
};

const ButtonContainer = styled.div`
  display: grid;
  width: 40%;
  max-width: 450px;
  height: 50%;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
`;

const Button = styled.button`
  background-color: #f2f3f5;
  border: none;
  color: black;
  font-size: 1.5rem;
  border-radius: 35px;
  cursor: pointer;
  box-shadow: 3px 3px 3px lightgray;

  &:active {
    margin-left: 2px;
    margin-top: 2px;
    box-shadow: none;
  }
`;

const CalButton = styled(Button)`
  font-size: 2rem;
  color: white;
  background-color: #4b89dc;
`;

const ZeroButton = styled(Button)`
  grid-column: 1/3;
`;

const InputBar = styled.input`
  width: 40%;
  max-width: 450px;
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
