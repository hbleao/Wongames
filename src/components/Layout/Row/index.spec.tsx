import React from 'react';
import { screen } from '@testing-library/react';

import { Row } from './styles';
import { renderWithTheme } from 'utils/tests/renderWithTheme';
import { WrapperProps } from './types';

type MakeSutProps = WrapperProps;

const makeSut = ({
  startDefault,
  endDefault,
  startMedium,
  endMedium,
  startSmall,
  endSmall
}: MakeSutProps) => {
  const sut = renderWithTheme(
    <Row
      startDefault={startDefault}
      endDefault={endDefault}
      startMedium={startMedium}
      endMedium={endMedium}
      startSmall={startSmall}
      endSmall={endSmall}
    >
      <p>content</p>
    </Row>
  );

  return {
    sut
  };
};

describe('Row', () => {
  it('should be render a Row', () => {
    makeSut({});

    const element = screen.getByText('content');

    expect(element.parentElement).toBeInTheDocument();
    expect(element.parentElement).toHaveStyle({
      'grid-column-start': '1',
      'grid-column-end': '6'
    });
  });

  it('should be render a Row on table version', () => {
    makeSut({});

    const element = screen.getByText('content');

    expect(element.parentElement).toHaveStyleRule('grid-column-start', '1', {
      media: '(min-width: 1170px)'
    });
    expect(element.parentElement).toHaveStyleRule('grid-column-end', '12', {
      media: '(min-width: 1170px)'
    });
  });

  it('should be render a Row on mobile version', () => {
    makeSut({});

    const element = screen.getByText('content');

    expect(element.parentElement).toHaveStyleRule('grid-column-start', '1', {
      media: '(min-width: 450px)'
    });
    expect(element.parentElement).toHaveStyleRule('grid-column-end', '6', {
      media: '(min-width: 450px)'
    });
  });

  it('should be render a Row with custom props on all versions', () => {
    makeSut({
      startSmall: '2',
      endSmall: '4',
      startDefault: '2',
      endDefault: '10',
      startMedium: '3',
      endMedium: '5'
    });

    const element = screen.getByText('content');

    expect(element.parentElement).toHaveStyle({ 'grid-column-start': '2' });
    expect(element.parentElement).toHaveStyle({ 'grid-column-end': '4' });

    expect(element.parentElement).toHaveStyleRule('grid-column-start', '2', {
      media: '(min-width: 1170px)'
    });
    expect(element.parentElement).toHaveStyleRule('grid-column-end', '10', {
      media: '(min-width: 1170px)'
    });

    expect(element.parentElement).toHaveStyleRule('grid-column-start', '3', {
      media: '(min-width: 450px)'
    });
    expect(element.parentElement).toHaveStyleRule('grid-column-end', '5', {
      media: '(min-width: 450px)'
    });
  });
});
