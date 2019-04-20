// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
const grandparent = () => {
  console.log(`grandparent`);

  const parent = () => {
    console.log(`parent`);

    const child = () => {
      console.log(`child`);
    }
    child();
  }
  parent();
}
grandparent();

/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
  let count = 0;
  return () => {
    count++;
    return count;
  }
};
const counter1 = counter();
console.log(counter1());

// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
let counter2 = 0;
const counterFactory = () => {
  return {increment: () => {counter2++; console.log(counter2)},decrement: () => {counter2--; console.log(counter2)}};
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
console.log(counterFactory(increment));
