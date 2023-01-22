import * as S from './styles';

import { GameCardSlider, Heading, Highlight } from 'components';
import { ShowCaseProps } from './types';

export const ShowCase = ({
  title,
  titleColor = 'white',
  highlight,
  games
}: ShowCaseProps) => {
  return (
    <S.Wrapper>
      {!!title && (
        <Heading lineLeft color={titleColor}>
          {title}
        </Heading>
      )}

      {!!highlight && <Highlight {...highlight} />}
      {!!games && <GameCardSlider items={games} />}
    </S.Wrapper>
  );
};
