import { PageHero } from '@/components/elements';
import React from 'react';
import * as S from './styles';

export const HomeView = () => {
  return (
    <React.Fragment>
      <title>Home</title>

      <S.Wrapper>
        <PageHero />
      </S.Wrapper>
    </React.Fragment>
  );
};
