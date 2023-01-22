import styled, { css } from 'styled-components';

import { LabelProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 50%;
    border: 0.2rem solid ${theme.colors.darkGray};
    background-color: transparent;
    transition: background ${theme.transition.fast};
    outline: none;
    cursor: pointer;
    appearance: none;
    display: flex;
    align-items: center;
    justify-content: center;

    &::before {
      content: '';
      width: 0.8rem;
      height: 0.8rem;
      border-radius: 50%;
      position: absolute;
      opacity: 0;
      transition: opacity ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};

      &:before {
        opacity: 1;
        background-color: ${theme.colors.primary};
      }
    }
  `}
`;

export const Label = styled.label<LabelProps>`
  ${({ theme, labelColor }) => css`
    cursor: pointer;
    line-height: 1;
    font-size: 1.6rem;
    padding-left: ${theme.spacings.xxsmall};
    color: ${theme.colors[labelColor!]};
  `}
`;
