import React from "react";
import styled from "styled-components";

type Props = {
  allClear?: React.MouseEventHandler<HTMLButtonElement>;
  del?: React.MouseEventHandler<HTMLButtonElement>;
  numbers?: React.MouseEventHandler<HTMLButtonElement>;
  operators?: React.MouseEventHandler<HTMLButtonElement>;
  sum?: React.MouseEventHandler<HTMLButtonElement>;
};

export const CalculatorBtn = ({
  allClear,
  del,
  numbers,
  operators,
  sum,
}: Props) => {
  return (
    <ButtonContainer>
      <Button onClick={allClear}>AC</Button>
      <Button onClick={del}>DEL</Button>
      <CalButton value="%" onClick={operators}>
        %
      </CalButton>
      <CalButton value="/" onClick={operators}>
        ÷
      </CalButton>
      <Button value={7} onClick={numbers}>
        7
      </Button>
      <Button value={8} onClick={numbers}>
        8
      </Button>
      <Button value={9} onClick={numbers}>
        9
      </Button>
      <CalButton value="*" onClick={operators}>
        x
      </CalButton>
      <Button value={4} onClick={numbers}>
        4
      </Button>
      <Button value={5} onClick={numbers}>
        5
      </Button>
      <Button value={6} onClick={numbers}>
        6
      </Button>
      <CalButton value="-" onClick={operators}>
        -
      </CalButton>
      <Button value={1} onClick={numbers}>
        1
      </Button>
      <Button value={2} onClick={numbers}>
        2
      </Button>
      <Button value={3} onClick={numbers}>
        3
      </Button>
      <CalButton value="+" onClick={operators}>
        +
      </CalButton>
      <ZeroButton value={0} onClick={numbers}>
        0
      </ZeroButton>
      <Button value="." onClick={operators}>
        .
      </Button>
      <CalButton onClick={sum}>=</CalButton>
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
