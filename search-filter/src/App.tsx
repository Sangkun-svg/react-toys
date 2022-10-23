import { useEffect, useState } from "react";
import { User } from "./mock/user";
// import _ from "lodash"; TODO: usgin debounce
import "./App.css";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

import { Table } from "./Table";

type user = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string; // enum
};

function App() {
  const [query, setQuery] = useState("");
  const [filterdUser, setFilterdUser] = useState(User);

  useEffect(() => {
    setFilterdUser(
      User.filter(
        (el: user) =>
          el.first_name.toLocaleLowerCase().includes(query.toLowerCase()) ||
          el.last_name.toLocaleLowerCase().includes(query.toLowerCase()) ||
          el.email.toLocaleLowerCase().includes(query.toLowerCase())
      )
    );
  }, [query]);

  const deleteQuery = () => {
    setQuery("");
  };

  const onQuery = ({ target: { value } }: any) => {
    setQuery(value);
  };

  return (
    <div className="App">
      <Label>
        <input
          type="text"
          placeholder="Search..."
          className="search"
          value={query}
          onChange={onQuery}
        />
        <button onClick={deleteQuery}>
          <DeleteIcon />
        </button>
      </Label>
      {filterdUser.length === 0 && <h1>Not Found User</h1>}
      {filterdUser.length >= 1 && <Table User={filterdUser} query={query} />}
    </div>
  );
}
const Label = styled.label`
  position: relative;

  input {
    border: none;
    padding: 0 15px;
    height: 40px;
    border: 2px solid blue;
    border-radius: 15px;
  }
  button {
    position: absolute;
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
    top: 7px;
    right: 10px;
    :hover {
      border: 1px solid black;
      border-radius: 10px;
    }
  }
`;
export default App;
