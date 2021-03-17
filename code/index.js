let solution = null;

//Entry function for recursive solution
const solvePyramid = function(target, pyramid) {
  //reset solution each function call
  solution = null;

  let startingProduct = pyramid[0][0];

  solvePyramidRecursive(target, pyramid, 1, 0, startingProduct, 'L');
  solvePyramidRecursive(target, pyramid, 1, 1, startingProduct, 'R');

  return solution;
}

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
    if(newProduct !== target) {
      return -1;
    } else {
      solution = currentPath;
      return 1;
    }
  }
  //otherwise, continue recursing
  else {

    let leftPath = currentPath.slice() + 'L';
    let rightPath = currentPath.slice() + 'R';
    solvePyramidRecursive(target, pyramid, currentRow + 1, currentCol, newProduct, leftPath);
    solvePyramidRecursive(target, pyramid, currentRow + 1, currentCol + 1, newProduct, rightPath);
  }

}

//export declarations
module.exports.solvePyramid = solvePyramid;