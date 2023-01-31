import { GameCardProps } from 'components/GameCard/types';
import { HighlightProps } from 'components/Highlight/types';

export type TemplateWishlistProps = {
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighlightProps;
  games: GameCardProps[];
};
