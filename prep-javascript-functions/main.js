function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

var sum = addTwoNumbers(4, 4);
console.log('The sum is', sum);

function convertHoursToMinutes(hours) {
  return 60 * hours;
}

var convertTime = convertHoursToMinutes(2);
console.log('Hours to Minutes:', convertTime);

function getGreeting(name) {
  return 'Hello ' + name;
}

var greeting = getGreeting('World');
console.log(greeting);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var product = addAndMultiplyBy5(10, 5);
console.log(product);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var result = multiplyAndDivideBy5(35, 10);
console.log(result);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var resultOfsubtraction = subtractTwoNumbers(22, 7);
console.log(resultOfsubtraction);

function getCircleCircumference(num) {
  return (2 * Math.PI * num);
}

var output = getCircleCircumference(5);
console.log(output);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Mickey', 'Mouse');
console.log(fullName);

function cube(number) {
  return number * number * number;
}

var getCube = cube(5);
console.log(getCube);
