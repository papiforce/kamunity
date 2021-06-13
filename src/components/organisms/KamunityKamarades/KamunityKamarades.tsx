import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { theme } from "core/Theme";
import { lessThan } from "utils/mediaQueries";
import { useInnerWidth } from "utils";

import Text from "components/atoms/Text";

import Mbaye from "assets/mt-mbaye.jpeg";
import Sakho from "assets/m-sakho.jpg";
import Drame from "assets/mb-drame.jpeg";
import Yapi from "assets/pa-yapi.jpg";

const { spacing, screens } = theme;

const Container = styled.div`
  ${({ theme: { spacing } }) => `
    padding: ${spacing.eight} ${spacing.three};
  `}
`;

const Wrapper = styled.div`
  ${({ theme: { screens } }) => `
    max-width: ${screens.maxDesktop}px;
    margin: 0 auto;
  `}
`;

const IntroducerWrapper = styled.div`
  ${({ theme: { spacing } }) => `
    margin-bottom: ${spacing.eight};
  `}
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MemberItem = styled.div<{ isReverse: boolean }>`
  ${({ isReverse }) => `
    flex-direction: ${isReverse ? "row-reverse" : "row"};
  `}
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

const MemberPhoto = styled.img<{ position: string }>`
  ${({ position, theme: { borderRadius, spacing } }) => `
    object-position: ${position};
    border-radius: ${borderRadius.round};
    ${lessThan("smallDesktop")(`
      margin-bottom: ${spacing.four};
    `)}
  `}
  ${lessThan("mobile")(`
    width: 100%;
  `)}
  width: 700px;
  height: 400px;
  object-fit: cover;
`;

const MemberDescription = styled.div`
  ${lessThan("smallDesktop")(`
    max-width: 100%;
  `)}
  max-width: 475px;
`;

const ButtonLink = styled(Text)`
  ${({ theme: { spacing, colors, borderRadius } }) => `
    padding: ${spacing.three} ${spacing.four};
    background: ${colors.green};
    margin: ${spacing.eight} auto 0 auto;
    border-radius: ${borderRadius.small};
  `}
  width: fit-content;
  cursor: pointer;
`;

const KamunityKamarades: React.FC = () => {
  const innerWidth = useInnerWidth();
  const history = useHistory();

  const isSmallDesktopDisplay = innerWidth <= screens.smallDesktop;
  const isTabletDisplay = innerWidth <= screens.tablet;
  const isMobileDisplay = innerWidth <= screens.mobile;

  const Members = [
    {
      photo: Mbaye,
      job: "CO-FONDATEUR ET PRÉSIDENT",
      name: "Mamadou Talla MBAYE",
      description:
        "Nos ambitions à l’égard de Kamunity sont multiples. À travers plusieurs activités, nous comptons permettre à la jeunesse africaine d’avoir une prise de conscience par rapport au sort de l’Afrique. Cette prise de conscience devrait occasionner le retour à la source, qui exige une connaissance parfaite de l’histoire africaine, une participation active au développement de l’Afrique",
      position: "50% 50%",
    },
    {
      photo: Sakho,
      job: "SECRÉTAIRE GÉNÉRAL",
      name: "Mariama SAKHO",
      description:
        "Depuis longtemps, je me suis intéressée à la question Noire ainsi qu'à notre place dans la société. Pour moi, il est donc essentiel de connaître notre histoire, de lutter contre les discriminations et de devenir l'auteur de notre image. C'est ce que Kamunity propose et combat en organisant des conférences-débats, publiant des articles sur les personnalités et l'histoire africaine ainsi que d'autres événements réunissant les jeunes.",
      position: "50% 70%",
    },
    {
      photo: Drame,
      job: "CO-FONDATEUR ET CO-PRÉSIDENT",
      name: "Mohamed Bemba DRAMÉ",
      description:
        "Kamunity a été créé pour être un véritable pont entre les diasporas africaines et le continent. Riche d'une jeunesse brillante et présente aux quatres coins du monde, nous pouvons aujourd'hui agir pour que chacun apporte sa contribution à l'émancipation de l'Afrique.",
      position: "50% 30%",
    },
    {
      photo: Yapi,
      job: "SECRÉTAIRE ADJOINT",
      name: "Pierre-Alex YAPI",
      description:
        "Kamunity c'est avant tout l'histoire d'enfants d'Afrique qui ont décidé de prendre en main leur destin, et celui de leur continent. Cette histoire c'est la mienne, la tienne, la nôtre. Cette histoire, nous l'écrivions en ce moment même, et nous continuerons de l'écrire tous ensemble. Kamunity est un trait d'union entre l'Afrique et sa diaspora, partout à travers le monde !",
      position: "50% 33%",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <IntroducerWrapper>
          <Text
            fontSize={isTabletDisplay ? "title5" : "title2"}
            fontWeight="medium"
            color="green"
            textAlign="center"
            style={{ marginBottom: spacing.four }}
          >
            Les Kamarades
          </Text>
          <Text
            fontSize={isMobileDisplay ? "medium" : "large"}
            fontWeight="medium"
            color="grey"
            textAlign="center"
            lineHeight="28px"
            style={{
              maxWidth: isSmallDesktopDisplay ? "100%" : "650px",
            }}
          >
            C'est ainsi que nous nous nommons au sein de Kamunity. Jeunes,
            dynamiques et engagés dans nos projets personnels et professionnels,
            nous nous servons des multiples talents de chacun pour que notre
            association permette à l'ensemble de nos communautés d'aller de
            l'avant.
          </Text>
        </IntroducerWrapper>
        {Members.map((member, index) => {
          return (
            <MemberItem
              key={index}
              isReverse={index % 2 !== 0}
              style={{
                marginBottom: index < Members.length - 1 ? spacing.six : 0,
              }}
            >
              <MemberPhoto
                src={member.photo}
                position={member.position}
                alt={member.name + "photo"}
              />
              <MemberDescription>
                <Text
                  fontSize="small"
                  fontWeight="regular"
                  textAlign={
                    isSmallDesktopDisplay
                      ? "center"
                      : index % 2 !== 0
                      ? "right"
                      : "left"
                  }
                  style={{ marginBottom: spacing.one }}
                >
                  {member.job}
                </Text>
                <Text
                  fontSize="display1"
                  fontWeight="medium"
                  color="green"
                  textAlign={
                    isSmallDesktopDisplay
                      ? "center"
                      : index % 2 !== 0
                      ? "right"
                      : "left"
                  }
                  style={{ marginBottom: spacing.two }}
                >
                  {member.name}
                </Text>
                <Text
                  fontSize="large"
                  fontWeight="medium"
                  color="grey"
                  lineHeight="24px"
                  textAlign={
                    isSmallDesktopDisplay
                      ? "center"
                      : index % 2 !== 0
                      ? "right"
                      : "left"
                  }
                >
                  {member.description}
                </Text>
              </MemberDescription>
            </MemberItem>
          );
        })}
        <ButtonLink
          fontSize="large"
          fontWeight="medium"
          color="white"
          onClick={() => history.push("/kamarades")}
        >
          Voir les autres Kamarades
        </ButtonLink>
      </Wrapper>
    </Container>
  );
};

export default KamunityKamarades;
