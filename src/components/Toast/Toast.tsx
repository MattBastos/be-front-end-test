import * as S from './styles';

type ToastProps = {
  message: string;
};

export const Toast = ({ message }: ToastProps) => {
  return (
    <S.MainContainer>
      <S.Message>{message}</S.Message>
    </S.MainContainer>
  );
};
