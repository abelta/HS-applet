const insertEvery = (string, count, char) => {
  const matcher = new RegExp(`.{${count}}`, 'g');
  return string.match(matcher).join(char);
};

export default insertEvery;
