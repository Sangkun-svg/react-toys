import React from "react";
import { TextField, Button, ButtonGroup, Divider } from "@mui/material";
import { useInput } from "../../hooks/useInput";
import styled from "styled-components";

export const Login = ({ onToggleReigster, onLogin, onLogout }: any) => {
  const id = useInput("");
  const password = useInput("");
  return (
    <Wrapper>
      <TextField
        required
        id="outlined-required"
        placeholder={`ID를 입력해주세요`}
        label="ID"
        value={id.value}
        onChange={id.onChange}
      />
      <TextField
        required
        id="outlined-required"
        placeholder={`PW를 입력해주세요`}
        label="Password"
        value={password.value}
        onChange={password.onChange}
      />
      <ButtonGroup>
        <Button
          style={{ width: "50%" }}
          variant="outlined"
          onClick={() => onLogin(id.value, password.value)}
        >
          Login
        </Button>
        <Button style={{ width: "50%" }} variant="outlined" onClick={onLogout}>
          Logout
        </Button>
        <Divider />
      </ButtonGroup>
      <Button variant="outlined" onClick={onToggleReigster}>
        Register
      </Button>
    </Wrapper>
  );
};
const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 25%;
  margin: 200px;
  height: 400px;
`;
