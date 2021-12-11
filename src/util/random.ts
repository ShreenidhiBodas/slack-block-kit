/**
 *  @param {number} len required length of random string
 *  @param {string} an an Optional (alphanumeric), "a" (alpha), "n" (numeric)
 *  @returns a random string of alphanumeric characters for the block id 
 */
const getRandomBlockId = (len: number, an?: string): string => {
  an = an && an.toLowerCase();
  var str = "",
    i = 0,
    min = an == "a" ? 10 : 0,
    max = an == "n" ? 10 : 62;
  for (; i++ < len;) {
    var r = Math.random() * (max - min) + min << 0;
    str += String.fromCharCode(r += r > 9 ? r < 36 ? 55 : 61 : 48);
  }
  return str;
}

export { getRandomBlockId };