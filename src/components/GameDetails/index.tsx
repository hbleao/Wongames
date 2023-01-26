import { Apple, Linux, Windows } from '@styled-icons/fa-brands';

import * as S from './styles';

import { Heading, MediaMatch } from 'components';

import { GameDetailsProps } from './types';

export const GameDetails = ({
  developer,
  releaseDate,
  publisher,
  rating,
  genres,
  platforms
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" aria-label="Linux" size={18} />,
    mac: <Apple title="Mac" aria-label="Mac" size={18} />,
    windows: <Windows title="Windows" aria-label="Windows" size={18} />
  };

  function formatDate(dateTime: string): string {
    return new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }).format(new Date(dateTime));
  }

  function formatRating(rating: string): string {
    const classification = `${rating.replace('BR', '')}+`;
    return rating === 'BR0' ? 'FREE' : classification;
  }

  return (
    <S.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <S.Content>
        <S.Block>
          <S.Label>Developer</S.Label>
          <S.Description>{developer}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Release Date</S.Label>
          <S.Description>{formatDate(releaseDate)}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Platforms</S.Label>
          <S.IconsWrapper>
            {platforms.map(platform => (
              <S.Icon key={platform}>{platformIcons[platform]}</S.Icon>
            ))}
          </S.IconsWrapper>
        </S.Block>

        <S.Block>
          <S.Label>Publisher</S.Label>
          <S.Description>{publisher}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Rating</S.Label>
          <S.Description>{formatRating(rating)}</S.Description>
        </S.Block>

        <S.Block>
          <S.Label>Genres</S.Label>
          <S.Description>{genres.join(' / ')}</S.Description>
        </S.Block>
      </S.Content>
    </S.Wrapper>
  );
};
