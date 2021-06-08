import React from "react";
import styled from "styled-components";

import { lessThan } from "utils/mediaQueries";

import Text from "components/atoms/Text";
import FlipCard from "components/molecules/FlipCard";

import Debat from "assets/debat.jpg";
import ImageDay from "assets/image_day.png";
import Plateform from "assets/plateform.jpg";
import Kamagora from "assets/kamagora.jpg";

const Container = styled.div`
  ${({ theme: { spacing } }) => `
    padding: ${spacing.six} ${spacing.three};
  `}
`;

const CardWrapper = styled.div`
  ${({ theme: { spacing } }) => `
    margin-top: ${spacing.five};
  `}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled(FlipCard)`
  ${({ theme: { spacing } }) => `
    ${lessThan("smallDesktop")(`
      width: 45%;
      height: 640px;
      padding-bottom: ${spacing.five};
    `)}
    ${lessThan("tablet")(`
      height: 430px;
    `)}
    ${lessThan("mobile")(`
      width: 100%;
    `)}
  `}
`;

const KamunityActions: React.FC = () => {
  const data = [
    {
      title: "Nos débats",
      img: Debat,
      description:
        "“ Nos débats abordent des thématiques empêchant l'émancipation du continent et de ses communautés. Le but est d'en soulever les problématiques afin d'apporter des axes de solutions applicables à notre échelle. ”",
      slot: "/",
    },
    {
      title: "1 image, 1 jour",
      img: ImageDay,
      description:
        "1 Image 1 Jour est un concept où chaque jour nous vous présentons des personnalités africaines et afro-descendantes ainsi que des faits historiques afin de permettre une meilleure connaissance de l'Afrique à tous !",
      slot: "/",
    },
    {
      title: "Pateforme partage de cours",
      img: Plateform,
      description:
        "“ Une plateforme de partage de cours est en conception afin de permettre un accès à l'éducation pour tous. ”",
      slot: "/",
    },
    {
      title: "Kamagora",
      img: Kamagora,
      description:
        "“ Kamagora sont des évènements que l'assocation organise dans des restaurants afin de promouvoir les cultures et créations africaines. ”",
      slot: "/",
    },
  ];

  return (
    <Container>
      <Text fontSize="title2" fontWeight="" color="green" textAlign="center">
        Nos champs d'actions
      </Text>
      <CardWrapper>
        {data.map((card, index) => {
          return <Card key={index} data={card} />;
        })}
      </CardWrapper>
    </Container>
  );
};

export default KamunityActions;
