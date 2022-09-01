import { RibbonColors, RibbonSizes } from 'components/Ribbon/types';

export type GameCardProps = {
  title: string;
  developer: string;
  image: string;
  price: string;
  promotionalPrice?: string;
  favorite?: boolean;
  ribbon?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
  onFav: () => void;
};

export type PriceProps = {
  isPromotional?: boolean;
};
