import { Footer, Header } from '..';
import * as S from './styles';

export const AppLayout: React.FC = ({ children }) => {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Wrapper>
  );
};
