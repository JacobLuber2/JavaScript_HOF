// Exercise 1 Section
function plus(number) {
return function(plusNumber) {
return number + plusNumber
};
};
let plus15 = plus(15);
console.log(plus15(10));
console.log(plus15(35));

// exercise 2
let users = [
    {
      name: "Frodo",
      age: 50,
      score: 85,
      isActive: false,
    },
    {
      name: "Sam",
      age: 38,
      score: 94,
      isActive: true,
    },
    {
      name: "Merry",
      age: 36,
      score: 82,
      isActive: true,
    },
    {
      name: "Pippin",
      age: 26,
      score: 77,
      isActive: false,
    },
  ];
  users.forEach((user) => {
console.log(user.name);
  });
// exercise 3
users.map((user) => {
console.log({name: user.name, score: user.score});
});
// exercise 4
console.log(users.filter((user) => user.isActive == true));
// exercise 5
console.log(users.sort((a, b) => b.score - a.score));
// exercise 6
let total = users.reduce((sum, user) => sum + user.score, 0);
console.log(total / users.length);