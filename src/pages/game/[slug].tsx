import { TemplateGame } from 'templates';

import { GameProps } from 'templates/Game/types';

import { mockGallery } from 'components/Gallery/mock';
import { mockGameDetails } from 'components/GameDetails/mock';
import { mockGameCard } from 'components/GameCard/mock';
import { mockHighLight } from 'components/Highlight/mock';

export default function Games(props: GameProps) {
  return <TemplateGame {...props} />;
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'borderlands-3' } }],
    fallback: false
  };
}

export async function getStaticProps() {
  const descriptionHTML = `
    <img src="https://items.gog.com/not_a_cp/addon_en.png"><hr><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/action.mp4"></video><br><b>Cyberpunk 2077</b> is an open-world, action-adventure RPG set in the megalopolis of Night City, where you play as a cyberpunk mercenary wrapped up in a do-or-die fight for survival. Improved and featuring all-new free additional content, customize your character and playstyle as you take on jobs, build a reputation, and unlock upgrades. The relationships you forge and the choices you make will shape the story and the world around you. Legends are made here. What will yours be?
      <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/character.mp4"></video><br>Become an urban outlaw equipped with cybernetic enhancements and build your legend on the streets of Night City.
      <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/world.mp4"></video><br>
      Night City is packed to the brim with things to do, places to see, and people to meet. And it’s up to you where to go, when to go, and how to get there. 
      <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/tech.mp4"></video><br>
      Go on daring adventures and build relationships with unforgettable characters whose fates are shaped by the choices you make.
      <br><br><video muted="" preload="auto" loop="" autoplay="autoplay" style="margin: auto;display:block;width:100%"><source src="https://items.gog.com/not_a_cp/music.mp4"></video></center>

      * Exclusive Digital Comic - Cyberpunk 2077: Big City Dreams is available in English only.

      <p class="description__copyrights">
      CD PROJEKT®, Cyberpunk®, Cyberpunk 2077® are registered trademarks of CD PROJEKT S.A. © 2019
      CD PROJEKT S.A. All rights reserved. All other copyrights and trademarks are the property of their
      respective owners.
  </p>

`;

  return {
    props: {
      cover:
        'https://i0.wp.com/news.xbox.com/pt-br/wp-content/uploads/sites/8/2022/02/Cyberpunk2077_EN.jpg?fit=1920%2C1080&ssl=1',
      gameInfo: {
        title: 'Cyper Punk 2077',
        description:
          'Cyberpunk 2077 é um jogo eletrônico de RPG de ação desenvolvido pela CD Projekt Red e publicado pela CD Projekt. A história do jogo é ambientada em Night City, um mundo aberto situado no universo fictício de Cyberpunk.',
        price: '215,00'
      },
      gallery: mockGallery,
      description: descriptionHTML,
      details: mockGameDetails,
      upComingGames: mockGameCard,
      recommendedGames: mockGameCard,
      upComingHighLight: mockHighLight
    }
  };
}
