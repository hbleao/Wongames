export type HighlightProps = {
  title: string;
  subtitle: string;
  buttonLabel: string;
  buttonLink: string;
  backgroundImage: string;
  floatImage?: string;
  alignment?: 'right' | 'left';
};

export type WrapperProps = Pick<
  HighlightProps,
  'backgroundImage' | 'alignment'
>;
