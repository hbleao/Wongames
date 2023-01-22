import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section``;

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
    margin-bottom: ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xxlarge};
    padding-bottom: ${theme.spacings.xxsmall};
    background-color: ${theme.colors.white};
    clip-path: polygon(0 5%, 100% 0%, 100% 100%, 0 100%);

    ${media.greaterThan('medium')`
      padding-top: calc(${theme.spacings.large} * 2);
      clip-path: polygon(0 15%, 100% 0%, 100% 100%, 0% 100%);
    `}
  `}
`;
