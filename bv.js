const charMap = 'fZodR9XQDSUm21yCkr6zBqiveYah8bt4xsWpHnJE7jL5VG3guMTKNPAwcF';
const seqMap = [11, 10, 3, 8, 4, 6, 2, 9, 5, 7];
const nXor = 177451812n;
const nAdd = 100618342136696320n;

function a2b(av) {
  av = (BigInt(av) ^ nXor) + nAdd;
  s = ["B", "V"];
  for (var i = 0n; i < 10n; i++)
    s[seqMap[i]] = charMap[(av / (58n ** i)) % 58n];
  return s.join("");
}

function b2a(bv) {
  var sum = 0n;
  for (var i = 0n; i < 10n; i++)
    sum += BigInt(charMap.indexOf(bv[seqMap[i]])) * (58n ** i);
  return String((sum - nAdd) ^ nXor);
}
