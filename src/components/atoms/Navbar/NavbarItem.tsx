import React, { useState } from "react";
import styled from "styled-components";

import Text from "components/atoms/Text";

export interface NavbarItemProps {
  isActive?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
}

const Item = styled.div`
  ${({ theme: { spacing } }) => `
    margin: 0 ${spacing.three};
  `}
  position: relative;
  width: max-content;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const NavbarItem: React.FC<NavbarItemProps> = ({
  children,
  isActive = false,
  style,
  onClick,
}) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <Item
      style={style}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
      onClick={onClick}
    >
      <Text
        fontSize="medium"
        fontWeight="semiBold"
        color={isHover ? "green" : isActive ? "green" : "black"}
      >
        {children}
      </Text>
    </Item>
  );
};

export default NavbarItem;
