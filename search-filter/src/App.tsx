import React, { useState } from "react";
import { User } from "./mock/user";
import _ from "lodash";
import "./App.css";
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
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Surname</th>
            <th>Email</th>
          </tr>
          {User.filter(
            (el) =>
              el.first_name.toLocaleLowerCase().includes(query.toLowerCase()) ||
              el.last_name.toLocaleLowerCase().includes(query.toLowerCase()) ||
              el.email.toLocaleLowerCase().includes(query.toLowerCase())
          ).map((el) => {
            return (
              <tr key={el.id} className="listItem">
                <td className="listContent">{el.first_name}</td>
                <td className="listContent">{el.last_name}</td>
                <td className="listContent">{el.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default App;
