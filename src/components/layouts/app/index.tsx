import { Footer, Header } from '..';
import * as S from './styles';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
      <S.Background src="/pictures/bg.png" alt="Background" />
      <S.Figure src="/pictures/figure.png" alt="Figure" />
    </S.Wrapper>
  );
};
