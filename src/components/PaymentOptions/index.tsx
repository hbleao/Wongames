import { useState } from 'react';

import * as S from './styles';

import { Button, Heading, Radio } from 'components';

import { PaymentOptionsProps } from './types';
import { Add, ShoppingCart } from '@styled-icons/material-outlined';

export const PaymentOptions = ({
  cards,
  handlePayment
}: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false);

  function handleChecked() {
    setChecked(true);
  }

  return (
    <S.Wrapper>
      <S.Body>
        <Heading lineBottom lineColor="primary" size="small" color="black">
          Payment
        </Heading>
        <S.CardsList>
          {cards?.map(card => (
            <S.CardItem key={card.number}>
              <S.CardInfo>
                <img src={card.image} alt={card.flag} />
                {card.number}
              </S.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={handleChecked}
              />
            </S.CardItem>
          ))}
          <S.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </S.AddCard>
        </S.CardsList>
      </S.Body>
      <S.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          onClick={handlePayment}
          icon={<ShoppingCart />}
          disabled={!checked}
        >
          Buy now
        </Button>
      </S.Footer>
    </S.Wrapper>
  );
};
