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
    grid-column-start: ${startDefault ? startDefault : '1'};
    grid-column-end: ${endDefault ? endDefault : '12'};

    ${media.lessThan('large')`
      grid-column-start: ${startMedium ? startMedium : '1'};
      grid-column-end: ${endMedium ? endMedium : '6'};
    `}

    ${media.lessThan('small')`
      grid-column-start: ${startSmall ? startSmall : '1'};
      grid-column-end: ${endSmall ? endSmall : '6'};
    `}
  `}
`;
