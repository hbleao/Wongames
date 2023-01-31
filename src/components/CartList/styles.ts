import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};
    padding: 2rem;
    display: flex;
    justify-content: space-between;
  `}
`;

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    font-weight: 500;
  `}
`;
