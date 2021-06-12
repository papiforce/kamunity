import React from "react";
import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan } from "utils/mediaQueries";
import { useInnerWidth } from "utils";

import Text from "components/atoms/Text";
import FlipCard from "components/molecules/FlipCard";

import Debat from "assets/debat.jpg";
import ImageDay from "assets/image_day.png";
import Plateform from "assets/plateform.jpg";
import Kamagora from "assets/kamagora.jpg";

const { spacing, screens } = theme;

const Container = styled.div`
  ${({ theme: { spacing } }) => `
    padding: ${spacing.eight} ${spacing.three};
  `}
`;

const CardWrapper = styled.div`
  ${({ theme: { spacing, screens } }) => `
    margin: ${spacing.five} auto auto auto;
    max-width: ${screens.maxDesktop}px;
    row-gap: ${spacing.five};
  `}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const Card = styled(FlipCard)`
  ${lessThan("smallDesktop")(`
    width: 45%;
    height: 640px;
  `)}
  ${lessThan("tablet")(`
    height: 430px;
  `)}
  ${lessThan("mobile")(`
    width: 100%;
  `)}
`;

const VideoWrapper = styled.div`
  ${({ theme: { screens, spacing } }) => `
    max-width: ${screens.maxDesktop}px;
    margin: ${spacing.fifteen} auto auto auto;
  `}
  ${lessThan("smallDesktop")(`
    flex-direction: column-reverse;
  `)}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const Player = styled.iframe`
  ${lessThan("tablet")(`
    width: 100%;
  `)}
  border: 0px;
  border-radius: 24px;
`;

const PlayerDescriptionWrapper = styled.div`
  ${lessThan("smallDesktop")(`
    width: 100%;
  `)}
  width: 500px;
`;

const PlayerDescription = styled(Text)`
  ${({ theme: { spacing } }) => `
    ${lessThan("smallDesktop")(`
      margin-bottom: ${spacing.six};
    `)}
  `}
`;

const KamunityActions: React.FC = () => {
  const innerWidth = useInnerWidth();

  const isTabletDisplay = innerWidth <= screens.tablet;
  const isMobileDisplay = innerWidth <= screens.mobile;

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
      <Text
        fontSize={isTabletDisplay ? "title5" : "title2"}
        fontWeight="medium"
        color="green"
        textAlign="center"
      >
        Nos champs d'actions
      </Text>
      <CardWrapper>
        {data.map((card, index) => {
          return <Card key={index} data={card} />;
        })}
      </CardWrapper>
      <VideoWrapper>
        <Player
          width="800"
          height="480"
          src="https://www.youtube.com/embed/KPpr3BIGem0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <PlayerDescriptionWrapper>
          <Text
            fontSize="title5"
            fontWeight="medium"
            color="green"
            textAlign="center"
            style={{ marginBottom: spacing.four }}
          >
            Kamunity présente Kamtextile
          </Text>
          <PlayerDescription
            fontSize={isMobileDisplay ? "medium" : "large"}
            fontWeight="medium"
            color="grey"
            lineHeight="28px"
            textAlign="center"
          >
            Kamarades, c’est avec plaisir que nous vous présentons Kamtextile !
            Un projet de vêtements pour Hommes et Femmes, fait de manière
            artisanale avec notre partenaire togolais Blacktik. Pour notre
            projet-pilote, nous avons réalisé des chemises pour hommes et un
            ensemble pour femmes faits en batik, un tissu traditionnel africain.
            Confectionné manuellement par des les artisans togolais, le
            processus de création de nos vêtements s’est fait à la bougie. Avec
            Kamtextile, nous avons pour projet de mettre en avant de réels
            tissus africains tels que le faso dan fani, le bogolan ou encore le
            batik.
          </PlayerDescription>
        </PlayerDescriptionWrapper>
      </VideoWrapper>
    </Container>
  );
};

export default KamunityActions;
