import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';

export const Nav = styled.nav`
  background: ${({ dropdownOpen, scrolled }) =>
    scrolled || (dropdownOpen && (dropdownOpen.bonus || dropdownOpen.methodes))
      ? "#000"
      : "transparent"};
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 calc((100vw - 1300px) / 2);
  z-index: 50 !important;
  transition: background-color 0.5s ease;
`;



export const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &.active {
    color: #15cdfc;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;

  @media screen and (max-width: 990px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 120%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: -24px;
  flex-wrap: wrap;

  @media screen and (max-width: 990px) {
    background-color: #1b1b19;
    position: absolute;
    top: 80px;
    left: ${({ mobileMenuOpen, dropdownOpen }) =>
    mobileMenuOpen
      ? dropdownOpen && (dropdownOpen.bonus || dropdownOpen.methodes)
        ? "-100%"
        : 0
      : "-100%"};
    transition: all 0.5s ease;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    flex-wrap: nowrap;
  }
`;


export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 990px) {
    display: none;
  }
`;


export const NavBtnLink = styled(Link)`
border-radius: 4px;
background: linear-gradient(180deg, #F9BF12 0%, #E2FF31 100%);
box-shadow: 0px 0px 3.25409px 0.464871px rgba(255, 255, 255, 0.25);
padding: 6px 22px;
color: black;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;
font-weight: 700;

/* Second Nav */
margin-left: 24px;

&:hover {
transition: all 0.2s ease-in-out;
background: #fff;
color: #010606;
}

/* Third Nav /
/ margin-left: 24px;
background: #fff;
color: #010606;
border: none;
padding: 8px 16px;
border-radius: 4px;
cursor: pointer;
transition: all 0.2s ease-in-out;

&:hover {
background: #010606;
color: #fff;
transition: all 0.2s ease-in-out;
} */
`;

export const BackButton = styled.button`
  display: none;

  @media screen and (max-width: 990px) {
    display: block;
    margin: 1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: none;
    background-color: #256ce1;
    color: #fff;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #15cdfc;
      color: #010606;
      transition: all 0.2s ease-in-out;
    }
  }
`;