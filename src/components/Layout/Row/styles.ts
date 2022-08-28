import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { WrapperProps } from './types';

export const Row = styled.div<WrapperProps>`
  ${({
    startDefault,
    endDefault,
    startMedium,
    endMedium,
    startSmall,
    endSmall
  }) => css`
    grid-column-start: ${startSmall ? startSmall : '1'};
    grid-column-end: ${endSmall ? endSmall : '6'};

    ${media.greaterThan('small')`
      grid-column-start: ${startMedium ? startMedium : '1'};
      grid-column-end: ${endMedium ? endMedium : '6'};
    `}

    ${media.greaterThan('large')`
      grid-column-start: ${startDefault ? startDefault : '1'};
      grid-column-end: ${endDefault ? endDefault : '12'};
    `}
  `}
`;
