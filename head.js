// FUNCTION IMPLEMENTATION
const assertEqual = (actual, expected) =>{
  if (actual !== expected) {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  } else if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  }
};

const head = (i) => {
return i[0];
}


// TEST CODE

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 20);
// assertEqual("Bootcamp", "Bootcamp");
// assertEqual(1, 1);

