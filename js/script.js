//--1--

// const names = ["Alex", "Bill", "Tom", "Andry"];
// const namesArr = [];
// const showRes = names.map((name) => (name += namesArr));
// console.log(showRes);

const users = [
  { eyeColor: "red", isMale: "male", isActive: true, name: "Tomass" },
  { eyeColor: "blue", isMale: "female", isActive: false, name: "Mary" },
  { eyeColor: "black", isMale: "female", isActive: true, name: "Hanna" },
  { age: 11, isMale: "male", isActive: true, name: "Bill" },
];
//--2--
// const eyes = users.filter((showEyes) => showEyes.eyeColor);
// console.log(eyes);

//--3--
// const showGender = users
//   .filter((user) => user.isMale === "male")//фильтрация на мужчину - женщинц
//   .map((user) => user.name);//перебор имен
// console.log(showGender);

//--4--
// const active = user.filter((isActive) => !isActive.isActive);
// console.log(...active);

//--5--

// Завдання 5 - для перебору масиву і пошуку використай метод find
const newUsers = [
  { name: "Nick", age: 18, isFamaly: false }, //1
  { name: "Noa", age: 17, isFamaly: false, email: "noa@gmai#l.com" },
  { name: "Leo", age: 20, isFamaly: false }, //1
  { name: "Den", age: 60, isFamaly: true, email: "den@gmail.com" },
];

// const findUserByEmail = (email) =>
//   newUsers.find((user) => user.email === email);

// const user = findUserByEmail("den@gmail.com");
// console.log(user);

//--6--

// Завдання 6 - як результат потрібен масив . Використай filter.
const showMinAndMax = newUsers
  .filter((min) => min.age >= 18 && min.age < 30)
  .map((userName) => userName.name);
console.log(showMinAndMax);
