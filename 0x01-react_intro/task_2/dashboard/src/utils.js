function getFullYear() {
  const date = new Date();
  return date.getFullYear();
}

function getFooterCopy(isIndex) {
  if (isIndex === true) {
    return 'ALX';
  }
  return 'ALX main dashboard';
}

export { getFullYear, getFooterCopy };