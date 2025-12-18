// =======================
// Exercice 1 — Fonctions pures et effets de bord
// =======================

let counter = 0;

function add(a: number, b: number): number {
  return a + b;
}

function increment(): number {
  counter++;
  return counter;
}

console.log(add(2, 3));
console.log(add(2, 3));
console.log(increment());
console.log(increment());


// =======================
// Exercice 2 — Immutabilité
// =======================

type Student = { name: string; grade: number };

const student: Student = { name: "Léo", grade: 14 };

function updateGrade(
  student: Student,
  newGrade: number
): Student {
  return { ...student, grade: newGrade };
}

const updatedStudent = updateGrade(student, 18);

console.log(student);
console.log(updatedStudent);


// =======================
// Exercice 3 — Fonction d’ordre supérieur
// =======================

function applyNTimes(
  f: (x: number) => number,
  n: number,
  x: number
): number {
  let result = x;
  for (let i = 0; i < n; i++) {
    result = f(result);
  }
  return result;
}

const double = (x: number) => x * 2;

console.log(applyNTimes(double, 3, 1));


// =======================
// Exercice 4.1 — filter / map / reduce
// =======================

const numbers = [1, 2, 3, 4, 5, 6];

const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((acc, n) => acc + n, 0);

console.log(result);


// =======================
// Exercice 4.2 — sum / average / product
// =======================

const sum = (arr: number[]): number =>
  arr.reduce((acc, n) => acc + n, 0);

const average = (arr: number[]): number =>
  arr.length === 0 ? 0 : sum(arr) / arr.length;

const product = (arr: number[]): number =>
  arr.reduce((acc, n) => acc * n, 1);

console.log(sum(numbers));
console.log(average(numbers));
console.log(product(numbers));


// =======================
// Exercice 5.1 — find
// =======================

const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 15 },
  { name: "Charlie", age: 30 },
  { name: "Diana", age: 17 },
];

const firstAdult = users.find(u => u.age >= 18);
console.log(firstAdult);


// =======================
// Exercice 5.2 — some / every
// =======================

const hasMinor = users.some(u => u.age < 18);
const allAbove10 = users.every(u => u.age > 10);

console.log(hasMinor);
console.log(allAbove10);


// =======================
// Exercice 5.3 — includes
// =======================

const names = users.map(u => u.name);

console.log(names.includes("Alice"));
console.log(names.includes("Eve"));


// =======================
// Exercice 5.4 — flatMap
// =======================

const usersWithHobbies = [
  { name: "Alice", hobbies: ["climbing", "yoga"] },
  { name: "Bob", hobbies: ["gaming"] },
  { name: "Charlie", hobbies: ["reading", "hiking"] },
];

const allHobbies = usersWithHobbies.flatMap(u => u.hobbies);

console.log(allHobbies);


// =======================
// Exercice 5.5 — sort / slice
// =======================

const sortedByAge = [...users].sort((a, b) => a.age - b.age);
const twoYoungest = sortedByAge.slice(0, 2);

console.log(twoYoungest);


// =======================
// Exercice bonus — Cas concret
// =======================

type User = { name: string; age: number; country: string };

const data: User[] = [
  { name: "Alice", age: 25, country: "France" },
  { name: "Bob", age: 15, country: "France" },
  { name: "Charlie", age: 30, country: "Spain" },
  { name: "Diana", age: 22, country: "France" },
];

const frenchAdults = data
  .filter(u => u.age >= 18 && u.country === "France")
  .sort((a, b) => b.age - a.age);

const frenchAdultNames = frenchAdults.map(u => u.name);

const averageAge =
  frenchAdults.reduce((acc, u) => acc + u.age, 0) /
  frenchAdults.length;

console.log(frenchAdults);
console.log(frenchAdultNames);
console.log(averageAge);
