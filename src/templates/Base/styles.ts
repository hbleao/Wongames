import styled, { css } from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: space-between;
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    flex: 1 0 auto;
  `}
`;

export const SectionFooter = styled.section`
  ${({ theme }) => css`
    margin-top: -6rem;
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
