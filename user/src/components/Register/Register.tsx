import React, { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useInput } from "../../hooks/useInput";
import styled from "styled-components";
import { dummyData } from "../../dummy/dumy_data";

export const Register = () => {
  const [users, setUsers] = useState(dummyData);
  const id = useInput("");
  const password = useInput("");
  const name = useInput("");
  const email = useInput("");
  const phone = useInput("");

  const onSubmit = (event: any) => {
    event.preventDefault();
  };

  const handleCreateUser = () => {
    const newUser: any = {
      id: id.value,
      password: password.value,
      name: name.value,
      email: email.value,
      phone: phone.value,
    };
    setUsers((preState) => {
      return [...preState, newUser];
    });
  };

  const CustomTextField = ({ placeholderTag, label, value, onChange }: any) => {
    return (
      <TextField
        required
        id="outlined-required"
        placeholder={`${placeholderTag} 입력해주세요`}
        label={label}
        value={value}
        onChange={onChange}
      />
    );
  };

  return (
    <Wrapper onSubmit={onSubmit}>
      <CustomTextField
        placeholderTag={"이름을"}
        label="Name"
        value={name.value}
        onChange={name.onChange}
      />
      <CustomTextField
        placeholderTag={"ID를"}
        label="ID"
        value={id.value}
        onChange={id.onChange}
      />
      <CustomTextField
        label="Password"
        placeholderTag="비밀번호를"
        value={password.value}
        onChange={password.onChange}
      />
      <CustomTextField
        label="Phone"
        placeholderTag="핸드폰 번호를"
        value={phone.value}
        onChange={phone.onChange}
      />
      <CustomTextField
        label="E-Mail"
        placeholderTag="E-Mail을"
        value={email.value}
        onChange={email.onChange}
      />
      <Button variant="outlined" onClick={handleCreateUser}>
        완료
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  margin: 200px;
`;
