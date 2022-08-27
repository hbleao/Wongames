import Link from 'next/link';

import * as S from './styles';

import { Logo, Heading } from 'components';

export const Footer = () => {
  return (
    <S.Wrapper>
      <Logo color="black" />

      <S.Content data-testid="content-section">
        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Contact
          </Heading>
          <a href="mailto:sac@wongames.com">sac@wongames.com</a>
        </S.Column>

        <S.Column>
          <Heading color="black" size="small" lineBottom lineColor="secondary">
            Follow us
          </Heading>
          <nav aria-labelledby="Social Media">
            <a
              href="https://www.google.com/wongames"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Instagram
            </a>
            <a
              href="https://www.google.com/wongames"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Twitter
            </a>
            <a
              href="https://www.google.com/wongames"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Youtube
            </a>
            <a
              href="https://www.google.com/wongames"
              target="_blank"
              rel="noopenner, noreferrer"
            >
              Facebook
            </a>
          </nav>
        </S.Column>

        <S.Column>
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Links
          </Heading>

          <nav aria-labelledby="Footer resources">
            <Link href="/">
              <a>Home</a>
            </Link>

            <Link href="/">
              <a>Store</a>
            </Link>

            <Link href="/">
              <a>Search</a>
            </Link>
          </nav>
        </S.Column>

        <S.Column aria-labelledby="footer contact">
          <Heading color="black" lineColor="secondary" lineBottom size="small">
            Location
          </Heading>

          <span>Loren lorem lorem lorem</span>
          <span>Loren lorem </span>
          <span>Loren lorem lorem lorem lorem</span>
        </S.Column>
      </S.Content>

      <S.CopyRight>Won Games 2020 - All rights reserved.</S.CopyRight>
    </S.Wrapper>
  );
};
