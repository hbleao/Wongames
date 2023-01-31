import React from 'react';

import { Grid } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

const makeSut = () => {
  const sut = renderWithTheme(<Grid />);

  return {
    sut
  };
};

describe('Grid', () => {
  it('should render correctly', () => {
    const { sut } = makeSut();

    expect(sut.container).toMatchInlineSnapshot(`
      .c0 {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(25rem,1fr));
        gap: 2.4rem;
        margin: 3.2rem 0;
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
