# Functions

All code must have at least one function, *i.e.* the `main` function. This `main` function is the entry point of the program, or the first function that is called when the program is executed.

Functions allow you (the programmer) to divide your code into pieces and reuse code instead of repeating it. Most importantly, functions allow you to write code that is easier to debug and maintain.

To define a function, you must specify the input parameters, the return type, and the function body. The general syntax of a function is as follows:


```{code-block} cpp
return_type function_name(parameter_list) {
    // function body
}
```

For example, the following function finds the factorial of a number:
    
```{code-block} cpp
int factorial(int n) {
  int result = 1;
  for (int i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
``` 

To use the function in a program, you must call the function. The general syntax of a function call is as follows:



## Pass-by-value

## Pass by pointers

Example

## Pass by reference

Example

## Differences

1. 