import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined';
import { Button } from 'components/Button';
import { Ribbon } from 'components/Ribbon';
import * as S from './styles';
import { GameCardProps } from './types';

export const GameCard = ({
  title,
  developer,
  image,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'normal',
  onFav
}: GameCardProps) => {
  return (
    <S.Wrapper>
      {!!ribbon && (
        <Ribbon size={ribbonSize} color={ribbonColor}>
          {ribbon}
        </Ribbon>
      )}

      <S.ImageBox>
        <img src={image} alt={title} />
      </S.ImageBox>

      <S.Content>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>

        <S.FavButton onClick={onFav} aria-labelledby="Wishlist button group">
          {favorite ? (
            <Favorite size={20} aria-label="Remove from wishlist" />
          ) : (
            <FavoriteBorder size={20} aria-label="Add to wishlist" />
          )}
        </S.FavButton>

        <S.BuyButton>
          {!!promotionalPrice && <S.Price isPromotional>{price}</S.Price>}
          <S.Price>{promotionalPrice || price}</S.Price>
          <Button
            icon={<AddShoppingCart />}
            size="small"
            aria-label="Go to shopping cart"
          />
        </S.BuyButton>
      </S.Content>
    </S.Wrapper>
  );
};
