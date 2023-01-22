import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Checkbox } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

import theme from 'styles/theme';

export type CheckboxProps = {
  labelText?: string;
  labelFor?: string;
  labelColor?: 'black' | 'white';
  isChecked?: boolean;
  value?: string | ReadonlyArray<string> | number;
  onCheck?: (status: boolean) => void;
};

const makeSut = ({
  labelText,
  labelFor,
  isChecked,
  labelColor,
  onCheck
}: CheckboxProps) => {
  const sut = renderWithTheme(
    <Checkbox
      labelText={labelText}
      labelFor={labelFor}
      isChecked={isChecked}
      labelColor={labelColor}
      onCheck={onCheck}
    />
  );

  return {
    sut
  };
};

describe('Components/Checkbox', () => {
  it('Should be render with label', () => {
    const labelText = 'action';
    const labelFor = 'check';
    const { sut } = makeSut({ labelText, labelFor });

    const checkbox = screen.getByRole('checkbox');
    const label = screen.getByLabelText(labelText);
    const checkboxLabel = screen.getByText(labelText);

    expect(checkbox).toBeInTheDocument();
    expect(label).toBeInTheDocument();
    expect(checkboxLabel).toHaveAttribute('for', labelFor);
    expect(sut.container).toMatchSnapshot();
  });

  it('Should be render without label', () => {
    makeSut({});

    const checkboxLabel = screen.queryByText('checkbox');

    expect(checkboxLabel).not.toBeInTheDocument();
  });

  it('Should be render with black label', () => {
    const labelText = 'checkbox';
    const labelFor = 'check';

    makeSut({ labelText, labelFor, labelColor: 'black' });

    const checkboxLabel = screen.getByText(labelText);

    expect(checkboxLabel).toHaveStyle({
      color: theme.colors.black
    });
  });

  it('Should dispatch onCheck when status changes', async () => {
    const labelText = 'checkbox';
    const labelFor = 'check';
    const onCheck = jest.fn();

    makeSut({ labelText, labelFor, labelColor: 'black', onCheck });

    expect(onCheck).not.toHaveBeenCalled();

    const checkbox = screen.getByRole('checkbox');

    userEvent.click(checkbox);

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(true);
  });

  it('Should be initialized checked state as true', async () => {
    const labelText = 'checkbox';
    const labelFor = 'check';
    const onCheck = jest.fn();

    makeSut({
      labelText,
      labelFor,
      labelColor: 'black',
      onCheck,
      isChecked: true
    });

    expect(onCheck).not.toHaveBeenCalled();

    const checkbox = screen.getByRole('checkbox');

    userEvent.click(checkbox);

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith(false);
  });

  it('Should be accessible with tab', async () => {
    makeSut({ labelFor: 'checkbox', labelText: 'Checkbox' });

    const body = document.body;
    expect(body).toHaveFocus();

    userEvent.tab();

    const checkbox = screen.getByLabelText(/checkbox/i);

    await waitFor(() => {
      expect(checkbox).toHaveFocus();
    });
  });
});
