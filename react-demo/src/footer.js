import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: yellowgreen;
  padding: 20px;
  color: #fff;
  text-align: center;
  
`;

const Copyright = styled.p`
  font-size: 14px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Copyright>&copy; 2023 Mon Application. Tous droits réservés.</Copyright>
    </FooterContainer>
  );
}

export default Footer;
