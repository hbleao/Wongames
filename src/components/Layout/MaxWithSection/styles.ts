import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { WrapperProps } from './types';

export const MaxWithSection = styled.div<WrapperProps>`
  ${({
    gapDefault,
    gapMedium,
    gapSmall,
    marginDefault,
    marginMedium,
    marginSmall,
    paddingDefault,
    paddingMedium,
    paddingSmall
  }) => css`
    display: grid;
    grid-column: 2 / span 12;
    grid-template-columns: repeat(12, minmax(auto, 4.2rem));
    grid-template-rows: max-content;
    gap: ${gapDefault ? gapDefault : '2rem 2rem'};
    margin: ${marginDefault ? marginDefault : 0};
    padding: ${paddingDefault ? paddingDefault : 0};

    ${media.lessThan('large')`
      grid-column: 2 / span 6;
      grid-template-columns: repeat(6, 1fr);
      gap: ${gapMedium ? gapMedium : '1rem 1rem'};
      margin: ${marginMedium ? marginMedium : 0};
      padding: ${paddingMedium ? paddingMedium : 0};
    `}

    ${media.lessThan('medium')`
      gap: ${gapSmall ? gapSmall : '1rem 1rem'};
      margin: ${marginSmall ? marginSmall : 0};
      padding: ${paddingSmall ? paddingSmall : 0};
    `}
  `}
`;
