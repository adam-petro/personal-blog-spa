import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkContainer = styled(Link)`
  display: block;
  text-decoration: inherit;
  color: inherit;
  border-radius: 5px;
  width: 100%;
  padding: 5px 10px;
  margin-bottom: 30px;
  box-shadow: 1px 1px 6px 0px rgba(0, 0, 0, 0.75);

  &:hover {
    box-shadow: 1px 1px 6px 1px rgba(0, 0, 0, 0.75);
    border: none;
    transform: scale(1.005);
    transition-duration: 0.2s;
    transform: translateY(-2px);
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Heading = styled.h3`
  margin: 5px 0 0;
`;

type PostPreviewProps = {
  title: string;
  date?: string;
  description: string;
  image?: string;
  url: string;
};

export default function PostPreview(props: PostPreviewProps) {
  return (
    <LinkContainer to={props.url}>
      <Heading>{props.title}</Heading>
      {props.date && <sub>{props.date}</sub>}
      <p>{props.description}</p>
    </LinkContainer>
  );
}
