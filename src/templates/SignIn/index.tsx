import Link from 'next/link';
import { Email, Lock } from '@styled-icons/material-outlined';

import * as S from './styles';

import { Logo, Heading, Button, TextField, FormLink, Form } from 'components';

export const TemplateSignIn = () => {
  return (
    <S.Wrapper>
      <S.BannerBlock>
        <S.BannerContent>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div>
            <Heading size="huge">
              Welcome the magical world of games, the best online platform in
              the world.
            </Heading>
            <S.Subtitle>
              <strong>WOW</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </div>
          <S.Footer>Won games 2020 todos os direitos reservados</S.Footer>
        </S.BannerContent>
      </S.BannerBlock>

      <S.Content>
        <S.ContentWrapper>
          <Link href="/">
            <a>
              <Logo id="form-logo" color="black" size="large" />
            </a>
          </Link>
          <Heading color="black" lineColor="secondary" lineLeft>
            Sign In
          </Heading>
          <Form>
            <TextField
              name="email"
              placeholder="Email"
              type="email"
              icon={<Email />}
            />
            <TextField
              name="passwrod"
              placeholder="Passwrod"
              type="passwrod"
              icon={<Lock />}
            />
            <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
            <Button size="large" fullWidth>
              Sign in now
            </Button>
            <FormLink>
              Don&apos;t have account?
              <Link href="/sign-up">
                <a> Sign up </a>
              </Link>
            </FormLink>
          </Form>
        </S.ContentWrapper>
      </S.Content>
    </S.Wrapper>
  );
};
