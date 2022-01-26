import Image from 'next/image';
import * as S from './styles';
import Icon from '@/svgs/icon.svg';
import { FiX } from 'react-icons/fi';

interface CurrencyCardProps {
  currency: string;
  price: string;
  onDelete: () => void;
}

export const CurrencyCard = ({
  currency,
  price,
  onDelete,
}: CurrencyCardProps) => {
  return (
    <S.Wrapper>
      <S.CurrencyContainer>
        <Image src={Icon} alt="Currewncy Icon" width={40} height={49} />

        <S.CurrencyInfo>
          <h3>{currency}</h3>
          <p>{price}</p>
        </S.CurrencyInfo>
      </S.CurrencyContainer>

      <S.CloseBtn onClick={onDelete}>
        <FiX />
      </S.CloseBtn>
    </S.Wrapper>
  );
};
