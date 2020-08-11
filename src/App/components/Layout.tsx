import React from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "../theme";
import { useDarkMode } from "../hooks/useDarkMode";
import Header, { HeaderProps } from "./Header";

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

interface LayoutProps {
  headerProps?: HeaderProps;
}

export default function Layout(props: any) {
  const [theme, toggleTheme] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;
  return (
    <ThemeProvider theme={themeMode}>
      <GlobalStyle />
      <Header
        position={props.headerProps && props.headerProps.position}
        togglerProps={{ theme: theme, toggleTheme: toggleTheme }}
      />
      {props.children}
    </ThemeProvider>
  );
}
