import styled, { css, DefaultTheme } from 'styled-components';
import { PriceProps } from './types';

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    background-color: ${theme.colors.white};
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    height: 14rem;
    width: 100%;
    background: #f6f7f8;
    background-image: linear-gradient(
      to right,
      #f6f7f8 0%,
      #ededed 20%,
      #f6f7f8 40%,
      #f6f7f8 100%
    );
    background-size: 80rem 14rem;
    animation: placeholderShimmer 1s linear infinite forwards;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    @keyframes placeholderShimmer {
      0% {
        background-position: -40rem 0;
      }
      100% {
        background-position: 40rem 0;
      }
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: ${theme.spacings.xsmall};
  `}
`;

export const Info = styled.div`
  max-width: calc(100% - 2.5rem);
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    line-height: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.black};
  `}
`;

export const Developer = styled.h4`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.gray};
  `}
`;

export const FavButton = styled.button`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
    position: absolute;
    right: 0;
    top: -0.5rem;
    cursor: pointer;
    background-color: transparent;
    border: none;

    svg {
      width: 2.5rem;
    }
  `}
`;

export const BuyButton = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: ${theme.spacings.small};
  `}
`;

const priceModifiers = {
  default: (theme: DefaultTheme) => css`
    color: ${theme.colors.white};
    background-color: ${theme.colors.secondary};
    padding: 0 ${theme.spacings.xxsmall};
    margin-right: calc(${theme.spacings.xxsmall} / 2);
    border-radius: ${theme.border.radius};
  `,
  promotional: (theme: DefaultTheme) => css`
    color: ${theme.colors.gray};
    text-decoration: line-through;
    margin-right: ${theme.spacings.xsmall};
  `
};

export const Price = styled.div<PriceProps>`
  ${({ theme, isPromotional }) => css`
    height: 3rem;
    font-weight: ${theme.font.bold};
    display: inline-flex;
    align-items: center;

    ${!isPromotional && priceModifiers.default(theme)}
    ${isPromotional && priceModifiers.promotional(theme)}
  `}
`;
