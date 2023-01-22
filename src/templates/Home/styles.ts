import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import * as HeadingStyles from 'components/Heading/styles';
import * as HighlighStyles from 'components/Highlight/styles';
import * as GameCardStyles from 'components/GameCard/styles';

const Sections = styled.section`
  ${({ theme }) => css`
    ${HeadingStyles.Wrapper},
    ${HighlighStyles.Wrapper},
    ${GameCardStyles.Wrapper} {
      margin-bottom: ${theme.spacings.medium};
    }

    ${HighlighStyles.Wrapper} {
      ${media.lessThan('medium')`
        margin-right: calc(-${theme.grid.gutter} / 2);
        margin-left: calc(-${theme.grid.gutter} / 2);
      `}
    }

    ${GameCardStyles.Wrapper} {
      ${media.lessThan('huge')`
        margin-right: calc(-${theme.grid.gutter} / 2);
      `}
    }

    margin-bottom: calc(${theme.grid.gutter} * 2);
  `}
`;

export const Container = styled.main`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
  `}
`;

export const SectionBanner = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.large} calc(-${theme.grid.gutter} / 2);

    ${media.greaterThan('medium')`
      margin: ${theme.spacings.large} 0;
      position: relative;
      z-index: ${theme.layers.base};
    `}
  `}
`;

export const SectionNews = styled(Sections)`
  ${({ theme }) => css`
    margin-bottom: calc(${theme.spacings.xxlarge} * 2);

    ${media.greaterThan('large')`
      margin-top: -13rem;
    `}

    ${media.greaterThan('medium')`
      background-color: ${theme.colors.white};
      padding: 14rem 0 12rem;
      margin-bottom: 0;
      clip-path: polygon(0 0, 100% 15%, 100% 100%, 0 85%);
    `}
  `}
`;
