// .map creates a new array from what you are doing it on

let color = ["blue", "burnt orange", "green", "red", "teal", "yellow"]

let reversedColors = color.map(color => {
  return color.split("").reverse().join("")
})

// Filter:
let fourLtrWords = color.filter( color => color.length === 4)
// will only add words with 4 letters into the new array
 
let fourLtrColors = []
for ( let i = 0; i < color.lenght; i++) {
  if(color[i].lenght === 4)
  fourLtrColors.push(color[i]);
}

// reduce

let number = [1,2,3,3,4,5,6];
let total = number.reduce( (accumulator, next) => accumulator + next);
total; 
