/*Main interface for pyramid solver*/

//import/library declarations
const pyramid = require('./code/index.js');
const fs = require('fs');


//function declarations

/*parses file and returns problem in the following format:
{
  target: int,
  pyramid: array
}
*/
function parseFile(fileName) {

  let problem = {};

  let rawArray = fs.readFileSync(fileName).toString().split(`\n`);

  //get target
  let targetValue = rawArray[0].replace('Target:', '').replace(' ','');
  problem.target = parseInt(targetValue);

  //get pyramid
  problem.pyramid = [];

  for(let i = 1; i < rawArray.length; i++) {

    let rawRowData = rawArray[i].split(`,`);
    let rowArray = [];

    for(j = 0; j < rawRowData.length; j++) {
      let rowNumber = parseInt(rawRowData[j].replace(' ', ''));
      rowArray.push(rowNumber);
    }

    problem.pyramid.push(rowArray);
  }

  return problem;
}

//main body
console.log("--------------");
console.log("PYRAMID SOLVER");
console.log("--------------");

if(process.argv.length <= 2) {
  console.log("ERROR: no file(s) specified");
  return -1;
}

console.log("Checking solutions for pyramid problems...");

//for each file provided, parse data from file and pass the total/pyramid values to the solvePyramid function.  Print the solution to the console.
for(let i = 2; i < process.argv.length; i++) {
  let fileName = process.argv[i];
  let problem = parseFile(fileName);

  console.log(`Now checking ${fileName}...`);
  console.log(`Target value is ${problem.target}`);
  console.log(`Target pyramid is...`);
  for(let j = 0; j < problem.pyramid.length; j++) {
    console.log(problem.pyramid[j]);
  }

  let result = pyramid.solvePyramid(problem.target, problem.pyramid);

  if(result === null) {
    console.log("Error: no valid result found!");
  } else {
    console.log(`The solution for the target value of ${problem.target} is ${result}`);
  }
}

return 1;