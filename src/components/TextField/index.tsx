import { ChangeEvent, useState } from 'react';
import * as S from './styles';

import { TextFieldProps } from './types';

export const TextField = ({
  labelText,
  labelFor,
  initialValue = '',
  icon,
  iconPosition = 'right',
  onInput,
  disabled,
  errorMessage,
  ...props
}: TextFieldProps) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setValue(newValue);

    !!onInput && onInput(newValue);
  };

  return (
    <S.Wrapper disabled={disabled} isError={!!errorMessage}>
      {!!labelText && <S.Label htmlFor={labelFor}>{labelText}</S.Label>}
      <S.InputWrapper>
        {!!icon && (
          <S.Icon iconPosition={iconPosition} data-testid="input-icon">
            {icon}
          </S.Icon>
        )}
        <S.Input
          type="text"
          onChange={onChange}
          value={value}
          disabled={disabled}
          {...props}
        />
      </S.InputWrapper>
      {!!errorMessage && <S.Error>{errorMessage}</S.Error>}
    </S.Wrapper>
  );
};
