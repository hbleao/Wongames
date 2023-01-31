export type PaymentCardsProps = {
  number: string;
  flag: string;
  image: string;
};

export type PaymentOptionsProps = {
  cards?: PaymentCardsProps[];
  handlePayment: () => void;
};
