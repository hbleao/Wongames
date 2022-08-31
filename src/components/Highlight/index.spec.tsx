import React from 'react';
import { screen } from '@testing-library/react';

import { Highlight } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

type MakeSutProps = {
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
  backgroundImage?: string;
  floatImage?: string;
  alignment?: 'right' | 'left';
};

const makeSut = ({
  title = 'Heading 1',
  subtitle = 'Heading 2',
  backgroundImage = '',
  buttonLabel = 'Buy Now',
  buttonLink = '/rdr2',
  floatImage,
  alignment
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Highlight
      title={title}
      subtitle={subtitle}
      backgroundImage={backgroundImage}
      buttonLabel={buttonLabel}
      buttonLink={buttonLink}
      floatImage={floatImage}
      alignment={alignment}
    />
  );

  return {
    sut
  };
};

describe('Highlight', () => {
  it('should render headings and button', () => {
    makeSut({});

    const heading1 = screen.getByRole('heading', { name: 'Heading 1' });
    const heading2 = screen.getByRole('heading', { name: 'Heading 2' });
    const buttonLink = screen.getByRole('link', { name: /buy now/i });

    expect(heading1).toBeInTheDocument();
    expect(heading2).toBeInTheDocument();
    expect(buttonLink).toBeInTheDocument();
  });

  it('should render background image', () => {
    const backgroundImage = '/image/red-dead.png';
    const { sut } = makeSut({ backgroundImage });

    expect(sut.container.firstChild).toHaveStyle({
      'background-image': `url(${backgroundImage})`
    });
  });

  it('should render float image', () => {
    const image = '/float-image.png';
    const title = 'title with float image';
    makeSut({ floatImage: image, title });

    const floatImageElement = screen.getByRole('img', { name: title });

    expect(floatImageElement).toHaveAttribute('src', image);
  });

  it('should render align right by default', () => {
    const image = '/float-image.png';
    const title = 'title with float image';
    const { sut } = makeSut({ floatImage: image, title });

    expect(sut.container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    );
  });

  it('should render align right by default', () => {
    const image = '/float-image.png';
    const title = 'title with float image';
    const { sut } = makeSut({ floatImage: image, title, alignment: 'left' });

    expect(sut.container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    );
  });
});
