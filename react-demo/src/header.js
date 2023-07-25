import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #f2f2f2;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.h1`
  font-size: 24px;
  color: #333;
`;

const Navigation = styled.nav`
  ul {
    list-style: none;
    display: flex;
    gap: 10px;
  }

  li {
    font-size: 16px;
    color: #666;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Mon Logo</Logo>
      <Navigation>
        <ul>
          <a  href="/ShowArticles"  style={{ textDecoration: 'none' }}><li>Acceuil</li></a>
          <li>À propos</li>
          <li>Services</li>
          
          <a  href="/"  style={{ textDecoration: 'none' }}><li>Log Out </li></a>


        </ul>
      </Navigation>
    </HeaderContainer>
  );
}

export default Header;
