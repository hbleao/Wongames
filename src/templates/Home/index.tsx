import React from 'react';

import * as S from './styles';

import { Container, BannerSlider, ShowCase } from 'components';
import { Base } from 'templates/Base';

import { HomeProps } from './type';

export const Home = ({
  banners,
  gameCards,
  mostPopularHighlight,
  mostPopularGameCards,
  upcomingGames,
  upcomingGameCards,
  freeGameCards,
  freeGames
}: HomeProps) => {
  return (
    <S.Container>
      <Base>
        <Container>
          <S.SectionBanner>
            <BannerSlider items={banners} />
          </S.SectionBanner>
        </Container>

        <S.SectionNews>
          <Container>
            <ShowCase
              title="Novos Jogos"
              titleColor="black"
              games={gameCards}
            />
          </Container>
        </S.SectionNews>

        <Container>
          <ShowCase
            title="Mais Populares"
            games={mostPopularGameCards}
            highlight={mostPopularHighlight}
          />
        </Container>

        <Container>
          <ShowCase
            title="Em Breve"
            games={upcomingGameCards}
            highlight={upcomingGames}
          />
        </Container>

        <Container>
          <ShowCase
            title="Gratuitos"
            games={freeGameCards}
            highlight={freeGames}
          />
        </Container>
      </Base>
    </S.Container>
  );
};
