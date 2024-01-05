import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';
import TodoHead from './components/TodoHead';

import TodoCreate from './components/TodoCreate';
import TodoList from './components/TodoList';
import { TodoProvider } from './contexts/TodoContext';

const GlobalStyle = createGlobalStyle`
  body {
    background: #E0E0F8;
  }
`;

function App() {
  return (
    <>
      <TodoProvider>
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead />
          <TodoList />
          <TodoCreate />
        </TodoTemplate>
      </TodoProvider>
    </>
  );
}

export default App;