import React from "react";
import styled from "styled-components";

import { theme } from "core/Theme";

import Text from "components/atoms/Text";

const { spacing } = theme;

const Container = styled.div``;

const IntroducerWrapper = styled.div`
  ${({ theme: { screens, spacing } }) => `
    max-width: ${screens.maxDesktop}px;
    margin: ${spacing.four} auto auto auto;
  `}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KamunityKamarades: React.FC = () => {
  return (
    <Container>
      <IntroducerWrapper>
        <Text
          fontSize="title5"
          fontWeight="medium"
          color="green"
          textAlign="center"
          style={{ marginBottom: spacing.four }}
        >
          Les Kamarades
        </Text>
        <Text
          fontSize="large"
          fontWeight="medium"
          color="grey"
          textAlign="center"
          lineHeight="28px"
          style={{ maxWidth: "650px" }}
        >
          C'est ainsi que nous nous nommons au sein de Kamunity. Jeunes,
          dynamiques et engagés dans nos projets personnels et professionnels,
          nous nous servons des multiples talents de chacun pour que notre
          association permette à l'ensemble de nos communautés d'aller de
          l'avant.
        </Text>
      </IntroducerWrapper>
    </Container>
  );
};

export default KamunityKamarades;
