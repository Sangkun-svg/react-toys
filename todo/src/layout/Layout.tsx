import React from "react";

export const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <React.Fragment>
      <div>오늘의 할 일</div>
      {children}
    </React.Fragment>
  );
};
