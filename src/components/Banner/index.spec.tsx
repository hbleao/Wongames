import React from 'react';
import { screen, render } from '@testing-library/react';

import { Banner } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

type MakeSutProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
};

const makeSut = ({
  image = 'https://source.unsplash.com/user/willianjusten/1042x580',
  title = 'Defy death',
  subtitle = '<p>Play the new <strong>Crashlands</strong> season</p>',
  buttonLabel = 'Buy now',
  buttonLink = '/games/defy-death'
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Banner
      image={image}
      title={title}
      subtitle={subtitle}
      buttonLabel={buttonLabel}
      buttonLink={buttonLink}
    />
  );

  return {
    sut
  };
};

describe('Banner', () => {
  it('should be render a Banner correctly', () => {
    makeSut({});

    const title = screen.getByRole('heading', { name: /defy death/i });
    const subtitle = screen.getByRole('heading', {
      name: /play the new crashlands season/i
    });
    const image = screen.getByRole('img', { name: /defy death/i });

    expect(title).toBeInTheDocument();
    expect(subtitle).toBeInTheDocument();
    expect(image).toBeInTheDocument();
    expect(title).toMatchSnapshot();
  });
});
