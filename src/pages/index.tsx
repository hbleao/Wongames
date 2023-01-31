import { Home } from 'templates/Home';

import { mockBanners } from 'components/BannerSlider/mock';
import { mockGameCards } from 'components/GameCardSlider/mock';
import { mockHighlight } from 'components/Highlight/mock';

import { HomeProps } from 'templates/Home/type';

export default function Index(props: HomeProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: mockBanners,
      gameCards: mockGameCards,
      mostPopularHighlight: mockHighlight,
      mostPopularGameCards: mockGameCards,
      upcomingGames: mockHighlight,
      upcomingGameCards: mockGameCards,
      freeGames: mockHighlight,
      freeGameCards: mockGameCards
    }
  };
}
