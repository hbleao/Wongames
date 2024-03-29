import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Container } from 'components';

import { CoverProps } from './types';

export const Main = styled.main`
  ${({ theme }) => css`
    margin-top: 20rem;
    background-color: ${theme.colors.mainBg};

    ${media.greaterThan('medium')`
      margin-top: 45rem;
      padding-bottom: 4rem;
    `}
  `}
`;

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 39.5rem;
    background-image: url(${src});
    background-size: cover;
    background-position: top center;
    opacity: 0.4;

    ${media.greaterThan('medium')`
      height: 70rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`;

export const Section = styled(Container).attrs({
  as: 'section'
})`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`;

export const SectionGameInfo = styled(Section)``;

export const SectionGallery = styled(Section)`
  display: none;

  ${media.greaterThan('medium')`
    display: block;    
  `}
`;

export const SectionTextContent = styled(Section)``;

export const SectionGameDetails = styled(Section)``;

export const SectionShowCase = styled(Section)``;
