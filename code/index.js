/*sample test from prompt:
Target: 720
2
4,3
3,2,6
2,9,5,2
10,5,2,15,5
expected solution: LRLL
*/

let solution = null;

//Entry function for recursive solution
const solvePyramid = function(target, pyramid) {
  solution = null;

  let startingProduct = pyramid[0][0];

  solvePyramidRecursive(target, pyramid, 1, 0, startingProduct, 'L');
  solvePyramidRecursive(target, pyramid, 1, 1, startingProduct, 'R');

  return solution;
}


  //recursive solution:
  //start at top of pyramid, and traverse nodes on the left and right
  //at next node, calculate current product of all numbers in sequence and traverse left and right nodes: track current sequence as well
  //At last line, after calculating sequence:
  //if product matches target, return the correct sequence.
  //if product does not match, return ''

  //traversal notes:
  //left/right should be previous parent index +0 (L) or +1 (R)

//recursive helper function for solvePyramid
function solvePyramidRecursive(target, pyramid, currentRow, currentCol, currentProduct, currentPath) {

  //if solution has already been found, exit out of recursion early.
  if(solution !== null) {
    return -1;
  }

  //check for value at pyramid[currentRow][currentCol], multiply value by currentProduct to get new product
  let nodeValue = pyramid[currentRow][currentCol];
  let newProduct = currentProduct * nodeValue;

  //exit case: last row
  //if currentProduct != target, return -1
  //if currentProduct = target, set solution = currentPath
  if(pyramid.length -1 === currentRow) {
    //TBD: add exit case logic
    console.log("TBD: end reached!");
    return 1;
  }
  //otherwise, continue recursing
  else {
    //TBD: copy currentPath to new variable to avoid Javascript pointer issues
    solvePyramidRecursive(target, pyramid, currentRow + 1, currentCol, newProduct, /*TBD L*/);
    solvePyramidRecursive(target, pyramid, currentRow + 1, currentCol + 1, newProduct, /*TBD: R*/)
  }

}

//export declarations
module.exports.solvePyramid = solvePyramid;