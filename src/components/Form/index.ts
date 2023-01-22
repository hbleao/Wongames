import styled, { css } from 'styled-components';
import { darken } from 'polished';

import { Wrapper as TextFieldWrapper } from 'components/TextField/styles';

export const Form = styled.form`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    ${TextFieldWrapper} {
      margin-bottom: ${theme.spacings.xxsmall};
    }
  `}
`;

export const FormLink = styled.p`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: color, border, ${theme.transition.fast};

      &:hover {
        color: ${darken(0.1, theme.colors.secondary)};
        border-bottom: 0.1rem solid ${darken(0.1, theme.colors.secondary)};
      }
    }
  `}
`;
