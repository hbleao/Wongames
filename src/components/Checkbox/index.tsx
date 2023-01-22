import React, { useState } from 'react';

import * as S from './styles';

import { CheckboxProps } from './types';

export const Checkbox = ({
  labelText,
  labelFor,
  isChecked = false,
  labelColor,
  value,
  onCheck,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(isChecked);

  function onChange() {
    const status = !checked;

    setChecked(status);
    !!onCheck && onCheck(status);
  }

  return (
    <S.Wrapper>
      <S.Input
        id={labelFor}
        type="checkbox"
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
