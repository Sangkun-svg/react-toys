import React, { useState, useEffect, useMemo, useRef } from "react";
import { Users } from "../mock/user";
import { SearchBar, UserTable } from "../components";
import { debounce } from "lodash";
import { User } from "../types";
import styled from "styled-components";

export const Container = () => {
  const [query, setQuery] = useState<string>("");
  const queryRef = useRef<HTMLInputElement>(null);
  const [filterdUser, setFilterdUser] = useState<User[]>(Users);

  const filter = (data: string): boolean => {
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
  }: React.ChangeEvent<HTMLInputElement>): void => {
    debouncedSearch(value);
  };

  const debouncedSearch = useMemo(
    () =>
      debounce((query) => {
        setQuery(query);
      }, 200),
    []
  );

  const initializationQuery = (): void => {
    if (queryRef.current) queryRef.current.value = "";
    setQuery("");
  };

  return (
    <Wrapper>
      <SearchBar
        onQuery={onQuery}
        initializationQuery={initializationQuery}
        ref={queryRef}
      />
      {filterdUser.length === 0 && <h1>Not Found User</h1>}
      {filterdUser.length >= 1 && <UserTable User={filterdUser} />}
    </Wrapper>
  );
};
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px;
`;
