import * as S from './styles';
import { RibbonProps } from './types';

export const Ribbon = ({
  children,
  color = 'primary',
  size = 'normal'
}: RibbonProps) => {
  return (
    <S.Wrapper size={size} color={color}>
      {children}
    </S.Wrapper>
  );
};
