import Image from 'next/image';
import tw from "tailwind-styled-components";

export const MainContainer = tw.section`
  w-full
  flex
  flex-col
  items-center
  justify-center
`;

export const TitleAndSearchContainer = tw.section`
  w-full
  flex
  flex-col
  sm:flex-row
  items-center
  justify-between
  mb-8
`;

export const Title = tw.h1`
  w-full
  flex
  mb-4
  sm:mb-0
  text-[24px]
  font-medium
  text-neutralBlack
`;

export const Table = tw.table`
  w-full
  rounded-t-lg
  overflow-hidden
  bg-neutralWhite
  shadow-smallShadow
`;

export const THead = tw.thead`
  h-[47px]
  bg-gradient-to-b
  from-gradientLightPrimary
  to-gradientDarkPrimary
`;

export const TH = tw.th`
  px-6
  text-center
  sm:text-start
  text-base
  uppercase
  font-medium
  leading-[18.75px]
  text-neutralWhite
`;

export const TR = tw.tr`
  relative
  h-[49px]
  text-base
  text-center
  sm:text-start
  font-normal
  leading-[18.75px]
  border-b
  bg-neutralWhite
  shadow-smallShadow
`;

export const TD = tw.td`
  relative
  px-6
  text-neutralBlack
`;

export const IconContainer = tw.section`
  flex
  items-center
  justify-center
  w-full
  h-full
`;

export const Icon = tw(Image)`
  w-8
  h-8
  cursor-pointer
`;

export const EmployeeDetailContainer = tw.section`
  flex
  items-center
  justify-between
  mb-4
  border-b
  border-dotted
  border-midGray
`;

export const EmployeeDetailTitle = tw.h2`
  font-medium
  text-neutralBlack
`;
