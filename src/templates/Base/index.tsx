import * as S from './styles';

import { Container, Footer, Menu } from 'components';

import { BaseProps } from './types';

export const Base = ({ children }: BaseProps) => {
  return (
    <S.Wrapper>
      <Container>
        <Menu />
      </Container>

      {children}

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </S.Wrapper>
  );
};
