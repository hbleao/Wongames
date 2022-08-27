import type { NextPage } from 'next';
import styled from 'styled-components';

import { Button } from 'components/Button';
import { Grid } from 'components/Layout/Grid/styles';
import { Row } from 'components/Layout/Row/styles';
import { FullWithSection } from 'components/Layout/FullWithSection/styles';

const Header = styled(FullWithSection)`
  padding: 4rem 1.5rem;
  background-color: lightcoral;
`;

const Nav = styled(Row)`
  background-color: red;
  align-items: center;
  a {
    margin-right: 1rem;
  }
`;

const ButtonWrapper = styled(Row)``;

const Home: NextPage = () => {
  return (
    <Grid>
      <Header as="header">
        <Nav as="nav" startDefault="2" endDefault="10">
          <a href="http://Link" target="_blank" rel="noopener noreferrer">
            Link 1
          </a>
          <a href="http://Link" target="_blank" rel="noopener noreferrer">
            Link 1
          </a>
        </Nav>
        <ButtonWrapper as="div" startDefault="12" endDefault="14">
          <Button fullWidth size="small">
            Login
          </Button>
        </ButtonWrapper>
      </Header>
    </Grid>
  );
};

export default Home;
