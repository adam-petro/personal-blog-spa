import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Toggle, { ToggleProps } from "./Toggle";
import { darkTheme } from "../theme";

const StyledHeader = styled.header`
  position: absolute;
  width: 100%;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid ${({ theme }: any) => theme.borderColor};
  font-size: 15px;
  height: 45px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
  height: 100%;
`;

const H4 = styled.h4`
  border-right: 1px solid ${({ theme }: any) => theme.borderColor};
  margin: 0;
  padding: 13px 20px;
`;

const Ul = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  margin: 0;
  padding: 0;
`;

const Li = styled.li`
  display: inline-block;
`;

const StyledLink = styled(Link)`
  transition: all 0.3s ease 0s;
  text-decoration: none;
  color: ${({ theme }: any) => theme.text};
  height: 100%;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  &:hover {
    box-shadow: ${({ theme }: any) => theme.globalTheme.boxShadow};
  }
`;

interface HeaderProps {
  togglerProps: ToggleProps;
}

export default function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <Nav>
        <H4>Adam Petro</H4>
        <Ul>
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/about">About</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/profile">My profile</StyledLink>
          </Li>
        </Ul>{" "}
      </Nav>
      <Toggle
        theme={props.togglerProps.theme}
        toggleTheme={props.togglerProps.toggleTheme}
      />
    </StyledHeader>
  );
}
