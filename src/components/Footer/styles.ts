import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Wrapper as HeadingStyles } from 'components/Heading/styles';

export const Wrapper = styled.footer`
  ${() => css`
    ${HeadingStyles} {
      text-transform: uppercase;
    }
  `}
`;

export const Content = styled.section`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: ${theme.grid.gutter};
    margin-top: ${theme.spacings.medium};
  `}

  ${media.greaterThan('medium')`
    grid-template-columns: repeat(4, 1fr);
  `}
`;

export const Column = styled.div`
  ${({ theme }) => css`
    a,
    span {
      display: block;
      color: ${theme.colors.gray};
      text-decoration: none;
      margin-bottom: ${theme.spacings.xxsmall};
      font-size: ${theme.font.sizes.small};
    }

    a:hover {
      text-decoration: underline;
    }
  `}
`;

export const CopyRight = styled.div`
  ${({ theme }) => css`
    color: ${theme.colors.gray};
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.medium};
    font-size: ${theme.font.sizes.small};
    text-align: center;
  `}
`;
