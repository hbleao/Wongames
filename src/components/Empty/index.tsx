import Link from 'next/link';

import * as S from './styles';

import { Button } from 'components';

import { EmptyProps } from './types';

export const Empty = ({ title, description, hasLink }: EmptyProps) => {
  return (
    <S.Wrapper>
      <S.Image
        role="img"
        src="/img/empty.svg"
        alt="a gamer in a couch playing video game"
      />
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
      {hasLink && (
        <Link href="/" passHref>
          <Button as="a">Go back to store</Button>
        </Link>
      )}
    </S.Wrapper>
  );
};
