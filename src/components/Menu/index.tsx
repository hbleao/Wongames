import { useState } from 'react';
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart';
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search';
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close';
import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2';

import * as S from './styles';

import { Logo, Button, MediaMatch } from 'components';

import { MenuProps } from './types';

export const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.WrapperIcon onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </S.WrapperIcon>
      </MediaMatch>

      <S.LogoWrapper>
        <Logo hideOnMobile />
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <S.MenuLink>Home</S.MenuLink>
          <S.MenuLink>Explore</S.MenuLink>
        </S.MenuNav>
      </MediaMatch>

      <S.MenuGroup>
        <S.WrapperIcon>
          <SearchIcon aria-label="search" />
        </S.WrapperIcon>

        <S.WrapperIcon>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </S.WrapperIcon>

        {!username && (
          <MediaMatch greaterThan="medium">
            <Button>Sign in</Button>
          </MediaMatch>
        )}
      </S.MenuGroup>

      <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <S.MenuNav>
          <S.MenuLink>Home</S.MenuLink>
          <S.MenuLink>Explore</S.MenuLink>

          {!!username && (
            <>
              <S.MenuLink>My Account</S.MenuLink>
              <S.MenuLink>Wishlist</S.MenuLink>
            </>
          )}
        </S.MenuNav>

        {!username && (
          <S.RegisterBox>
            <Button>Login now</Button>
            <span>or</span>
            <S.CreateAccount href="#" title="Sign Up">
              Sign Up
            </S.CreateAccount>
          </S.RegisterBox>
        )}
      </S.MenuFull>
    </S.Wrapper>
  );
};
