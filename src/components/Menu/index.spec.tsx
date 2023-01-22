import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import { Menu } from '.';
import { renderWithTheme } from 'utils/tests/renderWithTheme';

type MakeSutProps = {
  username?: string;
};

const makeSut = ({ username }: MakeSutProps) => {
  const sut = renderWithTheme(<Menu username={username} />);

  return {
    sut
  };
};

describe('Components/Menu', () => {
  it('should be render a Menu', () => {
    const { sut } = makeSut({});

    const menuIcon = screen.getByLabelText(/open menu/i);
    const searchIcon = screen.getByLabelText(/search/i);
    const shoppingCartIcon = screen.getByLabelText(/open shopping cart/i);
    const logo = document.querySelector('.text');

    expect(menuIcon).toBeInTheDocument();
    expect(searchIcon).toBeInTheDocument();
    expect(shoppingCartIcon).toBeInTheDocument();
    expect(logo).toBeInTheDocument();
    expect(sut.container).toMatchSnapshot();
  });

  it('should handle the open/close mobile menu ', () => {
    makeSut({});

    const fullMenuElement = screen.getByRole('navigation', { hidden: true });
    const menuIcon = screen.getByLabelText(/open menu/i);
    const closeMenuIcon = screen.getByLabelText(/close menu/i);

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({
      opacity: 0
    });

    fireEvent.click(menuIcon);

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false');
    expect(fullMenuElement).toHaveStyle({
      opacity: 1
    });

    fireEvent.click(closeMenuIcon);

    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true');
    expect(fullMenuElement).toHaveStyle({
      opacity: 0
    });
  });

  it('should show register box when logged out', () => {
    makeSut({});

    const login = screen.getByText(/Sign up/i);
    const createAccount = screen.getByText(/Sign up/i);
    const myAccount = screen.queryByText(/my account/i);
    const wishList = screen.queryByText(/wishlist/i);

    expect(login).toBeInTheDocument();
    expect(createAccount).toBeInTheDocument();
    expect(myAccount).not.toBeInTheDocument();
    expect(wishList).not.toBeInTheDocument();
  });

  it('should show wishlist and my account when logged in', () => {
    makeSut({ username: 'Henrique' });

    const login = screen.queryByText(/Sign up/i);
    const createAccount = screen.queryByText(/Sign up/i);
    const myAccount = screen.getByText(/my account/i);
    const wishList = screen.getByText(/wishlist/i);

    expect(myAccount).toBeInTheDocument();
    expect(wishList).toBeInTheDocument();
    expect(login).not.toBeInTheDocument();
    expect(createAccount).not.toBeInTheDocument();
  });
});
