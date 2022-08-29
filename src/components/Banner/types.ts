import { RibbonColors, RibbonSizes } from '../Ribbon/types';

export type ImageProps = {
  src: string;
};

export type BannerProps = {
  image: string;
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  ribbon?: string;
  ribbonSize?: RibbonSizes;
  ribbonColor?: RibbonColors;
};
