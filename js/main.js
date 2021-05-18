const array = [2, 4, 7, 5, 4, 3, 8];
const a = array.filter(function (x, i, self) {
  return self.indexOf(x) === i;
});
console.log(a);

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}
let checkyear = 2100;
if (leapYear(checkyear)) {
  console.log(checkyear + '年はうるう年です。');
} else {
  console.log(checkyear+'年はうるう年ではありません。')
}