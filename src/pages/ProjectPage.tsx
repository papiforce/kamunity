import React from "react";
import styled from "styled-components";

import { theme } from "core/Theme";
import { lessThan } from "utils/mediaQueries";
import { useInnerWidth } from "utils";

import ProjectBanner from "assets/project-banner.jpg";
import Text from "components/atoms/Text";
import EmptyClass from "assets/empty_class.jpg";
import FullClass from "assets/full_class.jpg";
import AfricaMap from "assets/africa_map.png";

const { borderRadius, colors, screens, spacing } = theme;

const Container = styled.div``;

const Wrapper = styled.div`
  ${lessThan("mobile")(`
    height: 248px;
  `)}
  width: 100%;
  background: url(${ProjectBanner}) center 30%;
  background-size: cover;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const WhiteWrapper = styled.div`
  ${({ theme: { colors, spacing } }) => `
    background: ${colors.white};
    padding: ${spacing.six} ${spacing.three};
  `}
  width: 100%;
`;

const CenterWrapper = styled.div`
  ${({ theme: { screens, spacing } }) => `
    max-width: ${screens.maxDesktop}px;
    margin: ${spacing.six} auto 0;
  `}
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

const BlueWrapper = styled.div`
  ${({ theme: { colors, spacing } }) => `
    background: ${colors.blue};
    padding: ${spacing.six} ${spacing.three};
  `}
  width: 100%;
`;

