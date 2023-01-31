/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import React from 'react';
import { screen } from '@testing-library/react';

import { GameItem } from '.';
import { mockGameItem } from './mock';

import { renderWithTheme } from 'utils/tests/renderWithTheme';
import { PaymentInfo } from './types';

type MakeSutProps = {
  image?: string;
  title?: string;
  price?: string;
  downloadLink?: string;
  paymentInfo?: PaymentInfo;
};

const makeSut = ({
  title = mockGameItem.title,
  price = mockGameItem.price,
  image = mockGameItem.image,
  downloadLink,
  paymentInfo
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <GameItem
      title={title}
      price={price}
      image={image}
      downloadLink={downloadLink}
      paymentInfo={paymentInfo}
    />
  );

  return {
    sut
  };
};

describe('GameItem', () => {
  it('should be render a GameItem', () => {
    makeSut({});

    const title = screen.getByText(mockGameItem.title);
    expect(title).toBeInTheDocument();

    const image = screen.getByRole('img', { name: mockGameItem.title });
    expect(image).toBeInTheDocument();
    expect(image).toHaveProperty('src', mockGameItem.image);

    const price = screen.getByText(mockGameItem.price);
    expect(price).toBeInTheDocument();
  });

  it('should render the item with download link', () => {
    const downloadLink = 'https://link';
    makeSut({ downloadLink });

    const link = screen.getByRole('link', {
      name: `Get ${mockGameItem.title} here`
    });
    expect(link).toHaveAttribute('href', downloadLink);
  });

  it('should render the payment info', () => {
    makeSut({ paymentInfo: mockGameItem.paymentInfo });

    const cardNumber = screen.getByText(mockGameItem.paymentInfo?.number!);
    const purchaseDate = screen.getByText(
      mockGameItem.paymentInfo?.purchaseDate!
    );

    expect(cardNumber).toBeInTheDocument();
    expect(purchaseDate).toBeInTheDocument();
  });
});
