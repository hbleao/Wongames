import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { WrapperProps } from './types';

export const Grid = styled.div<WrapperProps>`
  ${({
    gapSmall,
    gapDefault,
    gapMedium,
    marginSmall,
    marginDefault,
    marginMedium,
    paddingDefault,
    paddingSmall,
    paddingMedium
  }) => css`
    display: grid;
    grid-template-columns: 1rem repeat(6, 1fr) 1rem;
    gap: ${gapSmall ? gapSmall : '1rem 1rem'};
    margin: ${marginSmall ? marginSmall : 0};
    padding: ${paddingSmall ? paddingSmall : 0};

    ${media.greaterThan('small')`
      grid-template-columns: 2rem repeat(6, 1fr) 2rem;
      gap: ${gapMedium ? gapMedium : '1rem 1rem'};
      margin: ${marginMedium ? marginMedium : 0};
      padding: ${paddingMedium ? paddingMedium : 0};
    `}

    ${media.greaterThan('large')`
      grid-template-columns: 1fr repeat(12, minmax(auto, 4.3rem)) 1fr;
      grid-template-rows: max-content;
      gap: ${gapDefault ? gapDefault : '2rem 2rem'};
      margin: ${marginDefault ? marginDefault : 0};
      padding: ${paddingDefault ? paddingDefault : 0};
    `}
  `}
`;
