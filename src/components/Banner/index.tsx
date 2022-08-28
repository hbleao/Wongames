import * as S from './styles';
import { BannerProps } from './types';

import { Button } from 'components/Button';

export const Banner = ({
  image,
  title,
  subtitle,
  buttonLabel,
  buttonLink
}: BannerProps) => {
  return (
    <S.Wrapper>
      <S.Image src={image} role="img" aria-label={title} />

      <S.Caption>
        <S.Title>{title}</S.Title>
        <S.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
        <Button as="a" href={buttonLink} size="large">
          {buttonLabel}
        </Button>
      </S.Caption>
    </S.Wrapper>
  );
};
