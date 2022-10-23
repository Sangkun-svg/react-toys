import React, { useEffect, useState } from "react";
import { User } from "./mock/user";
import _ from "lodash";
import "./App.css";

type user = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string; // enum
};

function App() {
  const [query, setQuery] = useState("");
  const onQuery = ({ target: { value } }: any) => {
    setQuery(value);
  };
  return (
    <div className="App">
      <input
        type="text"
        value={query}
        placeholder="Search..."
        className="search"
        onChange={onQuery}
      />
      <ul className="list">
        {User.filter((el) =>
          el.first_name.toLocaleLowerCase().includes(query.toLowerCase())
        ).map((el) => {
          return (
            <li key={el.id} className="listItem">
              {el.first_name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
