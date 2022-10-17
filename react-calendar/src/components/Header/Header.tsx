import { useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

export const Header = (props: any) => {
  const title = "CALENDAR";
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const [currentYear, setCurrentYear] = useState(dayjs().year());

  useEffect(() => {
    let dayOfMonth = dayjs(`${currentYear}-${currentMonth}`).daysInMonth();
  }, [currentMonth, currentYear]);

  const onNextMonth = () => {
    const next = dayjs().set("M", currentMonth).add(1, "M").month();
    if (next === 0) {
      const nextYear = dayjs().set("y", currentYear).add(1, "y").year();
      setCurrentYear(nextYear);
    }
    setCurrentMonth(next);
  };
  const onPrevMonth = () => {
    const next = dayjs().set("M", currentMonth).subtract(1, "M").month();
    if (next === 11) {
      const nextYear = dayjs().set("y", currentYear).subtract(1, "y").year();
      setCurrentYear(nextYear);
    }
    setCurrentMonth(next);
  };

  return (
    <div>
      <Title>{title}</Title>
      <button onClick={onPrevMonth}>prev</button>
      <h4>{currentYear}</h4>
      <h1>{currentMonth + 1}</h1>
      <button onClick={onNextMonth}>next</button>
    </div>
  );
};

const Title = styled.div`
  color: gray;
  font-weight: 500;
`;
