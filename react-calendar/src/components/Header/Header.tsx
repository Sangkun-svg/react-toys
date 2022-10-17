import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import styled from "styled-components";
import dayjs from "dayjs";

export const Header = (props: any) => {
  const title = "CALENDAR";
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const [currentYear, setCurrentYear] = useState(dayjs().year());

  let dayOfMonth = dayjs(`${currentYear}-${currentMonth + 1} `).daysInMonth();
  useEffect(() => {
    dayOfMonth = dayjs(`${currentYear}-${currentMonth}`).daysInMonth();
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
    <>
      <Title>{title}</Title>
      <Wrapper>
        <Button
          style={{
            width: "20px",
            height: "25px",
            marginRight: "8px",
          }}
          variant="outlined"
          color="secondary"
          size="small"
          startIcon={<ArrowBackIosNewIcon />}
          onClick={onPrevMonth}
        />

        <h4>
          {currentYear}년 {currentMonth + 1}월
        </h4>
        <h1></h1>
        <Button
          style={{
            width: "20px",
            height: "25px",
            marginLeft: "8px",
          }}
          variant="outlined"
          color="secondary"
          size="small"
          onClick={onNextMonth}
          endIcon={<ArrowForwardIosIcon />}
        />
        <Divider />
        {Array.apply(null, Array(dayOfMonth)).map((el, idx) => {
          return <p>{idx + 1}</p>;
        })}
      </Wrapper>
    </>
  );
};

const Divider = styled.div`
  margin: 10px 0;
  border-bottom: 1px solid black;
`;
const Day = styled.div`
  display: flex;
  border: 2px solid black;
  padding: 5px 0;
  width: 90% / 7;
  height: 35px;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: gray;
  font-weight: 500;
  margin: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
