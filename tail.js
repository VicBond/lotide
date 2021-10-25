// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) =>{
  if (actual !== expected) {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  }
};


// Test Case: Check the original array 
const words = ["Yo Yo", "Lighthouse", "Labs"];


const tail = () => {
  let newArr = words.slice(1);
  return newArr;
}

const result = tail(words);

assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(result.length, 2); // ensure we get back two elements

// TEST CODE