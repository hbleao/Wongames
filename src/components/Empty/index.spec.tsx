import React from 'react';
import { screen } from '@testing-library/react';

import { Empty } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

type MakeSutProps = {
  title?: string;
  description?: string;
  hasLink?: boolean;
};

const makeSut = ({
  title = 'a simple title',
  description = 'a simple description',
  hasLink
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Empty title={title} description={description} hasLink={hasLink} />
  );

  return {
    sut
  };
};

describe('Empty', () => {
  it('should render correctly', () => {
    const { sut } = makeSut({ hasLink: true });

    const emptyImage = screen.getByRole('img', {
      name: /a gamer in a couch playing video game/i
    });

    expect(emptyImage).toBeInTheDocument();

    const heading = screen.getByRole('heading', { name: /a simple title/i });
    expect(heading).toBeInTheDocument();

    const description = screen.getByText(/a simple description/i);
    expect(description).toBeInTheDocument();

    const link = screen.getByRole('link', { name: /go back to store/i });
    expect(link).toHaveAttribute('href', '/');

    expect(sut).toMatchSnapshot();
  });

  it('should not render link when hasLink is not passed', () => {
    makeSut({});

    const link = screen.queryByRole('link', { name: /go back to store/i });
    expect(link).not.toBeInTheDocument();
  });
});
