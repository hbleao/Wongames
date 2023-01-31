import React from 'react';

import { Divider } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

const makeSut = () => {
  const sut = renderWithTheme(<Divider />);

  return {
    sut
  };
};

describe('Grid', () => {
  it('should render correctly', () => {
    const { sut } = makeSut();

    expect(sut.container).toMatchInlineSnapshot(`
      .c0 {
        margin: 5.6rem auto 3.2rem;
        height: 0.1rem;
        background-color: rgba(181,181,181,0.3);
        border: 0;
      }

      @media (min-width:768px) {
        .c0 {
          margin: calc(5.6rem * 2.5) auto 4.8rem;
        }
      }

      <div>
        <hr
          class="c0"
        />
      </div>
    `);
  });
});
