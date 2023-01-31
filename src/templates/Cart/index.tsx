import * as S from './styles';

import { Base } from 'templates/Base';

import {
  Container,
  Heading,
  Divider,
  ShowCase,
  CartList,
  PaymentOptions,
  Empty
} from 'components';

import { TemplateCartProps } from './types';

export const TemplateCart = ({
  recommendedGames,
  recommendedHighLight,
  items,
  total,
  cards,
  handlePayment
}: TemplateCartProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My Cart
        </Heading>

        {items.length ? (
          <S.Content>
            <CartList items={items} total={total} />

            <PaymentOptions cards={cards} handlePayment={handlePayment} />
          </S.Content>
        ) : (
          <Empty
            title="Your cart is empty"
            description="go back to the store and explore great games and offers"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <ShowCase
        title="Yout may like these games"
        games={recommendedGames}
        highlight={recommendedHighLight}
      />
    </Base>
  );
};
