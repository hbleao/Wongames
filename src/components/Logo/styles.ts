import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { LogoProps } from './types';

const modifiers = {
  normal: () => css`
    width: 11rem;
    height: 3.3rem;
  `,
  large: () => css`
    width: 20rem;
    height: 5.9rem;
  `,
  hideOnMobile: () => css`
    ${media.lessThan('medium')`
      width: 5.8rem;
      height: 4.5rem;

      svg {
        height: 4.5rem;
        pointer-events: none;
      }

      .text {
        display: none;
      }
    `}
  `
};

export const Wrapper = styled.div<
  Pick<LogoProps, 'color' | 'size' | 'hideOnMobile'>
>`
  ${({ theme, color, size, hideOnMobile }) => css`
    svg {
      color: ${theme.colors[color!]};
    }

    ${!!size && modifiers[size]};
    ${!!hideOnMobile && modifiers.hideOnMobile}
  `}
`;
