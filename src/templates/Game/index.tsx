import * as S from './styles';

import { Base } from 'templates/Base';

import {
  GameInfo,
  Gallery,
  GameDetails,
  ShowCase,
  TextContent,
  Divider
} from 'components';

import { GameProps } from './types';

export const TemplateGame = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upComingGames,
  recommendedGames,
  upComingHighLight
}: GameProps) => {
  return (
    <Base>
      <S.Cover src={cover} role="image" aria-label="cover" />
      <S.Main>
        <S.SectionGameInfo>
          <GameInfo {...gameInfo} />
        </S.SectionGameInfo>

        <S.SectionGallery>
          {!!gallery && <Gallery items={gallery} />}
        </S.SectionGallery>

        <S.SectionTextContent>
          <TextContent title="Description" content={description} />
        </S.SectionTextContent>

        <S.SectionGameDetails>
          <GameDetails {...details} />
          <Divider />
        </S.SectionGameDetails>

        <S.SectionShowCase>
          <ShowCase
            title="Up coming"
            games={upComingGames}
            highlight={upComingHighLight}
          />
        </S.SectionShowCase>

        <S.SectionShowCase>
          <ShowCase title="You may like these games" games={recommendedGames} />
        </S.SectionShowCase>
      </S.Main>
    </Base>
  );
};
