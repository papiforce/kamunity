import React from "react";
import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan } from "utils/mediaQueries";
import { useInnerWidth } from "utils";

import Logo from "assets/logo-kamunity.png";
import Text from "components/atoms/Text";

const { spacing, screens } = theme;

const Container = styled.div`
  ${({ theme: { spacing, colors } }) => `
    padding: ${spacing.eight} 0;
    background: ${colors.white};
    ${lessThan("tablet")(`
      padding: ${spacing.eight} 0 ${spacing.three} 0;
    `)}
  `}
`;

const Wrapper = styled.div`
  ${({ theme: { screens, spacing } }) => `
    max-width: ${screens.maxDesktop}px;
    padding: 0 ${spacing.three};
  `}
  ${lessThan("tablet")(`
    display: block;
  `)}
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
`;

const LogoIcon = styled.img`
  ${lessThan("smallDesktop")(`
    display: none;
  `)}
  width: 100px;
  height: fit-content;
`;

const FooterItem = styled.div`
  ${lessThan("tablet")(`
    width: 100%;
    margin-bottom: 40px;
  `)}
  width: 250px;
`;

const FooterSubItem = styled.div`
  display: flex;
`;

const FooterSubItemLink = styled.div`
  ${({ theme: { colors } }) => `
    :hover i {
      color: ${colors.black};
    }
  `}
  width: fit-content;
  display: flex;
`;

const FooterIcon = styled.i`
  ${({ theme: { colors, spacing } }) => `
    color: ${colors.grey};
    padding-top: ${spacing.zero};
    margin-right: ${spacing.two};
  `}
`;

const TextLink = styled(Text)`
  ${({ theme: { colors, fontWeight } }) => `
    :hover {
      color: ${colors.black};
      font-weight: ${fontWeight.bold};
    }
  `}
  cursor: pointer;
`;

const Footer: React.FC = () => {
  const innerWidth = useInnerWidth();

  const isTabletDisplay = innerWidth <= screens.tablet;
  const isMobileDisplay = innerWidth <= screens.mobile;

  const SocialItems = [
    {
      label: "Facebook",
      icon: "fab fa-facebook-square fa-lg",
      slot: "https://www.facebook.com/pages/category/Youth-Organization/Kamunity-103078837779256/",
    },
    {
      label: "Twitter",
      icon: "fab fa-twitter-square fa-lg",
      slot: "https://twitter.com/kamunity",
    },
    {
      label: "Linkedin",
      icon: "fab fa-linkedin fa-lg",
      slot: "https://www.linkedin.com/company/assokamunity/videos/?viewAsMember=true",
    },
    {
      label: "Instagram",
      icon: "fab fa-instagram-square fa-lg",
      slot: "https://www.instagram.com/kamunity_/?igshid=139lb2h9i9ei6=fr",
    },
  ];

  return (
    <Container>
      <Wrapper>
        <LogoIcon src={Logo} alt="logo" />
        <FooterItem>
          <Text
            fontSize="display1"
            fontWeight="medium"
            color="green"
            style={{ marginBottom: spacing.three }}
          >
            Kamunity
          </Text>
          <Text
            fontSize={isMobileDisplay ? "medium" : "large"}
            fontWeight="regular"
            color="grey"
            lineHeight="22px"
          >
            Kamunity est une association panafricaine ayant pour but d'unir la
            jeunesse africaine dans l'action et la solidarité.
          </Text>
        </FooterItem>
        <FooterItem>
          <Text
            fontSize="display5"
            fontWeight="medium"
            color="green"
            style={{ paddingTop: spacing.one, marginBottom: spacing.three }}
          >
            Coordonnées
          </Text>
          <FooterSubItem style={{ marginBottom: spacing.two }}>
            <FooterIcon className="fas fa-map-marker-alt fa-lg" />
            <Text
              fontSize={isMobileDisplay ? "medium" : "large"}
              fontWeight="regular"
              color="grey"
              lineHeight="22px"
            >
              31 rue de l'aven, Cergy 95800, France
            </Text>
          </FooterSubItem>
          <FooterSubItem style={{ marginBottom: spacing.two }}>
            <FooterIcon className="fas fa-phone-alt fa-lg" />
            <div>
              <Text
                fontSize={isMobileDisplay ? "medium" : "large"}
                fontWeight="regular"
                color="grey"
                lineHeight="22px"
              >
                +33 7 58 62 05 15
              </Text>
              <Text
                fontSize={isMobileDisplay ? "medium" : "large"}
                fontWeight="regular"
                color="grey"
                lineHeight="22px"
              >
                +33 6 52 58 39 87
              </Text>
            </div>
          </FooterSubItem>
          <FooterSubItem>
            <FooterIcon className="fas fa-envelope fa-lg" />
            <Text
              fontSize={isMobileDisplay ? "medium" : "large"}
              fontWeight="regular"
              color="grey"
              lineHeight="22px"
            >
              kamunity.contact@gmail.com
            </Text>
          </FooterSubItem>
        </FooterItem>
        <FooterItem>
          <Text
            fontSize="display5"
            fontWeight="medium"
            color="green"
            style={{ paddingTop: spacing.one, marginBottom: spacing.three }}
          >
            Réseaux sociaux
          </Text>
          {SocialItems.map((item, index) => {
            return (
              <FooterSubItemLink
                key={index}
                style={{
                  marginBottom:
                    index < SocialItems.length - 1 ? spacing.two : 0,
                }}
                onClick={() => window.open(item.slot, "_blank")}
              >
                <FooterIcon className={item.icon} />
                <TextLink
                  fontSize={isMobileDisplay ? "medium" : "large"}
                  fontWeight="regular"
                  color="grey"
                  lineHeight="22px"
                >
                  {item.label}
                </TextLink>
              </FooterSubItemLink>
            );
          })}
        </FooterItem>
      </Wrapper>
    </Container>
  );
};

export default Footer;
