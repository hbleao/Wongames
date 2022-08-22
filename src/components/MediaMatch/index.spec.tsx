import React from 'react';
import { screen, render } from '@testing-library/react';

import { MediaMatch } from '.';
import { MediaMatchProps } from './types';

type MakeSutProps = MediaMatchProps;

const makeSut = ({ greaterThan, lessThan, children }: MakeSutProps) => {
  const sut = render(
    <MediaMatch lessThan={lessThan} greaterThan={greaterThan}>
      {children}
    </MediaMatch>
  );

  return {
    sut
  };
};

describe('MediaMatch', () => {
  let desktopHeading: Element;
  let mobileHeading: Element;

  beforeEach(() => {
    makeSut({
      greaterThan: 'medium',
      children: <h1 data-testid="desktop">Desktop</h1>
    });
    makeSut({
      lessThan: 'medium',
      children: <h1 data-testid="mobile">mobile</h1>
    });

    desktopHeading = screen.getByTestId('desktop');
    mobileHeading = screen.getByTestId('mobile');
  });

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none');
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none');
  });

  it('should show or hide based on the media passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 768px)'
    });

    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    });
  });
});
