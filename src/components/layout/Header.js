import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components';

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center
`;

const TitleHeader = styled.header`
  text-align: left;
  font-family: 'Monteserrat', sans-serif;
  padding: 10px;
  font-size: 48px;
  font-weight 800;
`;

const LinkContainer = styled.div`
  display: flex;
  justify-content: start;
`;

const HeaderLink = styled(Link)`
  font-family: 'Monteserrat', sans-serif;
  font-size: 18px;
  font-weight: 300;
  padding: 5px;
  text-decoration: none;
  :hover {
    background: linear-gradient(to right,#ff8a00,#da1b60);
    -webkit-text-fill-color: transparent;
    -webkit-background-clip: text;
  }
`;

export default function Header() {
  return (
    <NavBar>
      <TitleHeader>Movie Browser</TitleHeader>
      <LinkContainer>
        <HeaderLink to="/about">About</HeaderLink>
      </LinkContainer>
    </NavBar>
  )
}