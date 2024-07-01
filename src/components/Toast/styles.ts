import tw from "tailwind-styled-components";

export const MainContainer = tw.section`
  mx-auto
  z-50
  gap-2
  w-[94%]
  sm:w-[80%]
  md:w-[60%]
  fixed
  top-20
  inset-x-0
  p-4
  rounded
  animate-fadeInDown
  flex
  items-center
  justify-center
  bg-red-500
`;

export const Message = tw.p`
  text-center
  text-xs
  md:text-base
  font-bold
  text-lightGray
`;
