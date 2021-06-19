import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { theme } from "core/Theme";
import { useInnerWidth } from "utils";

import LogoKm from "assets/logo-kamunity.png";
import NavbarItem from "./NavbarItem";

const { screens, spacing } = theme;

const Container = styled.div<{ isOpen: boolean }>`
  ${({ theme: { colors }, isOpen }) => `
    background: ${colors.white};
    height: ${isOpen ? "290px" : "66px"};
  `}
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 5;
  transition: height 0.5s;
  overflow: hidden;
`;

const Wrapper = styled.div`
  ${({ theme: { screens, spacing } }) => `
    max-width: ${screens.maxDesktop}px;
    padding: ${spacing.one} ${spacing.three};
  `}
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  height: 50px;
  cursor: pointer;
`;

const RightSide = styled.div`
  margin-left: auto;
  display: flex;
`;

const MenuIcon = styled.i`
  ${({ theme: { colors, spacing, borderRadius } }) => `
    color: ${colors.black};
    border: 2px solid ${colors.black};
    padding: ${spacing.one};
    border-radius: ${borderRadius.extraSmall};
  `}
`;

const MobileMenu = styled.div`
  ${({ theme: { spacing } }) => `
    margin: ${spacing.one} 0px;
  `}
`;

const Navbar: React.FC = () => {
  const history = useHistory();
  const innerWidth = useInnerWidth();

  const [active, setActive] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const url = window.location.pathname;

  const Items = [
    {
      label: "Kamunity",
      slot: "/",
    },
    {
      label: "Actualités",
      slot: "/actualites",
    },
    {
      label: "Blog",
      slot: "/blog",
    },
    {
      label: "Projet",
      slot: "/projet",
    },
    {
      label: "Contact & dons",
      slot: "/contact-et-dons",
    },
  ];

  useEffect(() => {
    if (url === "/") {
      setActive(0);
    } else if (url === "/actualites") {
      setActive(1);
    } else if (url === "/blog") {
      setActive(2);
    } else if (url === "/projet") {
      setActive(3);
    } else if (url === "/contact-et-dons") {
      setActive(4);
    }
  }, [url]);

  return (
    <Container isOpen={isOpen}>
      <Wrapper>
        <Logo
          src={LogoKm}
          alt="logo"
          onClick={() => {
            history.push("/");
            setActive(0);
          }}
        />
        <RightSide>
          {innerWidth > screens.mobile &&
            Items.map((item, index) => {
              return (
                <NavbarItem
                  key={index}
                  isActive={index === active && url === item.slot}
                  onClick={() => {
                    history.push(item.slot);
                    setActive(index);
                  }}
                >
                  {item.label}
                </NavbarItem>
              );
            })}
          {innerWidth <= screens.mobile && (
            <MenuIcon
              className="fas fa-bars"
              onClick={() => setIsOpen((isOpen) => !isOpen)}
            />
          )}
        </RightSide>
      </Wrapper>
      {innerWidth <= screens.mobile && (
        <MobileMenu>
          {Items.map((item, index) => {
            return (
              <NavbarItem
                key={`mobile-${index}`}
                isActive={index === active && url === item.slot}
                onClick={() => {
                  history.push(item.slot);
                  setActive(index);
                }}
                style={{
                  marginBottom: spacing.four,
                }}
              >
                {item.label}
              </NavbarItem>
            );
          })}
        </MobileMenu>
      )}
    </Container>
  );
};

export default Navbar;