const FakeLink = styled.span`
  ${({ theme: { colors } }) => `
    color: ${colors.black};
  `}
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;

const ProjectPage: React.FC = () => {
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
          lineHeight={isTabletDisplay ? "40px" : "70px"}
          textAlign="center"
          style={{
            width: "935px",
            margin: isTabletDisplay ? `0px ${spacing.three}` : 0,
            background: "rgba(24, 18, 1, 0.7)",
          }}
        >
          Les cours que tu prends en notes peuvent avoir un impact à l'autre
          bout du monde
        </Text>
      </Wrapper>
      <WhiteWrapper>
        <Text
          fontSize="title5"
          fontWeight="regular"
          color="green"
          textAlign="center"
          style={{
            maxWidth: screens.maxDesktop,
            margin: `0 auto ${spacing.three}`,
          }}
        >
          Moins de 40% des étudiants de pays d’Afrique francophone parviennent à
          réussir à leurs études supérieurs
        </Text>
        <Text
          fontSize="display2"
          fontWeight="regular"
          color="green"
          textAlign="center"
        >
          2 raisons majeurs expliquent cela:
        </Text>
        <CenterWrapper>
          <div>
            <Text
              fontSize="display0"
              fontWeight="medium"
              color="green"
              style={{ maxWidth: 550, marginBottom: spacing.four }}
            >
              1. Les grèves incessantes
            </Text>
            <Text
              fontSize={isMobileDisplay ? "medium" : "large"}
              fontWeight="medium"
              color="grey"
              lineHeight="30px"
              style={{ maxWidth: 550, marginBottom: spacing.two }}
            >
              Les grèves de professeurs sont un fléau scolaire qui touchent
              beaucoup de pays subsahariens. Souvent dûes aux mauvaises
              rémunérations et conditions de travail de ces derniers,{" "}
              <FakeLink
                onClick={() =>
                  window.open(
                    "https://www.rfi.fr/fr/afrique/20190115-guinee-fin-trois-mois-greve-le-secteur-education",
                    "_blank"
                  )
                }
              >
                elles conduisent à des mois entiers de suspension des cours
              </FakeLink>
              .
            </Text>
            <Text
              fontSize={isMobileDisplay ? "medium" : "large"}
              fontWeight="medium"
              color="grey"
              lineHeight="30px"
              style={{
                maxWidth: 550,
                marginBottom: isTabletDisplay ? spacing.four : 0,
              }}
            >
              Du fait du manque d'infrastructures tels que des bibliothèques, le
              manque de documentation en dehors de ceux disponibles à
              l'université entraine l'échec scolaire de nombre d'étudiants.
            </Text>
          </div>
          <img
            src={EmptyClass}
            alt="empty_class"
            style={{
              maxWidth: 550,
              width: "100%",
              borderRadius: borderRadius.small,
            }}
          />
        </CenterWrapper>
      </WhiteWrapper>
      <CenterWrapper style={{ marginBottom: spacing.six }}>
        {!isTabletDisplay && (
          <img
            src={FullClass}
            alt="full_class"
            style={{
              maxWidth: 550,
              width: "calc(100% - 48px)",
              borderRadius: borderRadius.small,
            }}
          />
        )}
        <div>
          <Text
            fontSize="display0"
            fontWeight="medium"
            color="green"
            style={{
              maxWidth: 550,
              marginBottom: spacing.four,
              padding: isMobileDisplay ? `0 ${spacing.three}` : 0,
            }}
          >
            2. Le sureffectif des établissements
          </Text>
          <Text
            fontSize={isMobileDisplay ? "medium" : "large"}
            fontWeight="medium"
            color="grey"
            lineHeight="30px"
            style={{
              maxWidth: 550,
              marginBottom: spacing.two,
              padding: isMobileDisplay ? `0 ${spacing.three}` : 0,
            }}
          >
            En Afrique subsaharienne francophone, on constate 1 enseignant pour
            166 élèves alors que l'UNESCO recommande 1 enseignant pour 45
            élèves. Beaucoup d'établissements n'ont pas les capacités
            d'accueuillir l'esnemble de leurs élèves. A l'Université de ... ,{" "}
            <FakeLink
              onClick={() =>
                window.open(
                  "https://www.letudiant.fr/etudes/international/etudier-en-afrique-les-obstacles-a-surmonter.html",
                  "_blank"
                )
              }
            >
              uniquement 40 places sont disponibles pour les dizaines de
              milliers d'un UFR
            </FakeLink>
            .
          </Text>
          <Text
            fontSize={isMobileDisplay ? "medium" : "large"}
            fontWeight="medium"
            color="grey"
            lineHeight="30px"
            style={{
              maxWidth: 550,
              margin: isTabletDisplay ? `${spacing.four} 0` : 0,
              padding: isMobileDisplay ? `0 ${spacing.three}` : 0,
            }}
          >
            Ce sureffectif conduit certains étudiants à effectuer des années
            blanches pour commencer un cursus l'an suivant.
          </Text>
        </div>
        {isTabletDisplay && (
          <img
            src={FullClass}
            alt="full_class"
            style={{
              maxWidth: 550,
              width: "calc(100% - 48px)",
              borderRadius: borderRadius.small,
            }}
          />
        )}
      </CenterWrapper>
      <WhiteWrapper>
        <Text
          fontSize="title5"
          fontWeight="regular"
          color="green"
          textAlign="center"
          style={{
            maxWidth: screens.maxDesktop,
            margin: `0 auto ${spacing.three}`,
          }}
        >
          Les cours que tu prends en note peuvent avoir un bel impact à l’autre
          bout du monde.
        </Text>
        <CenterWrapper>
          <img
            src={AfricaMap}
            alt="africa_map"
            style={{
              maxWidth: 550,
              width: "calc(100% - 48px)",
              borderRadius: borderRadius.small,
            }}
          />
          <Text
            fontSize={isMobileDisplay ? "medium" : "large"}
            fontWeight="medium"
            color="grey"
            lineHeight="30px"
            style={{
              maxWidth: 550,
              margin: isTabletDisplay ? `${spacing.four} 0` : 0,
              padding: isMobileDisplay ? `0 ${spacing.three}` : 0,
            }}
          >
            Aujourd’hui, 65 millions d’étudants en Afrique francophone possèdent
            un smartphone qui pourra leur permettre d’accéder à la plateforme
          </Text>
        </CenterWrapper>
      </WhiteWrapper>
      <Text
        fontSize="display2"
        fontWeight="regular"
        color="green"
        textAlign="center"
        style={{
          maxWidth: screens.maxDesktop,
          margin: "0 auto",
          padding: isTabletDisplay
            ? `${spacing.six} ${spacing.three}`
            : `${spacing.six} 0`,
        }}
      >
        Nous travaillons actuellement sur la conception de la plateforme de
        partage de cours. Si tu le souhaites, tu peux dés maintenant nous
        partager tes cours que nous publierons sur la plateforme à son lancement
        !
      </Text>
      <BlueWrapper>
        <Text
          fontSize="display2"
          fontWeight="regular"
          color="white"
          textAlign="center"
        >
          Partage-nous ton cours sur Drive
        </Text>
        <Text
          fontSize="display5"
          fontWeight="regular"
          color="white"
          textAlign="center"
          style={{
            margin: `${spacing.two} 0 ${spacing.four}`,
          }}
        >
          En attendant que la plateforme soit publiée, nous collectons tes cours
          sur Drive
        </Text>
        <Text
          fontSize="display4"
          fontWeight="medium"
          color="blue"
          textAlign="center"
          onClick={() =>
            window.open(
              "https://drive.google.com/drive/u/0/folders/1a3dXJKqOYXrFmCzJd8ttYEVoNlxSFpUx",
              "_blank"
            )
          }
          style={{
            maxWidth: "max-content",
            background: colors.white,
            padding: spacing.two,
            margin: "0 auto",
            borderRadius: borderRadius.small,
            cursor: "pointer",
          }}
        >
          Partager mon cours
        </Text>
      </BlueWrapper>
    </Container>
  );
};

export default ProjectPage;
