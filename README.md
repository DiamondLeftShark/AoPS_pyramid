## About

This program is a solution for a programming prompt provided by Art of Problem Solving (AoPS):

"A Pyramid Descent Puzzle consists of a pyramid of positive integers. To solve the puzzle, you must find a path that traverses the pyramid from top to bottom visiting numbers whose product is a given target value. Each step in the path must go down one row, and go either one step to the left or one step to the right.

"For example, suppose the pyramid below has a target value of 2:

1

2, 3

4, 1, 1

"A solver for this puzzle should output LR, indicating that the correct path starts from the 1 on top, goes Left to the 2 on the second row, then goes Right to the 1 in the center of the bottom row. (Note in particular that the successful path cannot go through the 1 at the end of the bottom row.)"

## Assumptions

1. Input is tightly controlled by the user and should match the format in the prompt:
  * The first line will contain the target product.  (The line may include "Target:" for clarity).
  * The second and subsequent lines will be comma-delimited values for each row of the pyramid, starting from the top down.  This pyramid is expected to be in the correct format (e.g. each row will have one more record than the row above it).

  Check the sample files in the test folder for proper formatting.

2. There should be a valid solution for the given product and pyramid (though the system will return a message if no valid solution is found).

3. Each pyramid has one correct solution.  If multiple solutions are possible for the given pyramid and product, the program will return only one.

4. Though not required by the puzzle, the application is capable of solving for pyramids with negative numbers as the target and/or pyramid values.

## Instructions

This program runs in NodeJS: text files for each pyramid problem are accepted as arguments on the command line in the following format:

```
node pyramid.js [file] [file] ... [file]
```

Files will be read and processed in the order specified on the command line.  For each file, the program will print the target value, the pyramid, and the correct solution (if any).

The program assumes relative filepath from the root directory unless otherwise specified, so moving files to test into the same directory or subfolder is advised.

A test command has been included for use with Node Package Manager, and can be run when NPM is installed with the following command:

```
npm run test
```

This command will run the numbered test files in the test subfolder: expected solutions are included in the notes.txt file for comparison.
