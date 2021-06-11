import React from "react";
import styled from "styled-components";

import KamunityIdeas from "components/organisms/KamunityIdeas";
import KamunityActions from "components/organisms/KamunityActions";
import KamunityKamarades from "components/organisms/KamunityKamarades";

const Container = styled.div``;

const HomePage: React.FC = () => {
  return (
    <Container>
      <KamunityIdeas />
      <KamunityActions />
      <KamunityKamarades />
    </Container>
  );
};

export default HomePage;
