import tw from "tailwind-styled-components";

export const MainContainer = tw.section`
  flex
  items-center
  justify-center
  h-full
`;

export const Content = tw.section`
  relative
`;

export const Spinner = tw.section`
  w-8
  h-8
  md:w-12
  md:h-12
  border-t-4
  border-gradientLightPrimary
  border-solid
  rounded-full
  animate-spin
`;
