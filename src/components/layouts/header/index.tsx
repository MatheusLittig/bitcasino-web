import Image from 'next/image';
import * as S from './styles';
import Logo from '@/svgs/logo.svg';

export const Header = () => {
  return (
    <S.Wrapper>
      <Image src={Logo} alt="Bitcasino.io" width={185} height={40} />
    </S.Wrapper>
  );
};
