//1
function max(a, b) {
  return a > b ? a : b;
}


// 2

function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }
  return result;
}

let x = prompt("x?", '');
let n = prompt("n?", '');

if (n < 1) {
  console.log(`Неверно введено значение степени ${n} используйте число больше 1`);
} else {
  console.log(pow(x, n));
}


//3

let days = 'February';

switch (days) {
  case "January":
  case "March":
  case "May":
  case "July":
  case "August":
  case "October":
  case "December":
    console.log("31");
    break;
  case "April":
  case "June":
  case "September":
  case "November":
    console.log("30");
    break;
  case "February":
    console.log("28");
    break;
}

//4

function calcNumber(numOne, numTwo, odd, even) {
  let i = numOne * numTwo;

 if (i % 2 === 0) {
   even ();
 } else {
   odd ();
 }
}

function showEvenNumber() {
  console.log('Четное');
}

function showOddNumber() {
  console.log('Нечетное');
}

calcNumber (5, 5, showOddNumber, showEvenNumber);

//5

let num = +prompt('Введите число от 1 до 18');

for (let i = 1; i <= num; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } else if (num <= 0 || num === '' || num === null || num >= 19) {
    console.log('Введите число от 1 до 18');
    break;
  }
}





