import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { MediaMatchProps, breakpoint } from './types';

const modifiers = {
  lessThan: (size: breakpoint) => css`
    ${media.lessThan(size)`
      display: block;
    `}
  `,
  greaterThan: (size: breakpoint) => css`
    ${media.greaterThan(size)`
      display: block;
    `}
  `
};

export const Wrapper = styled.div<MediaMatchProps>`
  ${({ lessThan, greaterThan }) => css`
    display: none;

    ${!!lessThan && modifiers.lessThan(lessThan)}
    ${!!greaterThan && modifiers.greaterThan(greaterThan)}
  `}
`;
