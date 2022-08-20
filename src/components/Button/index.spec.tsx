import React from 'react';
import { screen, render } from '@testing-library/react';

import { Button } from '.';

const makeSut = () => {
  const sut = render(<Button />);

  return {
    sut
  };
};

describe('Button', () => {
  it('should be render a button', () => {
    makeSut();

    const button = screen.getByRole('button');

    expect(button).toBeInTheDocument();
  });
});
