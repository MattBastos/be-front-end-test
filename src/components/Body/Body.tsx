import { ReactNode } from "react";

import * as S from './styles';

type BodyProps = {
  children: ReactNode | ReactNode[];
}

export const Body = ({ children }: BodyProps) => {
  return (
    <S.MainContainer>
      {children}
    </S.MainContainer>
  );
};
