import { ReactNode } from 'react';

import * as S from './styles';

type LayoutProps = {
  children: ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <S.MainContainer>
      {children}
    </S.MainContainer>
  );
}
