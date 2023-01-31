import { GameItemProps } from './types';

export const mockGameItem: GameItemProps = {
  image: 'https://source.unsplash.com/user/willianjusten/151x70',
  title: 'Red dead Redemption 2',
  price: 'R$ 215,00',
  downloadLink: 'https://wowgames.com/games/download',
  paymentInfo: {
    flag: 'mastercard',
    image: '/img/master-card.png',
    number: '**** **** **** 4326',
    purchaseDate: 'Purchase made on 07/20/2020 at 20:32'
  }
};
