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
