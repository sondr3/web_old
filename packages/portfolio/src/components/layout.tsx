import React from "react";
import styled from "styled-components";

interface Props {
  children: React.ReactNode;
}

const Wrapper = styled.div`
  margin: 0 auto;
`;

export default function Layout({ children }: Props) {
  return (
    <React.StrictMode>
      <Wrapper>{children}</Wrapper>
    </React.StrictMode>
  );
}