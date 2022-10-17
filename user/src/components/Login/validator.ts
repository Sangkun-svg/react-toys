export const emptyInputValidator = (data: string) => {
  //   if (pointer.trim().toString().length < 0) return false;
  return true;
};

export const passwordValidator = (password: string) => {
  if (!password) {
    return "Password is required";
  } else if (password.length < 8) {
    return "Password must have a minimum 8 characters";
  }
  return "";
};
