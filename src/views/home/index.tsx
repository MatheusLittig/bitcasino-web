import { CurrencyCard, PageHero } from '@/components/elements';
import { AddCurrencyArea } from '@/components/modules';
import React from 'react';
import * as S from './styles';

export const HomeView = () => {
  return (
    <React.Fragment>
      <title>Home</title>

      <S.Wrapper>
        <S.HeroContainer>
          <PageHero />
          <AddCurrencyArea />
        </S.HeroContainer>
        <div>
          <CurrencyCard />
          <CurrencyCard />
          <CurrencyCard />
        </div>
      </S.Wrapper>
    </React.Fragment>
  );
};
