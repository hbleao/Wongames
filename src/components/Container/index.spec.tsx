import React from 'react';

import { Container } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';
import theme from 'styles/theme';

const makeSut = () => {
  const sut = renderWithTheme(<Container />);

  return {
    sut
  };
};

describe('Components/Container', () => {
  it('should be render a Container', () => {
    const { sut } = makeSut();

    expect(sut.container.firstChild).toHaveStyle({
      'max-width': theme.grid.container
    });

    expect(sut.container).toMatchInlineSnapshot(`
      .c0 {
        width: 100%;
        max-width: 130rem;
        margin-left: auto;
        margin-right: auto;
        padding-left: calc(3.2rem / 2);
        padding-right: calc(3.2rem / 2);
      }

      <div>
        <div
          class="c0"
        />
      </div>
    `);
  });
});
