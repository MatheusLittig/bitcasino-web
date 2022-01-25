import { CSS } from '@/styles/types';
import * as S from './styles';

type ButtonProps = {
  css?: CSS;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <S.Wrapper {...props}>{children}</S.Wrapper>;
};
