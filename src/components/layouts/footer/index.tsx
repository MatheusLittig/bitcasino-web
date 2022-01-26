import * as S from './styles';

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.Content>
        <S.Paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean mattis
          eros et leo mattis luctus. Vivamus ullamcorper elit sit amet velit
          consequat, quis feugiat risus luctus. In quis enim sit amet turpis
          venenatis commodo non at odio.
        </S.Paragraph>
      </S.Content>
      <S.Figure src="/pictures/figure.png" alt="Figure" />
    </S.Wrapper>
  );
};
