'use client';

import { ChangeEvent } from 'react';

import * as S from './styles';

type SearchInputType = {
  searchTerm: string;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchInput = ({
  searchTerm,
  handleSearchChange,
}: SearchInputType) => {
  return (
    <S.MainContainer>
      <S.SearchInput
        type="search"
        name="search"
        placeholder="Pesquisar"
        value={searchTerm}
        onChange={handleSearchChange}
      />

      <S.Icon
        src={'/assets/images/icons/search.png'}
        alt='Logo'
        title='Logo'
        height={500}
        width={500}
        priority
        quality={100}
      />
    </S.MainContainer>
  )
};
