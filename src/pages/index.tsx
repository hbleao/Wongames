import { Home } from 'templates/Home';

import { Banners, GameCards, highlight } from 'constants/components';

import { HomeProps } from 'templates/Home/type';

export default function Index(props: HomeProps) {
  return <Home {...props} />;
}

export function getServerSideProps() {
  return {
    props: {
      banners: Banners,
      gameCards: GameCards,
      mostPopularHighlight: highlight,
      mostPopularGameCards: GameCards,
      upcomingGames: highlight,
      upcomingGameCards: GameCards,
      freeGames: highlight,
      freeGameCards: GameCards
    }
  };
}
