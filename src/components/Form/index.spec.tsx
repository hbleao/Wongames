import React from 'react';

import { Form, FormLink } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

const makeSut = () => {
  const sut = renderWithTheme(
    <Form>
      <FormLink>
        My custom <a href="#">link</a>
      </FormLink>
    </Form>
  );

  return {
    sut
  };
};

describe('Components/Form', () => {
  it('should render the Heading', () => {
    const { sut } = makeSut();

    expect(sut.container.parentElement).toMatchInlineSnapshot(`
      .c0 {
        display: -webkit-box;
        display: -webkit-flex;
        display: -ms-flexbox;
        display: flex;
        -webkit-flex-direction: column;
        -ms-flex-direction: column;
        flex-direction: column;
      }

      .c1 {
        font-size: 1.4rem;
        color: #030517;
        text-align: center;
      }

      .c1 a {
        color: #3CD3C1;
        -webkit-text-decoration: none;
        text-decoration: none;
        border-bottom: 0.1rem solid #3CD3C1;
        -webkit-transition: color,border,0.1s ease-in-out;
        transition: color,border,0.1s ease-in-out;
      }

      .c1 a:hover {
        color: #29b3a3;
        border-bottom: 0.1rem solid #29b3a3;
      }

      <body>
        <div>
          <form
            class="c0"
          >
            <p
              class="c1"
            >
              My custom 
              <a
                href="#"
              >
                link
              </a>
            </p>
          </form>
        </div>
      </body>
    `);
  });
});
