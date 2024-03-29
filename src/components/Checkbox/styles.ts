import styled, { css } from 'styled-components';

import { LabelProps } from './types';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  ${({ theme }) => css`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    appearance: none;
    width: 1.8rem;
    height: 1.8rem;
    border-radius: 0.2rem;
    border: 0.2rem solid ${theme.colors.darkGray};
    position: relative;
    transition: background border ${theme.transition.fast};
    outline: none;

    &::before {
      content: '';
      width: 0.6rem;
      height: 0.9rem;
      border: 0.2rem solid ${theme.colors.white};
      border-top: 0;
      border-left: 0;
      transform: rotate(45deg);
      position: absolute;
      top: 0.1rem;
      opacity: 0;
      transition: ${theme.transition.fast};
    }

    &:focus {
      box-shadow: 0 0 0.5rem ${theme.colors.primary};
    }

    &:checked {
      border-color: ${theme.colors.primary};
      background-color: ${theme.colors.primary};

      &:before {
        opacity: 1;
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
