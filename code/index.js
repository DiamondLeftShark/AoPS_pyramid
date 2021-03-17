/*sample test from prompt:
Target: 720
2
4,3
3,2,6
2,9,5,2
10,5,2,15,5
expected solution: LRLL
*/

//Given a target number and pyramid of numbers, find sequence of traversal that returns the correct product using every digit visited.
//
const solvePyramid = function(target, pyramid) {
  console.log("TBD");
  //recursive solution:
  //start at top of pyramid, and traverse nodes on the left and right
  //at next node, calculate current product of all numbers in sequence and traverse left and right nodes: track current sequence as well
  //At last line, after calculating sequence:
  //if product matches target, return the correct sequence.
  //if product does not match, return ''

  //traversal notes:
  //left/right should be previous parent index +0 (L) or +1 (R)
}

//recursive helper function for solvePyramid
function solvePyramidRecursive() {

}

//TBD: export functions here
module.exports.solvePyramid = solvePyramid;