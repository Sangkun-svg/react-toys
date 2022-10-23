import { useEffect, useState } from "react";
import { Users } from "./mock/user";
// import _ from "lodash"; TODO: usgin debounce
import "./App.css";
import { SearchBar, Table } from "./components";
import { last } from "lodash";

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  gender: string; // refactor : change enum type
};

function App() {
  const [query, setQuery] = useState("");
  const [filterdUser, setFilterdUser] = useState(Users);

  const filter = (data: string) => {
    return data.toLowerCase().includes(query.toLowerCase());
  };

  useEffect(() => {
    setFilterdUser(
      Users.filter(
        ({ first_name, last_name, email }: User) =>
          filter(first_name) || filter(last_name) || filter(email)
      )
    );
  }, [query]);

  const initializationQuery = () => {
    setQuery("");
  };

  const onQuery = ({ target: { value } }: any) => {
    setQuery(value);
  };

  return (
    <div className="App">
      <SearchBar
        query={query}
        onQuery={onQuery}
        initializationQuery={initializationQuery}
      />
      {filterdUser.length === 0 && <h1>Not Found User</h1>}
      {filterdUser.length >= 1 && <Table User={filterdUser} query={query} />}
    </div>
  );
}

export default App;
