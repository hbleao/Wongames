import styled, { css } from 'styled-components';

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: ${theme.spacings.small};
    margin: ${theme.spacings.medium} 0;
  `}
`;
