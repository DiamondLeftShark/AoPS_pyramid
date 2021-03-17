/*Main interface for pyramid solver*/

//import/library declarations
const pyramid = require('./code/index.js');
const fs = require('fs');


//function declarations

/*parses file and returns problem in the following format:
{
  target: int
  pyramid: array
}
*/
function parseFile(fileName) {
  let problem = {};

  return problem;
}

//main body

//for each file provided, parse data from file and pass the total/pyramid values to the solvePyramid function.  Print the solution to the console.
for(let i = 2; i < process.argv.length; i++) {
  console.log(process.argv[i]);
}