import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { theme } from "core/Theme";
import { useInnerWidth } from "utils";
import { lessThan } from "utils/mediaQueries";

import Members from "assets/kamunity-members.jpeg";
import Text from "components/atoms/Text";

import Borelva from "assets/t-borelva.jpg";
import Cisse from "assets/k-cisse.jpg";
import Seck from "assets/i-seck.jpg";
import Sakho from "assets/g-sakho.jpg";

const { spacing, screens } = theme;

const Container = styled.div``;

const Wrapper = styled.div`
  ${lessThan("mobile")(`
    height: 248px;
  `)}
  width: 100%;
  background: url(${Members}) center 30%;
  background-size: cover;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const IntroducerWrapper = styled.div`
  ${({ theme: { spacing, colors } }) => `
    padding: ${spacing.eight} 0px;
    background: ${colors.white};
  `}
`;

const MembersWrapper = styled.div`
  ${({ theme: { spacing, screens } }) => `
    max-width: ${screens.maxDesktop}px;
    margin: ${spacing.eight} auto;
  `}
`;

const MemberItem = styled.div<{ isReverse: boolean }>`
  ${({ isReverse, theme: { colors, borderRadius, spacing } }) => `
    background: ${isReverse ? colors.white : "transparent"};
    flex-direction: ${isReverse ? "row-reverse" : "row"};
    border-radius: ${borderRadius.round};
    padding: ${spacing.four} 0;
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
    ${lessThan("mobile")(`
      width: calc(100% - ${spacing.six});
    `)}
  `}
  width: 700px;
  height: 400px;
  object-fit: cover;
`;

const MemberDescription = styled.div`
  ${({ theme: { spacing } }) => `
    ${lessThan("smallDesktop")(`
      max-width: 100%;
      padding: 0 ${spacing.three};
    `)}
  `}
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

const KamaradesPage: React.FC = () => {
  const innerWidth = useInnerWidth();
  const history = useHistory();

  const isSmallDesktopDisplay = innerWidth <= screens.smallDesktop;
  const isTabletDisplay = innerWidth <= screens.tablet;

  const Members = [
    {
      photo: Borelva,
      job: "MEMBRE DE L'ASSOCIATION",
      name: "Tatiana BORELVA",
      description:
        "Avec le temps nous avons appris que les hommes ne pouvaient être libres qu’à la force de leurs mains et de leurs esprits. Et dans ce monde rempli de défis le savoir est plus qu’une nécessité. Nous unissons nos forces pour faire avancer chaque jour les causes qui nous tiennent à cœur avec l’espoir de participer à l’édification d’un monde meilleur.",
      position: "50% 30%",
    },
    {
      photo: Cisse,
      job: "MEMBRE DE L'ASSOCIATION",
      name: "Khodia CISSÉ",
      description:
        "Kamunity de mon point de vue, est une association qui a pour but de rassembler la jeunesse de la diaspora africaine, elle nous permet de nouer un lien à une partie de notre identité, d’explorer notre continent. J’en apprend beaucoup chaque jour, et j’ai encore plus envie de mener des actions qui seront bénéfiques à mon pays, à mon continent.",
      position: "",
    },
    {
      photo: Seck,
      job: "MEMBRE DE L'ASSOCIATION",
      name: "Ibrahim SECK",
      description:
        "L'engagement auprès de mon pays et de mon continent m'a toujours animé. Avec kamunity, nous comptons fructifier cette volonté qui anime des millions de jeunes africains partout dans le monde. C'est par l'union que nous réussirons à vaincre les défis de notre communauté.",
      position: "50% 0%",
    },
    {
      photo: Sakho,
      job: "MEMBRE DE L'ASSOCIATION",
      name: "Goundo SAKHO",
      description:
        "Beaucoup d’entre nous sommes jeunes et rêvons d’une Afrique libre, unie et prospère. Avec Kamunity nous pouvons partager nos connaissances et notre savoir à travers divers événements comme les débats-conférences et partenariat. Cela rend l’association original car nous avons tous et toutes divers point de vue. Connaître son histoire est primordiale afin d’aller dans la bonne direction. Chaque membre de Kamunity est unique et affectionne un domaine en particulier.",
      position: "",
    },
  ];

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
            width: "635px",
            margin: isTabletDisplay ? `0px ${spacing.three}` : 0,
            background: "rgba(24, 18, 1, 0.7)",
          }}
        >
          Unir la jeunesse africaine dans l'action et la solidarité
        </Text>
      </Wrapper>
      <IntroducerWrapper>
        <Text
          fontSize={isTabletDisplay ? "title5" : "title2"}
          fontWeight="medium"
          color="green"
          textAlign="center"
        >
          Les Kamarades
        </Text>
      </IntroducerWrapper>
      <MembersWrapper>
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
          onClick={() => history.push("/contact-et-dons")}
        >
          Rejoins-nous Kamarades
        </ButtonLink>
      </MembersWrapper>
    </Container>
  );
};

export default KamaradesPage;
