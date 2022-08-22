import * as S from './styles';

import { MediaMatchProps } from './types';

export const MediaMatch = ({
  greaterThan,
  lessThan,
  children
}: MediaMatchProps) => {
  return (
    <S.Wrapper greaterThan={greaterThan} lessThan={lessThan}>
      {children}
    </S.Wrapper>
  );
};
