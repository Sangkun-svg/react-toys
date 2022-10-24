import React, { useState, useEffect, useMemo, forwardRef, useRef } from "react";
import { Users } from "../mock/user";
import { SearchBar, UserTable } from "../components";
import _, { debounce } from "lodash";
import { User } from "../types/User";
import styled from "styled-components";

export const Container = () => {
  const [query, setQuery] = useState<string>("");
  const queryRef = useRef<any>();
  const [filterdUser, setFilterdUser] = useState<User[]>(Users);
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

  const onQuery = ({
    target: { value },
  }: React.ChangeEvent<HTMLInputElement>) => {
    debouncedSearch(value);
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        setQuery(query);
      }, 200),
    [query]
  );

  const initializationQuery = () => {
    queryRef.current.value = "";
    setQuery("");
  };

  return (
    <Wrapper>
      <SearchBar
        type="text"
        onQuery={onQuery}
        initializationQuery={initializationQuery}
        ref={queryRef}
      />
      {filterdUser.length === 0 && <h1>Not Found User</h1>}
      {filterdUser.length >= 1 && (
        <UserTable User={filterdUser} query={query} />
      )}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;
