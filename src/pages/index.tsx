import { Highlight } from 'components/Highlight';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div>
      <p> page </p>
      <Highlight
        title="Read Dead it's back"
        subtitle="Come see Jhon's new adventures"
        buttonLabel="Buy Now"
        buttonLink="/rdr2"
      />
    </div>
  );
};

export default Home;
