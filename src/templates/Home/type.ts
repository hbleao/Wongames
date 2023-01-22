import { BannerProps } from 'components/Banner/types';
import { GameCardProps } from 'components/GameCard/types';
import { HighlightProps } from 'components/Highlight/types';

export type HomeProps = {
  banners: BannerProps[];
  gameCards: GameCardProps[];
  mostPopularHighlight: HighlightProps;
  mostPopularGameCards: GameCardProps[];
  upcomingGames: HighlightProps;
  upcomingGameCards: GameCardProps[];
  freeGames: HighlightProps;
  freeGameCards: GameCardProps[];
};
