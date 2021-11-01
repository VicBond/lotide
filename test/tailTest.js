const assertEqual = require('../assertEqual');
const tail = require('../tail')

//CODE TEST

assertEqual(tail(["Yo Yo", "Lighthouse", "Labs"]), 2); // ensure we get back two elements 
// Always fails

const result = tail(["Hello", "Lighthouse", "Labs"]);

assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"

