// 1) Make an array from the one below called fave_demo that contains only ages from 18 - 49
let ages = [12, 23, 89, 16, 34, 19, 2, 7, 45, 50, 26, 102];
let fave_demo = ages.filter(x => x>= 18 && x<= 49);
fave_demo;

// 2) Choose a loop method of your choice to get this result from this array:
let nums = [1, 2, 3, 4, "5", 6, "7"];

let newArray = nums.map((a, b, c) => +a + +c[b+1] );
newArray.pop();
newArray;
// expected result:
`[3, 5, 7, 9, 11, 13]`;

// 3) Capitalize 'the', insert a comma after 'teacher' and output "Yoda says, "The greatest teacher, failure is"

let yoda_quote = ["the", "greatest", "teacher", "failure", "is"];
// yoda_quote.splice(0,1, "The");
// yoda_quote.splice(2, 1, "teacher,")
// yoda_quote.unshift("Yoda says,")
let bodo = yoda_quote.map(a => {
  if(a === "the"){
    a = "The";}
  else if(a === "teacher" ) {
    a = "teacher,"
  } return a;
})
bodo;
console.log("Yoda says,", `"${bodo.reduce((x, b) => `${x} ${b}`)}"`);


// 4)  * Sort the following numbers in descending order
  //  * Remove any integers greater than 19.
  //  * Multiply each remaining number by 1.5 and then substract 1.
  //  * Then output (either in the DOM or the console) the sum of all the resulting numbers.

 

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

let mapy = integers.sort((a, b) => a - b).filter(a => a < 19).map(a => (a*1.5)-1).reduce((a, b) => a+b);
mapy;
