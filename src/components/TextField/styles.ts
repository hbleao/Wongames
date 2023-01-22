import styled, { css, DefaultTheme } from 'styled-components';
import { IconProps, WrapperProps } from './types';

const modifier = {
  left: () => css`
    order: 1;
  `,
  right: () => css`
    order: 0;
  `,
  disabled: (theme: DefaultTheme) => css`
    ${Label},
    ${Input}
    ${Icon} {
      cursor: not-allowed;
      color: ${theme.colors.gray};

      &::placeholder {
        color: currentColor;
      }
    }
  `,
  error: (theme: DefaultTheme) => css`
    ${InputWrapper} {
      border: 0.2rem solid ${theme.colors.red};
    }

    ${Label},
    ${Icon} {
      color: ${theme.colors.red};
    }
  `
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, disabled, isError }) => css`
    border-radius: 0.2rem;
    display: flex;
    flex-direction: column;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    ${!!disabled && modifier.disabled(theme)};
    ${isError && modifier.error(theme)};
  `}
`;

export const Label = styled.label`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    line-height: 2.2rem;
    cursor: pointer;
  `}
`;

export const InputWrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.lightGray};
    border-radius: 0.2rem;
    padding: ${theme.spacings.xxsmall} ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.lightGray};
    display: flex;
    gap: 0.8rem;

    &:focus-within {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }
  `}
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 100%;
    color: ${theme.colors.black};
    font-family: ${theme.font.family};
    font-size: ${theme.font.sizes.medium};
    padding: ${theme.spacings.xxsmall} 0;
    border: 0;
    background-color: transparent;
    outline: none;

    box-shadow: none;
  `}
`;

export const Icon = styled.div<IconProps>`
  ${({ theme, iconPosition }) => css`
    display: flex;
    width: 2.2rem;
    color: ${theme.colors.gray};

    ${!!iconPosition && modifier[iconPosition]()};

    & > svg {
      width: 100%;
    }
  `}
`;

export const Error = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.xsmall};
  `}
`;
