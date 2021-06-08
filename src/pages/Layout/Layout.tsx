import React from "react";
import styled from "styled-components";

import Navbar from "components/atoms/Navbar";

const Container = styled.div`
  ${({ theme: { colors } }) => `
    background: ${colors.beige};
  `}
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  ${({ theme: { colors } }) => `
      ::-webkit-scrollbar {
        width: 8px;
        background: white;
      }

      ::-webkit-scrollbar-thumb {
        background: ${colors.green};
      }
  `}
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  width: 100%;
  height: calc(100% - 66px);
  overflow-y: auto;
  overflow-x: hidden;
  margin: 0 auto;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <Container>
      <Navbar />
      <Content>{children}</Content>
    </Container>
  );
};

export default Layout;
