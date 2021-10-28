
const assertArraysEqual = (index1, index2) =>{
  if (eqArrays(index1, index2)) {
    console.log(`✅✅✅ ${index1} === ${index2}`);
  } else {
    console.log(`❌❌❌ ${index1} !== ${index2}`);
  }
};

const eqArrays = (index1, index2) => {
 
  if (index1.length !== index2.length) {
    return false;
  } else {
    for (let i = 0; i < index1.length; i++) {
      if (index1[i] !== index2[i]) {
        return false;
      }
    }
    return true;
  }
};


// FUNCTION IMPLEMENTATION

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  array.forEach(item => results.push(callback(item)));
  return results;
};

const results1 = map(words, word => word[0]);

// TESTING

console.log(assertArraysEqual(results1,[ 'g', 'c', 't', 'm', 't' ]));
