import React from 'react';
import { screen } from '@testing-library/react';

import { TextContent } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';

import { mock } from './mock';

type MakeSutProps = {
  title?: string;
  content?: string;
};

const makeSut = ({
  title = mock.title,
  content = '<h1>Content</h1>'
}: MakeSutProps) => {
  const sut = renderWithTheme(<TextContent title={title} content={content} />);

  return {
    sut
  };
};

describe('Components/TextContent', () => {
  it('should render the title and content', () => {
    const { sut } = makeSut({});

    const title = screen.getByRole('heading', { name: /description/i });
    const content = screen.getByRole('heading', { name: /content/i });

    expect(title).toBeInTheDocument();
    expect(content).toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
  });

  it('should render without title', () => {
    makeSut({ title: '' });

    const content = screen.getByRole('heading', { name: /content/i });
    expect(content).toBeInTheDocument();
  });

  it('should render the title color correctly in all version', () => {
    makeSut({});

    const titleWrapper = screen.getByRole('heading', { name: /description/i })
      .parentElement as HTMLElement;

    expect(titleWrapper).toHaveStyle({
      color: '#FAFAFA'
    });

    expect(titleWrapper).toHaveStyleRule('color', '#030517', {
      media: '(min-width: 768px)'
    });
  });
});
