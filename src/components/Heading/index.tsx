import * as S from './styles';

import { HeadingProps } from './types';

export const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => {
  return (
    <>
      <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
        {children}
      </S.Wrapper>
    </>
  );
};
