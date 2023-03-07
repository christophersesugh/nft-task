function truncateAddress(str, stringLen) {
  if (str.length <= stringLen) return str;
  const seperator = "...";
  const seperatorLen = seperator.length;
  const visibleChars = stringLen - seperatorLen;
  const firstChars = Math.ceil(visibleChars / 2);
  const lastChars = Math.floor(visibleChars / 2);
  const truncatedString =
    str.substring(0, firstChars) +
    seperator +
    str.substring(str.length - lastChars);
  return truncatedString;
}

export { truncateAddress };
