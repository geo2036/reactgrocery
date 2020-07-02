import React from 'react';
import './App.css';
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./globalstyled";
import { Theme } from "./theme";

import { Navbar } from "./components/Nav";

function App() {
  // const [theme, setTheme] = useState(Theme.light)

  return (
    <ThemeProvider theme={Theme.light}>
      <>
        <GlobalStyles />
        <Navbar />
        <div>
        </div>
      </>
    </ThemeProvider>
  );
}

export default App;
