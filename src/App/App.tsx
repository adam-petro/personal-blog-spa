import React from "react";
import Routes from "./routes";
import Header from "./components/Header";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { BrowserRouter } from "react-router-dom";
import { useDarkMode } from "./hooks/useDarkMode";
import { lightTheme, darkTheme } from "./theme";
import Layout from "./components/Layout";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  body{font-family: 'Lato', sans-serif;
    margin:0;
    padding:0;
    box-sizing:border-box;
    background-color:${({ theme }: any) => theme.body};
    color: ${({ theme }: any) => theme.text};
  }    
* {
      
  }
`;

export default function App() {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeMode}>
        <GlobalStyle />
        <Header togglerProps={{ theme: theme, toggleTheme: toggleTheme }} />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}
