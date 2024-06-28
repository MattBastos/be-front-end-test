'use client';

import Image from 'next/image';
import tw from 'tailwind-styled-components';

export const MainContainer = tw.figure`
  flex
  items-center
  justify-center
  object-cover
  overflow-hidden
  w-[44px]
  h-[34px]
`;

export const Logo = tw(Image)`
  h-full
  w-full
  object-cover
`;
