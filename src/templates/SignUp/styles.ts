import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Wrapper as LogoWrapper } from 'components/Logo/styles';
import { Wrapper as HeadingWrapper } from 'components/Heading/styles';
import { Wrapper as ButtonWrapper } from 'components/Button/styles';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 100vh;

  ${media.greaterThan('medium')`
    grid-template-columns: 1fr 1fr;
  `}
`;

export const BannerBlock = styled.div`
  ${({ theme }) => css`
    position: relative;
    background-image: url('/img/auth-bg.jpg');
    background-size: cover;
    background-position: center center;
    padding: ${theme.spacings.xxlarge} ${theme.spacings.xxlarge}
      ${theme.spacings.large};

    ${media.lessThan('medium')`
        display: none;
    `}

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${theme.colors.black};
      opacity: 0.5;
    }
  `}
`;

export const BannerContent = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr;
    z-index: ${theme.layers.base};
    color: ${theme.colors.white};
  `}
`;

export const Subtitle = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.light};
    margin-top: ${theme.spacings.xsmall};

    strong {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Footer = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    align-self: flex-end;
    text-align: center;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.xsmall};
    display: grid;
    align-items: center;
    justify-content: center;
  `}
`;

export const ContentWrapper = styled.div`
  ${({ theme }) => css`
    width: 30rem;

    ${media.greaterThan('medium')`
      width: 36rem;
    `}

    ${LogoWrapper} {
      margin: 0 auto ${theme.spacings.xlarge};
    }

    ${HeadingWrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${ButtonWrapper} {
      margin: ${theme.spacings.medium} auto ${theme.spacings.xsmall};
    }
  `}
`;

export const ForgotPassword = styled.a`
  ${({ theme }) => css`
    display: block;
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-decoration: none;
    text-align: right;
  `}
`;
