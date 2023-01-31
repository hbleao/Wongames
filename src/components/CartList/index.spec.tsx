import React from 'react';
import { screen } from '@testing-library/react';

import { CartList } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { mockCartList } from './mock';

const makeSut = () => {
  const sut = renderWithTheme(<CartList total="344,90" items={mockCartList} />);

  return {
    sut
  };
};

describe('CartList', () => {
  it('should be render a CartList', () => {
    const { sut } = makeSut();

    const headings = screen.getAllByRole('heading');
    expect(headings).toHaveLength(2);

    const total = screen.getByText(/total/i);
    expect(total).toBeInTheDocument();

    const price = screen.getByText(/344,90/i);
    expect(price).toBeInTheDocument();

    expect(sut).toMatchSnapshot();
  });
});
