/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import * as S from './styles';
import { ButtonProps } from './types';

export const Button = forwardRef(
  (
    {
      children,
      size = 'medium',
      fullWidth = false,
      disabled,
      icon,
      ...props
    }: ButtonProps,
    ref
  ) => {
    return (
      <S.Wrapper
        size={size}
        fullWidth={fullWidth}
        hasIcon={!!icon}
        disabled={disabled}
        ref={ref}
        {...props}
      >
        {icon}
        {!!children && <span>{children}</span>}
      </S.Wrapper>
    );
  }
);
