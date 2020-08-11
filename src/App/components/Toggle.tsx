import React from "react";
import styled from "styled-components";
import whiteMoon from "../../assets/moon-white.png";

const Div = styled.div`
  cursor: pointer;
  transition: all 0.3s ease 0s;
  border-left: 1px solid ${({ theme }: any) => theme.borderColor};
  padding: 10px 10px 10px 15px;
  &:hover {
    box-shadow: ${({ theme }: any) => theme.globalTheme.boxShadow};
  }
`;

const Img = styled.img`
  max-width: 75%;
  width: 25px;
`;

export interface ToggleProps {
  theme: string;
  toggleTheme: Function;
}

export default function Toggle({ theme, toggleTheme }: ToggleProps) {
  const isLight = theme === "light";
  return (
    <Div onClick={toggleTheme}>
      <Img src={whiteMoon} />{" "}
    </Div>
  );
}
