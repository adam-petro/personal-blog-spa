import React, { useState, useEffect } from "react";
import styled, { keyframes } from "styled-components";

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);

  border-top: 4px solid grey;
  border-right: 4px solid grey;
  border-bottom: 4px solid grey;
  border-left: 4px solid black;
  background: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
`;

export interface LoaderProps {
  timeoutPeriod: number;
}

export default function Loader({ timeoutPeriod = 4000 }: LoaderProps) {
  const [isTimedOut, setIsTimedout] = useState<boolean>(false);
  useEffect(() => {
    let timer = setTimeout(() => setIsTimedout(true), timeoutPeriod);
    return () => {
      clearTimeout(timer);
    };
  }, [timeoutPeriod]);
  return (
    <React.Fragment>
      {isTimedOut ? (
        <>
          <Spinner />
          <h1>Experiencing difficulties?</h1>
        </>
      ) : (
        <Spinner />
      )}
    </React.Fragment>
  );
}
