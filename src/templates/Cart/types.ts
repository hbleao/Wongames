import { CartListProps } from 'components/CartList/types';
import { GameCardProps } from 'components/GameCard/types';
import { HighlightProps } from 'components/Highlight/types';
import { PaymentOptionsProps } from 'components/PaymentOptions/types';

export type TemplateCartProps = {
  recommendedGames: GameCardProps[];
  recommendedHighLight: HighlightProps;
} & CartListProps &
  PaymentOptionsProps;
