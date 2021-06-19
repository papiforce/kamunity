import React, { useState } from "react";
import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan } from "utils/mediaQueries";
import { useInnerWidth } from "utils";

import ContactBanner from "assets/contact-banner.png";
import Text from "components/atoms/Text";
import InputText from "components/atoms/InputText";
import TextArea from "components/atoms/TextArea";

const { spacing, screens } = theme;

const Container = styled.div``;

const Wrapper = styled.div`
  ${lessThan("mobile")(`
    height: 248px;
  `)}
  width: 100%;
  background: url(${ContactBanner}) center 30%;
  background-size: cover;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ContentWrapper = styled.div`
  ${({ theme: { spacing, screens } }) => `
    max-width: ${screens.maxDesktop}px;
    margin: ${spacing.eight} auto;
    ${lessThan("tablet")(`
      padding: 0 ${spacing.three};
      justify-content: start;
    `)}
  `}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

const FormWrapper = styled.div`
  ${({ theme: { spacing } }) => `
    ${lessThan("desktop")(`
      margin-bottom: ${spacing.four};
    `)}
  `}
  width: 725px;
  box-sizing: border-box;
`;

const FormHead = styled.div`
  ${({ theme: { spacing } }) => `
    margin-bottom: ${spacing.three};
  `}
  ${lessThan("mobile")(`
    flex-direction: column;
  `)}
  display: flex;
  align-items: center;
  gap: 24px;
`;

const TextAreaStyled = styled(TextArea)`
  ${lessThan("tablet")(`
    width: calc(100% - 32px);
  `)}
`;

const CoordinateWrapper = styled.div`
  width: 100%;
  max-width: 380px;
`;

const ButtonLink = styled(Text)`
  ${({ theme: { spacing, colors, borderRadius } }) => `
    padding: ${spacing.two} ${spacing.three};
    background: ${colors.green};
    border-radius: ${borderRadius.small};
  `}
  width: fit-content;
  cursor: pointer;
`;

const ContactPage: React.FC = () => {
  const innerWidth = useInnerWidth();

  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const isTabletDisplay = innerWidth <= screens.tablet;
  const isMobileDisplay = innerWidth <= screens.mobile;

  return (
    <Container>
      <Wrapper>
        <Text
          fontSize={
            isMobileDisplay ? "big" : isTabletDisplay ? "display0" : "title2"
          }
          fontWeight="light"
          color="white"
          lineHeight={isMobileDisplay ? "30px" : "50px"}
          textAlign="center"
          style={{
            width: "935px",
            margin: isTabletDisplay ? `0px ${spacing.three}` : 0,
            background: "rgba(24, 18, 1, 0.7)",
          }}
        >
          Que ce soit pour un message de soutien, un partenariat ou un nous
          apporter conseils... N’hésitez pas à nous faire parvenir votre message
          via le formulaire ci-dessous ! Nous vous répondrons dans les plus
          brefs délais.
        </Text>
      </Wrapper>
      <ContentWrapper>
        <FormWrapper>
          <FormHead>
            <InputText
              required
              label="Votre nom"
              value={name}
              onChange={(value) => setName(value)}
            />
            <InputText
              required
              label="Votre numéro de téléphone"
              value={phone}
              onChange={(value) => setPhone(value)}
            />
            <InputText
              required
              label="Votre adresse email"
              value={email}
              onChange={(value) => setEmail(value)}
            />
          </FormHead>
          <TextAreaStyled
            label="Ecrivez-nous un message"
            value={message}
            onChange={(value) => setMessage(value)}
          />
          <ButtonLink
            fontSize="large"
            fontWeight="medium"
            color="white"
            style={{ marginTop: spacing.two }}
          >
            Envoyer
          </ButtonLink>
        </FormWrapper>
        <CoordinateWrapper>
          <Text
            fontSize="title5"
            fontWeight="medium"
            color="green"
            style={{ marginBottom: spacing.four }}
          >
            Faire un don
          </Text>
          <Text
            fontSize="large"
            fontWeight="medium"
            style={{ display: "flex", alignItems: "center", gap: 12 }}
          >
            Moyen de paiement accepté: <i className="fab fa-cc-paypal fa-2x" />
          </Text>
          <ButtonLink
            fontSize="large"
            fontWeight="medium"
            color="white"
            style={{ marginTop: spacing.four }}
            onClick={() =>
              window.open(
                "https://www.paypal.com/donate?token=w9hfZGXEvhQM24Hfy7UPj3HeoBONaUjsWXPGG6w3BR7zddwOtRckGv-C1GUXkO4ZJZQnLxK6iM0PGCXI",
                "__blank"
              )
            }
          >
            Don
          </ButtonLink>
        </CoordinateWrapper>
      </ContentWrapper>
    </Container>
  );
};

export default ContactPage;
