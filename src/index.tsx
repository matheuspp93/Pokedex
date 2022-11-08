import React from "react";
import ReactDOM from "react-dom";
import Home from "pages/Home";
import GlobalStyle from "styles/global";
import { PokemonProvider } from "context/Pokemon";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <PokemonProvider>
        <GlobalStyle />
        <Home />
      </PokemonProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
