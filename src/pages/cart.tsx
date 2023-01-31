import { mockCartList } from 'components/CartList/mock';
import { mockGameCards } from 'components/GameCardSlider/mock';
import { mockHighlight } from 'components/Highlight/mock';
import { mockPaymentOptions } from 'components/PaymentOptions/mock';

import { TemplateCart } from 'templates';

import { TemplateCartProps } from 'templates/Cart/types';

export default function CartPage(props: TemplateCartProps) {
  return <TemplateCart {...props} />;
}

export async function getServerSideProps() {
  return {
    props: {
      recommendedGames: mockGameCards,
      recommendedHighLight: mockHighlight,
      items: mockCartList,
      total: '344,90',
      cards: mockPaymentOptions
    }
  };
}
