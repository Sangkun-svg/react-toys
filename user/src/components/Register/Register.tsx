import React from "react";
import { TextField, Button } from "@mui/material";
import { useInput } from "../../hooks/useInput";
import styled from "styled-components";

export const Register = ({ onToggleReigster, onAddUser }: any) => {
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
    onAddUser(newUser);
  };

  /*
  TODO: input focus bounce error
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
   */

  return (
    <Wrapper onSubmit={onSubmit}>
      <TextField
        required
        id="outlined-required"
        placeholder={`이름을 입력해주세요`}
        label="Name"
        value={name.value}
        onChange={name.onChange}
      />
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
        placeholder={`Password를 입력해주세요`}
        label="Password"
        value={password.value}
        onChange={password.onChange}
      />

      <TextField
        required
        id="outlined-required"
        placeholder={`Phone number를 입력해주세요`}
        label="Phone"
        type="text"
        value={phone.value}
        onChange={phone.onChange}
      />
      <TextField
        required
        id="outlined-required"
        placeholder={`E-Mail을 입력해주세요`}
        label="E-Mail"
        value={email.value}
        onChange={email.onChange}
      />
      <Button
        variant="outlined"
        onClick={() => {
          handleCreateUser();
          onToggleReigster();
        }}
      >
        완료
      </Button>
      <Button variant="outlined" onClick={onToggleReigster}>
        취소
      </Button>
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 300px;
  margin: 200px;
  height: 400px;
`;
