import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { TextField } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { TextFieldProps } from './types';
import { Email } from '@styled-icons/material-outlined';

const makeSut = ({
  labelText,
  labelFor,
  initialValue,
  icon,
  iconPosition,
  disabled,
  errorMessage,
  onInput,
  ...props
}: TextFieldProps) => {
  const sut = renderWithTheme(
    <TextField
      labelText={labelText}
      labelFor={labelFor}
      initialValue={initialValue}
      icon={icon}
      iconPosition={iconPosition}
      disabled={disabled}
      errorMessage={errorMessage}
      onInput={onInput}
      {...props}
    />
  );

  return {
    sut
  };
};

describe('Components/TextField', () => {
  it('should renders without label', () => {
    const { sut } = makeSut({});

    const label = document.querySelector('label');

    expect(label).not.toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
  });

  it('should renders with placeholder', () => {
    const placeholder = 'jhon.doe@gmai.com';
    makeSut({ placeholder });

    const input = screen.getByPlaceholderText(placeholder);

    expect(input).toBeInTheDocument();
  });

  it('should renders with icon', () => {
    makeSut({ icon: <Email /> });

    const icon = screen.getByTestId('input-icon');

    expect(icon).toBeInTheDocument();
    expect(icon).toHaveStyle({
      order: 0
    });
  });

  it('should renders with icon on the left side', () => {
    makeSut({ icon: <Email />, iconPosition: 'left' });

    const icon = screen.getByTestId('input-icon');

    expect(icon).toHaveStyle({
      order: 1
    });
  });

  it('should changes its value when typing', async () => {
    const onInput = jest.fn();
    const text = 'any text';
    makeSut({ onInput });

    const input = screen.getByRole('textbox');

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).toHaveValue(text);
      expect(onInput).toHaveBeenCalledTimes(text.length);
    });

    expect(onInput).toHaveBeenCalledWith(text);
  });

  it('should not be able changes its value when disabled', async () => {
    const onInput = jest.fn();
    const text = 'any text';
    makeSut({ onInput, disabled: true });

    const input = screen.getByRole('textbox');

    userEvent.type(input, text);

    await waitFor(() => {
      expect(input).not.toHaveValue(text);
      expect(input).toBeDisabled();
    });

    expect(onInput).not.toHaveBeenCalledWith(text);
  });

  it('should be able render with error', async () => {
    const errorMessage = 'Something wrong';
    const labelText = 'Name';
    makeSut({
      labelText,
      labelFor: labelText,
      icon: <Email data-testid="icon" />,
      iconPosition: 'left',
      errorMessage
    });

    const errorMessageExists = screen.getByText(errorMessage);

    expect(errorMessageExists).toBeInTheDocument();
  });

  it('should is accessible by tab', async () => {
    makeSut({
      labelText: 'TextField',
      labelFor: 'TextField',
      id: 'TextField'
    });

    const body = document.body;
    expect(body).toHaveFocus();

    userEvent.tab();

    const input = screen.getByRole('textbox');

    await waitFor(() => {
      expect(input).toHaveFocus();
    });
  });
});
