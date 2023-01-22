import styled, { css } from 'styled-components';
import media from 'styled-media-query';

import { Container } from 'components';

import * as HeadingStyles from 'components/Heading/styles';
import * as HighlighStyles from 'components/Highlight/styles';
import * as GameCardStyles from 'components/GameCard/styles';

export const Wrapper = styled(Container).attrs({
  as: 'section'
})`
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
