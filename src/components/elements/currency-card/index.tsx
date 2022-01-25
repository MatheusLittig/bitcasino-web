import Image from 'next/image';
import * as S from './styles';
import Icon from '@/svgs/icon.svg';
import { FiX } from 'react-icons/fi';

export const CurrencyCard = () => {
  return (
    <S.Wrapper>
      <S.CurrencyContainer>
        <Image src={Icon} alt="Currewncy Icon" />

        <S.CurrencyInfo>
          <h3>BTC</h3>
          <p>7842.27 €</p>
        </S.CurrencyInfo>
      </S.CurrencyContainer>

      <S.CloseBtn>
        <FiX />
      </S.CloseBtn>
    </S.Wrapper>
  );
};
