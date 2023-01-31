import * as S from './styles';

import { Base } from 'templates';

import {
  Container,
  GameCard,
  Grid,
  Heading,
  ShowCase,
  Divider,
  Empty
} from 'components';

import { TemplateWishlistProps } from './types';

export const TemplateWishlist = ({
  recommendedGames,
  recommendedHighLight,
  games = []
}: TemplateWishlistProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {games.length ? (
          <Grid>
            {games?.map((game, index) => (
              <GameCard key={`wishlist${index}`} {...game} />
            ))}
          </Grid>
        ) : (
          <Empty
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}
        <Divider />
      </Container>
      <ShowCase
        title="You may like these games"
        games={recommendedGames}
        highlight={recommendedHighLight}
      />
    </Base>
  );
};
