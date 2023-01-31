import { Download } from '@styled-icons/boxicons-solid';

import * as S from './styles';

import { GameItemProps } from './types';

export const GameItem = ({
  title,
  image,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => {
  return (
    <S.Wrapper>
      <S.GameContent>
        <S.ImageBox>
          <img src={image} alt={title} />
        </S.ImageBox>
        <S.Content>
          <S.Title>
            {title}
            {!!downloadLink && (
              <S.DownloadLink
                role="link"
                href={downloadLink}
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Price>{price}</S.Price>
        </S.Content>
      </S.GameContent>

      {!!paymentInfo && (
        <S.PaymentContent>
          <div>{paymentInfo.purchaseDate}</div>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            <img src={paymentInfo.image} alt={paymentInfo.flag} />
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  );
};
