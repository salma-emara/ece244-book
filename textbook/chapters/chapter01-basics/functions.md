# Functions

A function is a sequence of instructions that can be called by its name multiple times in a program.

All code must have at least one function, *i.e.* the `main` function. This `main` function is the entry point of the program, or the first function that is called when the program is executed.

Functions allow you (the programmer) to divide your code into pieces and reuse code instead of repeating it. Most importantly, functions allow you to write code that is easier to debug and maintain.

## `n` choose `k` example

Consider the problem of calculating the number of ways to choose 2 cards from a set of 5 cards, or `k` elements from a set of `n` elements. This is a common problem in combinatorics and is often written as `n choose k`. The formula for `n choose k` is 

$\binom{n}{k} = \frac{n!}{k!(n-k)!}$,


where `n!` is the factorial of `n`. The factorial of `n` can be calculated as `n = n * (n - 1) * ... * 3 * 2 * 1`. For example, `5! = 5 * 4 * 3 * 2 * 1 = 120`.

We want to write a program that takes in the values of `n` and `k` and calculates the number of ways to choose `k` elements from `n` elements. Since there are multiple steps in the calculation, we can divide the program into two main functions: one function to calculate the factorial of a number and another function to calculate `n choose k`.

### Defining a function

To define a function, you must specify the input parameters, the return type, and the function body. The general syntax of a function is as follows:

```{code-block} cpp
return_type function_name(parameter_list) {
    // function body
}
```

For example, the following function finds the factorial of a number:
    
```{figure} ./images/function-factorial.png
:alt: The anatomy of a function that calculates the factorial of a number
:class: with-shadow
:width: 600px
:align: center

The anatomy of a function that calculates the factorial of a number. 
```

To use the function in a program, you must call the function. The general syntax of a function call requires the **function name** and the **input values**. For example, to call the `factorial` function, you would write `factorial(n)` to calculate the factorial of a number stored in `n` as shown below in line 15.

**Code**
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="15" input="5" output="Enter a positive integer: <b>5</b>
The factorial of 5 is 120">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
int factorial(int n) {
  int result = 1;
  for (int i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
int main(void) {
  int n;
  cout << "Enter a positive integer: ";
  cin >> n;
  cout << "The factorial of " << n << " is " << factorial(n) << endl;
  return 0;
}
</code-runner>
</pre>

### Multiple parameters

To calculate `n choose k`, we need to define another function that takes in two parameters: `n` and `k`. The function should call the factorial function to calculate $\binom{n}{k} = \frac{n!}{k!(n-k)!}$. The function will return the number of ways to choose `k` elements from `n` elements. The function signature is as follows:

```{code-block} cpp
int nChooseK(int n, int k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}
```

It is **important** to note that when calling the `nChooseK` function, you must pass in the values of `n` and `k` in their respective order as arguments.

**Code**
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="12 13 14" input="5 2" output="Enter the value of n: 
<b>5</b>
Enter the value of k: 
<b>2</b>
The number of ways to choose 2 from 5 is 10">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
int factorial(int n) {
  int result = 1;
  for (int i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
<br>
int nChooseK(int n, int k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}
<br>
int main(void) {
  int n, k;
  cout << "Enter the value of n: " << endl;
  cin >> n;
  cout << "Enter the value of k: " << endl;
  cin >> k;
  cout << "The number of ways to choose " << k;
  cout << " from " << n << " is ";
  cout << nChooseK(n, k) << endl;
  return 0;
}
</code-runner>
</pre>

### Function prototypes

When the compiler compiles a program, it reads the code from top to bottom. If it observes a function call before the function definition, it will raise an error.

In the previous example, the `factorial` function was defined first, followed by the `nChooseK` function, and then the `main` function, because `factorial` function was called in `nChooseK`, and `nChooseK` was called in `main`. **Functions cannot be called before they are defined.** 

Determining the order of function definitions can be sometimes challenging. For example, if function `a` calls function `b`, and in turn function `b` calls function `a`, the order of function definitions before the `main` function cannot be determined. 

To solve this issue, you can define the **function prototypes** before the `main` function to inform the compiler about the function signature. This way you can call functions in the `main` before implementing them. Then, later after the `main` function, you implement all the functions defined before the `main` function. **It is a good practice to always define function prototypes before the `main` function.**

A function prototype is a declaration of the function that includes the function name, return type, and input parameter list. The general syntax of a function prototype is as follows:

```{code-block} cpp
return_type function_name(input_parameter_list);
```

To rewrite the code in the previous example using function prototypes, you would define the `factorial` and `nChooseK` function prototypes before the `main` function and implement them after the `main` function as shown below:

**Code**
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="12 13 14" input="5 2" output="Enter the value of n: 
5
Enter the value of k: 
2
The number of ways to choose 2 from 5 is 10">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
// Function Prototypes
int factorial(int n);
int nChooseK(int n, int k);

// Main Function
int main(void) {
  int n, k;
  cout << "Enter the value of n: " << endl;
  cin >> n;
  cout << "Enter the value of k: " << endl;
  cin >> k;
  cout << "The number of ways to choose " << k;
  cout << " from " << n << " is ";
  cout << nChooseK(n, k) << endl;
  return 0;
}

// Function Implementations
int factorial(int n) {
  int result = 1;
  for (int i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}

int nChooseK(int n, int k) {
  return factorial(n) / (factorial(k) * factorial(n - k));
}
</code-runner>
</pre>

**In this case, the order of function prototypes and function definitions does not matter.** The compiler will know the function signature and will not raise any errors.

## Pass-by-value

When passing the input parameter `n` to the `factorial` function, the function creates a local version of `n` that is separate from the `n` in the calling function. This is known as pass-by-value. In pass-by-value, the value of `n` in the `main` function is passed to the value of the local variable `n` in the `factorial` function. Any changes made to the `n` inside the `factorial` function do not affect the original parameter in the calling function. This is because changes are made to the local version of `n` in the `factorial` function.

In the following image, we visualize what happens in the main memory when `n` is passed to the `factorial` function. When the `factorial` function is called:

1. a memory frame that stores the local variables of `factorial`, such as `n` and `result`, is created
2. the changes in the local `n` and `result` of `factorial` will not affect any variables elsewhere
  
When the `factorial` function returns, the memory frame that stores the local variables of `factorial` is removed from the main memory.

```{figure} ./images/pass-by-value-factorial.png
:alt: Local version of n in the factorial function
:class: with-shadow
:width: 600px
:align: center

There is a local version of `n` in the factorial function in the main memory. 
```

In the next section, we will discuss flaws with pass-by-value and introduce two alternative methods: pass-by-pointer and pass-by-reference.

