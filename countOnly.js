// ASSERT EQUAL

const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ ${actual} !== ${expected}`);
  }
};

// FUNCTION IMPLEMENTATION

const countOnly = (allItems, itemsToCount) => {
  const result = {};
for (let item of allItems){
  if (itemsToCount[item]){
  if (result[item]){
    result[item] += 1;
  } else {
    result[item] = 1;
  }
}
}
console.log(result);
return result;
}

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const inTheList = { 
  "Jason": true,
  "Karima": true,
  "Fang": true,
  "Agouhanna": false,
}

const result1 = countOnly(firstNames, inTheList);

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
