import Link from 'next/link';

import * as S from './styles';

export const Logo = () => {
  return (
    <S.MainContainer>
      <Link href='/'>
        <S.Logo
          src={'/assets/images/logo/Logo.png'}
          alt='Logo'
          title='Logo'
          height={500}
          width={500}
          priority
          quality={100}
        />
      </Link>
    </S.MainContainer>
  )
}
