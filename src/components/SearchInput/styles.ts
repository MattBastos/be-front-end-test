import Image from 'next/image';
import tw from "tailwind-styled-components";

export const MainContainer = tw.section`
  w-full
  sm:w-[287px]
  gap-40
  relative
  flex
  items-center
  justify-center
`;

export const SearchInput = tw.input`
  flex
  flex-row
  items-center
  justify-between
  w-full
  h-12
  py-3
  px-4
  text-base
  font-normal
  leading-[18.75px]
  border
  rounded-lg
  bg-neutralWhite
  border-midGray
  focus:outline-none
`;

export const Icon = tw(Image)`
  absolute
  right-4
  w-6
  h-6
`;
