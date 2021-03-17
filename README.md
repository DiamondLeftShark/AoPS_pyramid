TBD: complete README.

## Assumptions
1. Input is tightly controlled by the user and should match the format in the prompt:
  * The first line will containt the target product.
  * The second and subsequent lines will be comma-delimited values for each row of the pyramid, starting from the top down.  This pyramid is expected to be in the correct format (e.g. each row will have one more record than the row above it).
2. There should be a valid solution for the given product and pyramid (though there is error handling if no valid solution is found).
3. Each pyramid has one correct solution.  If multiple solutions are possible for the given pyramid and product, the program will return only one.

## Instructions

This program runs in NodeJS: text files for each pyramid problem are accepted as arguments on the command line in the following format:

```
node pyramid.js [file] [file] ... [file]
```