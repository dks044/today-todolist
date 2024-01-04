import React from 'react';
import { createGlobalStyle } from 'styled-components';
import TodoTemplate from './components/TodoTemplate';

const GlobalStyle = createGlobalStyle`
  body {
    background: #E0E0F8;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <TodoTemplate>Test</TodoTemplate>
    </>
  );
}

export default App;