import React, { useState } from 'react';
import './App.css';

import { ViewportProvider } from './context/ViewportContext';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalstyled";
import { Theme } from "./theme";

import { Navbar } from "./components/Nav";

function App() {
  // const [theme, setTheme] = useState(Theme.light)
  const [ open, setOpen ] = useState(false);

  return (
    <ThemeProvider theme={Theme.light}>
      <ViewportProvider>
        <>
          <GlobalStyles />
          <Navbar open={open} setOpen={setOpen} />
        </>
      </ViewportProvider>
    </ThemeProvider>
  );
}

export default App;
