import Image from 'next/image';
import * as S from './styles';

export const Header = () => {
  return (
    <S.Wrapper>
      <Image src="/svgs/logo.svg" width={160} height={50} alt="Bitcasino.io" />
    </S.Wrapper>
  );
};
