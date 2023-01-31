import { TemplateWishlist } from 'templates';

import { mockHighlight } from 'components/Highlight/mock';
import { mockGameCards } from 'components/GameCardSlider/mock';

import { TemplateWishlistProps } from 'templates/Wishlist/types';

export default function SignIn(props: TemplateWishlistProps) {
  return <TemplateWishlist {...props} />;
}

export async function getStaticProps() {
  return {
    props: {
      recommendedGames: mockGameCards,
      recommendedHighLight: mockHighlight,
      games: mockGameCards
    }
  };
}
