import React from "react";
import styled from "styled-components";

import { theme } from "core/Theme";
import { useInnerWidth } from "utils";
import { lessThan } from "utils/mediaQueries";

import HomePageImage from "assets/homepage-logo.png";
import Text from "components/atoms/Text";
import TeamHandjoin from "assets/team-handjoin.jpg";

const { screens, spacing } = theme;

const Container = styled.div``;

const Wrapper = styled.div`
  ${lessThan("mobile")(`
    height: 248px;
  `)}
  background: url(${HomePageImage});
  background-size: cover;
  background-position: center;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterSubWrapper = styled.div`
  ${({ theme: { colors, spacing } }) => `
    background: ${colors.white};
    padding: ${spacing.eight} 0px;
  `}
`;

const SubWrapper = styled.div`
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

const LeftSide = styled.div`
  width: 540px;
`;

const Description = styled(Text)`
  ${({ theme: { spacing } }) => `
    ${lessThan("smallDesktop")(`
      margin-bottom: ${spacing.four};
    `)}
  `}
`;

const TeamPicture = styled.img`
  ${({ theme: { borderRadius } }) => `
    border-radius: ${borderRadius.round};
  `}
  max-width: 540px;
  ${lessThan("mobile")(`
    width: 100%;
  `)}
`;

const KamunityIdeas: React.FC = () => {
  const innerWidth = useInnerWidth();

  const isTabletDisplay = innerWidth <= screens.tablet;
  const isMobileDisplay = innerWidth <= screens.mobile;

  return (
    <Container>
      <Wrapper>
        <Text
          fontSize={isTabletDisplay ? "title4" : "title0"}
          fontWeight="light"
          lineHeight={isTabletDisplay ? "50px" : "70px"}
          textAlign="center"
          style={{
            width: "635px",
            padding: isTabletDisplay ? `0px ${spacing.three}` : 0,
          }}
        >
          Unir la jeunesse dans l'action et la solidarité
        </Text>
      </Wrapper>
      <CenterSubWrapper>
        <SubWrapper>
          <LeftSide>
            <Text
              fontSize="title5"
              fontWeight="regular"
              color="green"
              textAlign="center"
              style={{
                marginBottom: spacing.four,
              }}
            >
              Notre Vision
            </Text>
            <Description
              fontSize={isMobileDisplay ? "medium" : "large"}
              fontWeight="medium"
              textAlign="center"
              color="grey"
              lineHeight="30px"
            >
              La jeunesse africaine et afro-descendante est grande, brillante et
              impliquée. Différents jeunes parisiens issus de la diaspora ont
              donc décidé de rassembler cette jeunesse présente aux
              quatres-coins du monde: ainsi est né Kamunity.
            </Description>
          </LeftSide>
          <TeamPicture src={TeamHandjoin} alt="team_photo" />
        </SubWrapper>
      </CenterSubWrapper>
    </Container>
  );
};

export default KamunityIdeas;
