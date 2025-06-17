function getFullYear() {
  const date = new Date();
  return date.getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex === true) {
    return 'Holberton School';
  }
  return 'Holberton School main dashboard';
}

export { getFullYear, getFooterCopy };