import { CSS } from '@/styles/types';
import * as S from './styles';

type InputProps = {
  css?: CSS;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = ({ ...props }: InputProps) => {
  return (
    <S.Wrapper>
      <S.InputStyled {...props} />
    </S.Wrapper>
  );
};
