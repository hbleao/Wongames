import {
  AddShoppingCart,
  FavoriteBorder
} from '@styled-icons/material-outlined';

import * as S from './styles';

import { Button } from 'components/Button';
import { Heading } from 'components/Heading';
import { Ribbon } from 'components/Ribbon';

import { GameInfoProps } from './types';

export const GameInfo = ({ title, description, price }: GameInfoProps) => {
  return (
    <S.Wrapper>
      <Heading lineBottom color="black">
        {title}
      </Heading>

      <Ribbon color="secondary"> {`$${price}`} </Ribbon>

      <S.Description>{description}</S.Description>

      <S.ButtonsWrapper>
        <Button icon={<AddShoppingCart />} size="large">
          Add to Cart
        </Button>
        <Button icon={<FavoriteBorder />} size="large" minimal>
          Wishlist
        </Button>
      </S.ButtonsWrapper>
    </S.Wrapper>
  );
};
