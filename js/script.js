//--1--
const names = ["Alex", "Bill", "Tom", "Andry"];
names.forEach((namesList, index) => console.log(`${index + 1}: ${namesList}`));
const user = [
  { eyeColor: "red", gender: "male", isActive: true },
  { eyeColor: "blue", gender: "female", isActive: false },
  { eyeColor: "black", gender: "female", isActive: true },
  { age: 11, gender: "male", isActive: true },
];
//--2--
const eyes = user.forEach((printColor) => {
  if (!printColor.eyeColor) {
    console.log("this user hasn't parametr eyes");
  } else {
    console.log(`This user has: ${printColor.eyeColor} eyes`);
  }
});
//--3--
const showGender = user.forEach((gender) => {
  if (!gender.gender) {
    console.log("This user hasn't parametr gender");
  } else {
    console.log(`This user is ${gender.gender}`);
  }
});
//--4--
const active = user.filter((isActive) => !isActive.isActive);
console.log(...active);
//--5--
const newUsers = [
  { name: "Nick", age: 18, isFamaly: false },
  { name: "Noa", age: 17, isFamaly: false, email: "noa@gmail.com" },
  { name: "Leo", age: 20, isFamaly: false },
  { name: "Den", age: 60, isFamaly: true, email: "den@gmail.com" },
];
const showUsers = newUsers.forEach((mail) => {
  if (mail.email) {
    console.log(`  User name is: ${mail.name};
  User age is: ${mail.age};
  User email is: ${mail.email}`);
  } else {
    console.log("This users haven't email");
  }
});
//--6--
const showMinAndMax = newUsers.forEach((min) => {
  if (min.age >= 18 && min.age < 30) {
    console.log(`This users can pass. User age is ${min.age}`);
  } else {
    console.log(`This users cann't pass. User age is ${min.age}`);
  }
});
