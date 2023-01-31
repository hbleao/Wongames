import React from 'react';
import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { PaymentOptions } from '.';
import { mockPaymentOptions } from './mock';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

type MakeSutProps = {
  handlePayment?: () => void;
};

const makeSut = ({ handlePayment = () => null }: MakeSutProps) => {
  const sut = renderWithTheme(
    <PaymentOptions cards={mockPaymentOptions} handlePayment={handlePayment} />
  );

  return {
    sut
  };
};

describe('components/PaymentOptions', () => {
  it('should render the saved card options and the add new card button', () => {
    makeSut({});

    const firstCard = screen.getByText(mockPaymentOptions[0].number);
    const secondCard = screen.getByText(mockPaymentOptions[1].number);
    const messageAddNewCard = screen.getByText(/add a new credit card/i);

    expect(firstCard).toBeInTheDocument();
    expect(secondCard).toBeInTheDocument();
    expect(messageAddNewCard).toBeInTheDocument();
  });

  it('should handle select card when clicking on the label', async () => {
    makeSut({});

    const firstCard = screen.getByText(mockPaymentOptions[0].number);
    userEvent.click(firstCard);

    const radio = screen.getByRole('radio', { name: /4378/i });

    await waitFor(() => {
      expect(radio).toBeChecked();
    });
  });

  it('should not call handlePayment when button is disabled', () => {
    const handlePayment = jest.fn();
    makeSut({ handlePayment });

    const button = screen.getByRole('button', { name: /buy now/i });
    userEvent.click(button);

    expect(handlePayment).not.toBeCalled();
  });

  it('should call handlePayment when credit card is select', async () => {
    const handlePayment = jest.fn();
    makeSut({ handlePayment });

    const firstCard = screen.getByText(mockPaymentOptions[0].number);
    userEvent.click(firstCard);

    const button = screen.getByRole('button', { name: /buy now/i });
    userEvent.click(button);

    await waitFor(() => {
      expect(handlePayment).toBeCalled();
    });
  });
});
