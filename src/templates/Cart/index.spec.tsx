import React from 'react';
import { screen } from '@testing-library/react';

import { TemplateCart } from '.';

import { mockCartList } from 'components/CartList/mock';
import { mockGameCards } from 'components/GameCardSlider/mock';
import { mockHighlight } from 'components/Highlight/mock';
import { mockPaymentOptions } from 'components/PaymentOptions/mock';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { GameItemProps } from 'components/GameItem/types';

type MakeSutProps = {
  items?: GameItemProps[];
};

const makeSut = ({ items = mockCartList }: MakeSutProps) => {
  const sut = renderWithTheme(
    <TemplateCart
      items={items}
      recommendedGames={mockGameCards}
      recommendedHighLight={mockHighlight}
      cards={mockPaymentOptions}
      total="344,90"
      handlePayment={() => null}
    />
  );

  return {
    sut
  };
};

jest.mock('templates/Base', () => ({
  __esModule: true,
  Base: ({ children }: { children: React.ReactNode }) => {
    return <div data-testid="mock base">{children}</div>;
  }
}));

jest.mock('components/ShowCase', () => {
  return {
    ShowCase: () => <div data-testid="mock showcase" />
  };
});

jest.mock('components/CartList', () => {
  return {
    CartList: () => <div data-testid="mock cartList" />
  };
});

jest.mock('components/PaymentOptions', () => {
  return {
    PaymentOptions: () => <div data-testid="mock PaymentOptions" />
  };
});

jest.mock('components/empty', () => {
  return {
    Empty: () => <div data-testid="mock empty" />
  };
});

describe('Cart', () => {
  it('should be render a Cart', () => {
    makeSut({});

    const title = screen.getByRole('heading', { name: /my cart/i });
    expect(title).toBeInTheDocument();

    const base = screen.getByTestId(/mock base/i);
    expect(base).toBeInTheDocument();

    const showcase = screen.getByTestId(/mock showcase/i);
    expect(showcase).toBeInTheDocument();

    const cartList = screen.getByTestId(/mock cartList/i);
    expect(cartList).toBeInTheDocument();

    const paymentOption = screen.getByTestId(/mock paymentOptions/i);
    expect(paymentOption).toBeInTheDocument();

    const empty = screen.queryByTestId(/mock empty/i);
    expect(empty).not.toBeInTheDocument();
  });

  it('should render empty section if there are no items', () => {
    makeSut({ items: [] });

    const empty = screen.getByTestId(/mock empty/i);
    expect(empty).toBeInTheDocument();
  });
});
