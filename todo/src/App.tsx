import React, { Fragment, useState } from "react";
import { TodoInsert } from "./components/TodoInsert/TodoInsert";
import { TodoList } from "./components/TodoList/TodoList";
import { Layout } from "./layout/Layout";
import { ListContextProvider } from "./context/Provider/ListContextProvider";
const App = () => {
  return (
    <ListContextProvider value={{}}>
      <Layout>
        <TodoInsert />
        <TodoList />
      </Layout>
    </ListContextProvider>
  );
};

export default App;
