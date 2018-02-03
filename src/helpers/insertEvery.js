const insertEvery = (string, count, char) => {
  const matcher = new RegExp(`.{${count}}`, 'g');
  if (!string.match(matcher)) return '';
  return string.match(matcher).join(char);
};

export default insertEvery;
