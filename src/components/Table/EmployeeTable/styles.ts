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
  mb-4
`;

export const Title = tw.h1`
  w-full
  text-h1
  mb-4
  text-neutralBlack
`;

export const Table = tw.table`
  w-full
  rounded-t-lg
  shadow-smallShadow
  bg-neutralWhite
`;

export const THead = tw.thead`  
  text-neutralWhite
  rounded-t-lg
  border-b
  bg-gradient-to-b
  from-gradientLightPrimary
  to-gradientDarkPrimary
`;

export const TH = tw.th`
  text-h2
  font-light
  p-2
  sm:py-3
  sm:px-4
  text-start
  text-sm
  sm:text-base
  md:text-lg
`;

export const TBodyRow = tw.tr`
  border-b
  text-start
`;

export const TD = tw.td`
  p-2
  sm:py-3
  sm:px-4
  text-sm
  sm:text-base
  md:text-lg
  text-start
  text-neutralBlack
`;
