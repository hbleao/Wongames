import React from 'react';

import * as S from './styles';

import { RadioProps } from './types';

export const Radio = ({
  labelText,
  labelFor,
  labelColor,
  value,
  onCheck,
  ...props
}: RadioProps) => {
  function onChange() {
    !!onCheck && onCheck(value);
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="radio"
        onChange={onChange}
        value={value}
        {...props}
      />
      {!!labelText && (
        <S.Label labelColor={labelColor} htmlFor={labelFor}>
          {labelText}
        </S.Label>
      )}
    </S.Wrapper>
  );
};
