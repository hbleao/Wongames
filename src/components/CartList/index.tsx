import { GameItem } from 'components/GameItem';
import * as S from './styles';

import { CartListProps } from './types';

export const CartList = ({ items, total }: CartListProps) => {
  return (
    <S.Wrapper>
      {items.map(item => (
        <GameItem key={item.title} {...item} />
      ))}
      <S.Footer>
        Total <S.Total>{total}</S.Total>
      </S.Footer>
    </S.Wrapper>
  );
};
