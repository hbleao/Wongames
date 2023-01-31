export type PaymentInfo = {
  number: string;
  flag: string;
  image: string;
  purchaseDate: string;
};

export type GameItemProps = {
  image: string;
  title: string;
  price: string;
  downloadLink?: string;
  paymentInfo?: PaymentInfo;
};
