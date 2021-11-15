import React from "react";
import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan } from "utils/mediaQueries";
import { useInnerWidth } from "utils";

import Sky from "assets/news-banner.jpg";
import DebatAmphi from "assets/debat_amphi.jpg";

import Text from "components/atoms/Text";

const { colors, screens, spacing } = theme;

const Container = styled.div``;

const Wrapper = styled.div`
  ${lessThan("mobile")(`
    height: 248px;
  `)}
  width: 100%;
  background: url(${Sky}) center 30%;
  background-size: cover;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SecondWrapper = styled.div`
  ${({ theme: { colors, spacing } }) => `
    background: ${colors.white};
    padding: ${spacing.eight} 0px;
  `}
  width: 100%;
`;

const SecondWrapperCenter = styled.div`
  ${({ theme: { screens, spacing } }) => `
    max-width: ${screens.maxDesktop}px;
    ${lessThan("mobile")(`
      padding: 0px ${spacing.three};
    `)}
  `}
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const DebatPicture = styled.img`
  ${({ theme: { borderRadius } }) => `
    border-radius: ${borderRadius.small};
  `}
  max-width: 540px;
  ${lessThan("mobile")(`
    width: 100%;
  `)}
`;

const VideoWrapper = styled.div`
  ${({ theme: { screens, spacing } }) => `
    max-width: ${screens.maxDesktop}px;
    margin: ${spacing.five} auto ${spacing.five};
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
    width: calc(100% - 48px);
  `)}
  border: 0px;
  border-radius: 24px;
`;

const ButtonLink = styled(Text)`
  ${({ theme: { spacing, colors, borderRadius } }) => `
    padding: ${spacing.three} ${spacing.four};
    background: ${colors.green};
    margin: ${spacing.five} auto ${spacing.five};
    border-radius: ${borderRadius.small};
  `}
  width: fit-content;
  cursor: pointer;
`;

const NewsPage: React.FC = () => {
  const innerWidth = useInnerWidth();

  const isTabletDisplay = innerWidth <= screens.tablet;
  const isMobileDisplay = innerWidth <= screens.mobile;

  return (
    <Container>
      <Wrapper>
        <Text
          fontSize={isTabletDisplay ? "title4" : "title0"}
          fontWeight="light"
          color="white"
          lineHeight={isTabletDisplay ? "50px" : "70px"}
          textAlign="center"
          style={{
            width: "650px",
            margin: isTabletDisplay ? `0px ${spacing.three}` : 0,
          }}
        >
          " Une jeunesse éduquée est une jeunesse consciente et impliquée "
        </Text>
      </Wrapper>
      <SecondWrapper>
        <SecondWrapperCenter>
          <div
            style={{
              maxWidth: 450,
              marginBottom: isTabletDisplay ? spacing.four : 0,
            }}
          >
            <Text
              fontSize="title5"
              fontWeight="regular"
              color="green"
              style={{ marginBottom: spacing.three }}
            >
              Les Débats Kamunity
            </Text>
            <Text
              fontSize={isMobileDisplay ? "medium" : "large"}
              fontWeight="medium"
              color="grey"
              lineHeight="30px"
            >
              Nos débats sont des évènements où nous traitons de sujets
              concernant à la fois l’Afrique et les afro-descendants. Qu’elles
              soit sur des sujets d’actualités, de sociétés ou historiques,
              elles ont pour but de dégager des solutions à partir des
              propositions issues du public. Ces débats sont aussi animés par
              des invités que ce soit des intellectuels, des militants ou encore
              des gens du quotidien à qui nous donnons la parole. Pour ces
              raisons, n’hésitez pas à venir partager votre point de vue avec
              nous !
            </Text>
          </div>
          <DebatPicture src={DebatAmphi} alt="debat" />
        </SecondWrapperCenter>
        <Text
          fontSize="title5"
          fontWeight="regular"
          color="green"
          textAlign="center"
          style={{
            marginTop: isTabletDisplay ? spacing.eight : spacing.sixteen,
            padding: `0px ${spacing.three}`,
          }}
        >
          Nos Lives Instagram
        </Text>
        <Text
          fontSize={isMobileDisplay ? "medium" : "large"}
          fontWeight="medium"
          color="grey"
          textAlign="center"
          lineHeight="30px"
          style={{ maxWidth: 650, margin: `${spacing.two} auto 0` }}
        >
          Durant nos Live Instagram, nous invitons des personnalités inspirantes
          à travers leurs métiers, expériences ou créations à nous partager leur
          point de vue sur une thématique particulière
        </Text>
      </SecondWrapper>
      <VideoWrapper>
        <Player
          width="800"
          height="480"
          src="https://www.youtube.com/embed/6_rbfEOzAO4"
          title="Youtube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Text
          fontSize="title5"
          fontWeight="regular"
          color="green"
          textAlign="center"
          style={{
            maxWidth: 480,
            marginBottom: isTabletDisplay ? spacing.three : 0,
            padding: isTabletDisplay ? `0px ${spacing.three}` : 0,
          }}
        >
          Live Instagram: "Le rôle de l'Histoire dans l'éveil des consciences
          africaines"
        </Text>
      </VideoWrapper>
      <VideoWrapper
        style={{ background: colors.white, padding: `${spacing.five} 0` }}
      >
        <Text
          fontSize="title5"
          fontWeight="regular"
          color="green"
          textAlign="center"
          style={{
            maxWidth: 480,
            padding: isTabletDisplay ? `0px ${spacing.three}` : 0,
          }}
        >
          Live Instagram: "Comment préparer les mutations économiques après le
          Covid-19? "
        </Text>
        <Player
          width="800"
          height="480"
          src="https://www.youtube.com/embed/JD--rDdNHvw"
          title="Youtube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ marginBottom: isTabletDisplay ? spacing.three : 0 }}
        />
      </VideoWrapper>
      <ButtonLink
        fontSize="large"
        fontWeight="medium"
        color="white"
        onClick={() =>
          window.open(
            "https://www.youtube.com/channel/UC4rSKWX3d8219UrF83PALzg",
            "_blank"
          )
        }
      >
        Découvre notre chaîne Youtube
      </ButtonLink>
    </Container>
  );
};

export default NewsPage;
