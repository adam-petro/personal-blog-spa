import React from "react";
import bannerImg from "../../assets/banner.jpg";
import styled from "styled-components";
import { H1 } from "./Typography";

const Div = styled.div`
  position: relative;
  text-align: center;
  background: url(${bannerImg});
  height: 400px;
  overflow: hidden;
  background-size: cover;
`;

const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow: hidden;
  text-align: center;
`;

const ImageHeading = styled(H1)`
  width: 100%;
  color: #363537;
  text-shadow: 0px 3px 6px rgba(136, 138, 136, 0.75);
`;

export default function Banner() {
  return (
    <>
      <Div>
        <TextContainer>
          <ImageHeading>Welcome to my blog</ImageHeading>
        </TextContainer>
      </Div>
    </>
  );
}
