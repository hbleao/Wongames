import { AccountCircle, Email, Lock } from '@styled-icons/material-outlined';
import Link from 'next/link';

import * as S from './styles';

import { Logo, Heading, TextField, Button, Form, FormLink } from 'components';

export const TemplateSignUp = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.ContentWrapper>
          <Link href="/">
            <a>
              <Logo id="form-logo" color="black" size="large" />
            </a>
          </Link>
          <Heading color="black" lineColor="secondary" lineLeft>
            Sign Up
          </Heading>
          <Form>
            <TextField
              name="name"
              placeholder="Name"
              type="text"
              icon={<AccountCircle />}
            />
            <TextField
              name="email"
              placeholder="Email"
              type="email"
              icon={<Email />}
            />
            <TextField
              name="password"
              placeholder="Password"
              type="password"
              icon={<Lock />}
            />
            <TextField
              name="password"
              placeholder="Confirm password"
              type="password"
              icon={<Lock />}
            />
            <S.ForgotPassword>Forgot your password?</S.ForgotPassword>
            <Button size="large" fullWidth>
              Sign up now
            </Button>
            <FormLink>
              Already have an account?
              <Link href="/sign-in">
                <a> Sign in </a>
              </Link>
            </FormLink>
          </Form>
        </S.ContentWrapper>
      </S.Content>

      <S.BannerBlock>
        <S.BannerContent>
          <Link href="/">
            <a>
              <Logo />
            </a>
          </Link>
          <div>
            <Heading size="huge">All your favorite games in one place</Heading>
            <S.Subtitle>
              <strong>WOW</strong> is the best and most complete gaming
              platform.
            </S.Subtitle>
          </div>
          <S.Footer> Won games 2020 todos os direitos reservados </S.Footer>
        </S.BannerContent>
      </S.BannerBlock>
    </S.Wrapper>
  );
};
