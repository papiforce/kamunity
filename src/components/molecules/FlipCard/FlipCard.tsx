import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Text from "components/atoms/Text";

export interface FlipCardProps {
  style?: React.CSSProperties;
  data: any;
}

const Container = styled.div`
  background-color: transparent;
  width: 315px;
  height: 427px;
  perspective: 1000px;
  cursor: pointer;

  :hover .inner {
    transform: rotateY(180deg);
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
`;

const CardFront = styled.div<{ img: string }>`
  ${({ theme: { borderRadius }, img }) => `
    border-radius: ${borderRadius.round};
    background: url(${img}) center center;
  `}
  background-size: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: black;
`;

const Title = styled(Text)`
  position: absolute;
  bottom: 16px;
  left: 16px;
  background: rgba(24, 18, 1, 0.7);
`;

const CardBack = styled.div`
  ${({ theme: { borderRadius, colors, spacing } }) => `
    border-radius: ${borderRadius.round};
    background: ${colors.white};
    padding: ${spacing.two};
  `}
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  color: white;
  transform: rotateY(180deg);
`;

const FlipCard: React.FC<FlipCardProps> = ({ style, data, ...props }) => {
  const history = useHistory();

  return (
    <Container style={style} {...props} onClick={() => history.push(data.slot)}>
      <Wrapper className="inner">
        <CardFront img={data.img}>
          <Title fontSize="big" fontWeight="bold" color="white">
            {data.title}
          </Title>
        </CardFront>
        <CardBack>
          <Text
            fontSize=""
            fontWeight=""
            textAlign="center"
            lineHeight="35px"
            style={{ fontStyle: "italic" }}
          >
            {data.description}
          </Text>
        </CardBack>
      </Wrapper>
    </Container>
  );
};

export default FlipCard;
