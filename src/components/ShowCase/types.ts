import { GameCardProps } from 'components/GameCard/types';
import { HighlightProps } from 'components/Highlight/types';

export type ShowCaseProps = {
  title?: string;
  titleColor?: 'white' | 'black';
  highlight?: HighlightProps;
  games?: GameCardProps[];
};
