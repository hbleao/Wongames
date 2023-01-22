import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { Radio } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

import theme from 'styles/theme';
import { RadioValue } from './types';

export type RadioProps = {
  labelText?: string;
  labelFor?: string;
  labelColor?: 'black' | 'white';
  value?: RadioValue;
  onCheck?: (status?: RadioValue) => void;
};

const makeSut = ({
  labelText,
  labelFor,
  labelColor,
  onCheck,
  value
}: RadioProps) => {
  const sut = renderWithTheme(
    <Radio
      labelText={labelText}
      labelFor={labelFor}
      labelColor={labelColor}
      onCheck={onCheck}
      value={value}
    />
  );

  return {
    sut
  };
};

describe('Components/Radio', () => {
  it('Should be render with label', () => {
    const labelText = 'Radio';
    const labelFor = 'check';
    const { sut } = makeSut({ labelText, labelFor });

    const label = screen.getByLabelText(labelText);
    const radioLabel = screen.getByText(labelText);

    expect(label).toBeInTheDocument();
    expect(radioLabel).toHaveAttribute('for', labelFor);
    expect(sut.container).toMatchSnapshot();
  });

  it('Should be render without label', () => {
    makeSut({});

    const checkboxLabel = screen.queryByText('checkbox');

    expect(checkboxLabel).not.toBeInTheDocument();
  });

  it('Should be render Radio with black label', () => {
    const labelText = 'radio';
    const labelFor = 'check';

    makeSut({ labelText, labelFor, labelColor: 'black' });

    const radioLabel = screen.getByText(labelText);

    expect(radioLabel).toHaveStyle({
      color: theme.colors.black
    });
  });

  it('Should dispatch onCheck when status changes', async () => {
    const labelText = 'radio';
    const labelFor = 'radio';
    const onCheck = jest.fn();

    makeSut({
      labelText,
      labelFor,
      onCheck,
      value: 'any_value'
    });

    expect(onCheck).not.toHaveBeenCalled();

    const radio = screen.getByLabelText('radio');

    userEvent.click(radio);

    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1);
    });

    expect(onCheck).toHaveBeenCalledWith('any_value');
  });

  it('Should be accessible with tab', async () => {
    makeSut({ labelFor: 'radio', labelText: 'radio' });

    const body = document.body;
    expect(body).toHaveFocus();

    userEvent.tab();

    const radio = screen.getByLabelText(/radio/i);

    await waitFor(() => {
      expect(radio).toHaveFocus();
    });
  });
});
