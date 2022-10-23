import { useEffect, useState } from "react";
import { User } from "./mock/user";
// import _ from "lodash"; TODO: usgin debounce
import "./App.css";
import styled from "styled-components";
import DeleteIcon from "@mui/icons-material/Delete";

import { Table } from "./Table";
import { SearchBar } from "./components/SearchBar";

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
      <SearchBar query={query} onQuery={onQuery} deleteQuery={deleteQuery} />
      {filterdUser.length === 0 && <h1>Not Found User</h1>}
      {filterdUser.length >= 1 && <Table User={filterdUser} query={query} />}
    </div>
  );
}

export default App;
