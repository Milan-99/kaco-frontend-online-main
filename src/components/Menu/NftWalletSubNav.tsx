import React from 'react';
import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { ButtonMenu, ButtonMenuItem } from '@kaco/uikit';

const StyledNav = styled.nav`
  margin-bottom: 40px;
  display: flex;
  justify-content: center;

  > div {
    background-color: #122124;
  }
`;

const getActiveIndex = (pathname: string): number => {
  if (pathname.includes('/burn')) {
    return 1;
  }
  return 0;
};

const Nav = () => {
  const location = useLocation();
  const activeIndex = getActiveIndex(location.pathname);

  return (
    <StyledNav>
      <ButtonMenu py="6px" activeIndex={activeIndex} scale="sm" variant="subtle">
        <ButtonMenuItem
          style={activeIndex === 0 ? { color: '#1BD3D5', background: '#1F373B' } : { color: 'white' }}
          width="112px"
          height="44px"
          id="swap-nav-link"
          to="/nft/wallet/mint"
          as={Link}
        >
          NFT
        </ButtonMenuItem>
        <ButtonMenuItem
          style={activeIndex === 1 ? { color: '#1BD3D5', background: '#1F373B' } : { color: 'white' }}
          height="44px"
          width="112px"
          id="pool-nav-link"
          to="/nft/wallet/burn"
          as={Link}
        >
          KCOIN
        </ButtonMenuItem>
      </ButtonMenu>
    </StyledNav>
  );
};

export default Nav;
