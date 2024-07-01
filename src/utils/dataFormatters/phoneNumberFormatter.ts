export const formatPhoneNumber = (phoneNumber: string) => {
  const numbersOnly = phoneNumber.replace(/\D/g, '');
  
  const countryCode = numbersOnly.substring(0, 2);
  const areaCode = numbersOnly.substring(2, 4);
  const part1 = numbersOnly.substring(4, 9);
  const part2 = numbersOnly.substring(9);

  return `+${countryCode} (${areaCode}) ${part1}-${part2}`;
}
