export const formatDate = (isoString: string | undefined) => {
  if (!isoString) return '';

  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  };

  return new Intl.DateTimeFormat('pt-BR', options).format(date);
};
