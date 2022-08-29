import React from 'react';
import { screen } from '@testing-library/react';

import { Banner } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';
import { RibbonColors, RibbonSizes } from 'components/Ribbon/types';

type MakeSutProps = {
  image?: string;
  title?: string;
  subtitle?: string;
  buttonLabel?: string;
  buttonLink?: string;
  ribbon?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};

const makeSut = ({
  image = 'https://source.unsplash.com/user/willianjusten/1042x580',
  title = 'Defy death',
  subtitle = '<p>Play the new <strong>Crashlands</strong> season</p>',
  buttonLabel = 'Buy now',
  buttonLink = '/games/defy-death',
  ribbon,
  ribbonSize,
  ribbonColor
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Banner
      image={image}
      title={title}
      subtitle={subtitle}
      buttonLabel={buttonLabel}
      buttonLink={buttonLink}
      ribbon={ribbon}
      ribbonSize={ribbonSize}
      ribbonColor={ribbonColor}
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

  it('should be render a Banner correctly', () => {
    makeSut({
      ribbon: '10% off',
      ribbonSize: 'small',
      ribbonColor: 'secondary'
    });

    const ribbon = screen.getByText(/10% off/i);

    expect(ribbon).toBeInTheDocument();
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' });
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    });
  });
});
