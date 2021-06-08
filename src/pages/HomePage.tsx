import React from "react";
import styled from "styled-components";

import KamunityIdeas from "components/organisms/KamunityIdeas";
import KamunityActions from "components/organisms/KamunityActions";

const Container = styled.div``;

const HomePage: React.FC = () => {
  return (
    <Container>
      <KamunityIdeas />
      <KamunityActions />
    </Container>
  );
};

export default HomePage;
