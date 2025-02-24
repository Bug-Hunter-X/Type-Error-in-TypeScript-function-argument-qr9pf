# Type Error in TypeScript Function Argument

This repository demonstrates a common type error in TypeScript that occurs when passing an argument of an incorrect type to a function. The function `greeter` expects a string, but an array of strings is passed as the argument. This results in a type error. The solution involves either modifying the function signature to accept an array of strings or changing the argument to a single string.

## Bug

The `bug.ts` file contains the erroneous code.  The `greeter` function expects a single string.  However, an array of strings is passed to it resulting in a type error.

## Solution

The `bugSolution.ts` file presents two solutions:

1. Modify the `greeter` function to accept an array of strings and iterate to greet each person.
2. Modify the `user` variable to be a single string.