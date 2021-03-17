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
function solvePyramid(target, pyramid) {
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

/*
Main code starts here:
1. Get target and pyramid
2. Pass target and pyramid to solvePyramid
3. Return solution on command line when complete
*/