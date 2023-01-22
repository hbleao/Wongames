import React from 'react';
import { screen } from '@testing-library/react';
import 'jest-styled-components';

import { Footer } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

const makeSut = () => {
  const sut = renderWithTheme(<Footer />);

  return {
    sut
  };
};

describe('Components/Footer', () => {
  it('should render 4 columns topics', () => {
    const { sut } = makeSut();

    const contact = screen.getByText(/contact/i);
    const followUs = screen.getByText(/follow us/i);
    const links = screen.getByText(/links/i);
    const location = screen.getByText(/location/i);

    expect(contact).toBeInTheDocument();
    expect(followUs).toBeInTheDocument();
    expect(links).toBeInTheDocument();
    expect(location).toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
  });

  it('should render 4 columns inline on desktop version', () => {
    makeSut();

    const content = screen.getByTestId('content-section');

    expect(content).toHaveStyleRule('grid-template-columns', 'repeat(4,1fr)', {
      media: '(min-width: 768px)'
    });
  });
});
