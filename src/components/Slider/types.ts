import { ReactNode } from 'react';
import { Settings } from 'react-slick';

export type SliderSettings = Settings;

export type SliderProps = {
  children: ReactNode;
  settings: SliderSettings;
};
