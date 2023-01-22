import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { Gallery } from '.';

import { renderWithTheme } from 'utils/tests/renderWithTheme';
import { mockGallery } from './mock';

const makeSut = () => {
  const sut = renderWithTheme(<Gallery items={mockGallery.slice(0, 2)} />);

  return {
    sut
  };
};

describe('Components/Gallery', () => {
  it('should render thumbnails as button', () => {
    const { sut } = makeSut();

    const firstGalleryImage = screen.getByRole('button', {
      name: /Thumb - alt image 1/i
    });

    const secondGalleryImage = screen.getByRole('button', {
      name: /Thumb - alt image 2/i
    });

    expect(firstGalleryImage).toBeInTheDocument();
    expect(secondGalleryImage).toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
  });

  it('should handle open/close gallery modal', () => {
    makeSut();

    const modal = screen.getByLabelText('modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({
      opacity: 0
    });

    const firstGalleryImage = screen.getByRole('button', {
      name: /Thumb - alt image 1/i
    });

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({
      opacity: 0
    });

    fireEvent.click(firstGalleryImage);

    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({
      opacity: 1
    });
  });

  it('should handle close modal when overlay or button clicked', () => {
    makeSut();

    const modal = screen.getByLabelText('modal');
    const firstGalleryImage = screen.getByRole('button', {
      name: /Thumb - alt image 1/i
    });

    fireEvent.click(firstGalleryImage);

    expect(modal.getAttribute('aria-hidden')).toBe('false');
    expect(modal).toHaveStyle({
      opacity: 1
    });

    const buttonClose = screen.getByRole('button', { name: /close-modal/i });
    fireEvent.click(buttonClose);

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({
      opacity: 0
    });
  });

  it('should open modal with selected image', async () => {
    makeSut();

    const modal = screen.getByLabelText('modal');

    expect(modal.getAttribute('aria-hidden')).toBe('true');
    expect(modal).toHaveStyle({
      opacity: 0
    });

    const secondGalleryImage = screen.getByRole('button', {
      name: /Thumb - alt image 2/i
    });

    fireEvent.click(secondGalleryImage);

    const img = await screen.findByRole('img', { name: /alt image 2/i });
    const containerImg = img.parentElement?.parentElement;

    expect(containerImg).toHaveClass('slick-active');
  });
});
