import React, { useState } from "react";
import { Register } from "./components";
import { Login } from "./components/Login/Login";
import { dummyData } from "./dummy/dumy_data";
import { emptyInputValidator } from "./components/Login/validator";
function App() {
  const [users, setUsers] = useState(dummyData);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("isLoggedIn"))
  );

  const onAddUser = (newUser: any) => {
    setUsers((preState) => {
      return [...preState, newUser];
    });
  };

  const onToggleReigster = () => {
    setIsOpen(!isOpen);
  };
  localStorage.getItem("isLoggedIn");
  const loginHandler = (id: string, password: string) => {
    if (emptyInputValidator(id) && emptyInputValidator(password)) {
      const findUser = users.filter(
        (el) => el.id === id && el.password === password
      );
      if (findUser.length > 0) {
        localStorage.setItem("isLoggedIn", id);
        setIsLoggedIn(true);
      }
    }
    setIsLoggedIn(false);
    // setError("not exist User" , false)
  };
  const logoutHandler = (id: string) => {
    localStorage.removeItem("isLoggedIn");
    setIsLoggedIn(false);
  };

  return (
    <React.Fragment>
      {isLoggedIn && <h1>Let's Commit Your TODO List!</h1>}
      {!isLoggedIn && !isOpen && (
        <Login
          onToggleReigster={onToggleReigster}
          onLogin={loginHandler}
          onLogout={logoutHandler}
        />
      )}
      {!isLoggedIn && isOpen && (
        <Register onToggleReigster={onToggleReigster} onAddUser={onAddUser} />
      )}
    </React.Fragment>
  );
}

export default App;
