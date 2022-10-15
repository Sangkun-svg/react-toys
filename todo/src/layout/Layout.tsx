import React from "react";
import styled from "styled-components";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <Wrapper>
      <h2>오늘의 할 일</h2>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 100px 0 100px;
`;
