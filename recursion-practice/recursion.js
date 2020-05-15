function countSheep(sheep) {
  if (sheep === 0) {
    console.log('all sheep jumped');
    return;
  }
  console.log(`${sheep}: Another jumped over`);
  countSheep(sheep - 1);
}
countSheep(3);

function powerCalculator(base, exp) {
  if (exp === 1) {
    return base;
  } else return base * powerCalculator(base, exp - 1);
}
powerCalculator(10, 5);


function reverseStr(str) {
  if (str === '') {
    return '';
		}
  return str[str.length - 1] + reverseStr(str.slice(0, str.length - 1));
		
}
let str="abc";
reverseStr(str);
