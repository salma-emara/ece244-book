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

## Problem with Pass-By-Value

The main issue with pass-by-value is that its not always applicable to all cases. For example, if we were to write a function that takes in as input two variables and swaps their values, we would not be able to do so using pass-by-value. 

For example, the following code snippet attempts to swap the values of two variables `a` and `b` using pass-by-value but fails to do so as the value of `a` and `b` in the `main` function remains unchanged.

**Code**
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="4 9 14" output="Before swapping: a = 5, b = 10
After swapping: a = 5, b = 10">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
void swapByValue(int a, int b);
<br>
int main(void) {
  int a = 5, b = 10;
  cout << "Before swapping: " << "a = " << a << ", b = " << b << endl;
  swapByValue(a, b);
  cout << "After swapping: " << "a = " << a << ", b = " << b << endl;
  return 0;
}
<br>
void swapByValue(int a, int b) {
  int temp = a;
  a = b;
  b = temp;
}
</code-runner>
</pre>

```{figure} ./images/swapByValue-a.png
:alt: Pass by value
:class: with-shadow
:width: 600px
:align: center

`a` and `b` are passed by value to the `swapByValue` function. 
```

```{figure} ./images/swapByValue-b.png
:alt: Swap local variables
:class: with-shadow
:width: 600px
:align: center

Swap the local variables `a` and `b` in the `swapByValue` function. 
```

```{figure} ./images/swapByValue-c.png
:alt: Return to main function
:class: with-shadow
:width: 600px
:align: center

After returning to the `main` function, the values of `a` and `b` remain unchanged as changes happened in the local variables in the `swapByValue` frame. 
```

**In short, we cannot use pass-by-value when we expect the changes made to the input parameters to be reflected in the `main` function.** Instead, we can use either pass-by-reference or pass-by-pointer.

### Pass-By-Pointer

We want to ensure variables in the calling function are changed in the caller function. Instead of passing the values of the variables, we need to pass the addresses of the variables. This way, the function can access the memory locations of the variables and change their values directly. This is known as **pass-by-pointer**.

Back to the swapping problem, instead of passing the values of `a` and `b` to the `swapByValue` function, we need to pass the address of `a` and `b` to the function. The function will then swap the values of `a` and `b` using the addresses of `a` and `b`.

````{admonition} Pointers Recap
To pass the address of a variable to a function, you must use a pointer. A pointer is a variable that stores the memory address of another variable.

A pointer is declared by adding an asterisk `*` after the data type. For example, to declare a pointer to an integer, you would write `int *ptr;`. The pointer `ptr` can store the memory address of an integer variable. 

**Get an address of a variable.** To get an address of a variable, you use the reference operator `&` before the variable name. For example, in the following code the variable `ptr` is storing the address of the variable `a`. We get the address of `a` by writing `&a`.

```{code-block} cpp
int a;
int* ptr = &a;
```

**Get the value of a variable at an address.** To access the value stored at the memory address stored in a pointer, you use the dereference operator `*` before the pointer name. For example, to access the value stored at the memory address stored in `ptr`, you would write `*ptr`.

In {numref}`fig-pointer-recap`, we declare a pointer `ptr` and set it's value to the memory address of the variable `a`: `ptr = &a`. 

Then, we dereference `ptr` to access the value of `a` and change it to 10. In `*ptr = 10;`, `*ptr` is equivalent to `*(&a)`. As we dereference the address of `a`, we can change the value of `a` to 10.

Then, in `b = *ptr` we change the value of `b` to `a`. We access `a` through `*ptr` and assign it to `b` by writing `b = *ptr`. This is equivalent to `b = a`.

```{figure} ./images/pointer-recap.png
:name: fig-pointer-recap
:alt: Return to main function
:class: with-shadow
:width: 600px
:align: center


The pointer `ptr` stores the memory address of the variable `a` by setting `ptr = &a`. The value stored at the memory address stored in `ptr` is accessed by `*ptr`. We can change the value in `a` by dereferencing `ptr` using `*ptr = 10`. Also, we can change the value in `b` by assigning `a` to it through dereferencing `ptr`: `*ptr`.
```

````

The following code fixes the swap function to ensure the values of `a` and `b` are swapped using pass-by-pointer.

**Code**
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="4 9 14" output="Before swapping: a = 5, b = 10
After swapping: a = 10, b = 5">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
void swapByPointers(int* pa, int* pb);
<br>
int main(void) {
  int a = 5, b = 10;
  cout << "Before swapping: " << "a = " << a << ", b = " << b << endl;
  swapByPointers(&a, &b);
  cout << "After swapping: " << "a = " << a << ", b = " << b << endl;
  return 0;
}
<br>
void swapByPointers(int* pa, int* pb) {
  int temp = *pa;
  *pa = *pb;
  *pb = temp;
}
</code-runner>
</pre>

**[Line 4]** To pass the addresses of integers `a` and `b` to the swap function, we need to change the function prototype to accept pointers to integers. The function signature should be `void swapByPointers(int* pa, int* pb);`. The `*` operator is used after the data type to declare a pointer to an integer.

**[Line 9]** When the function is called, we pass the address of `a` and `b` by calling the function `swapByPointers(&a, &b);`. The `&` operator is used before `a` and `b` to get their addresses.

**[Line 14]** The function then receives the address of `a` into `pa` and the address of `b` into `pb`. 

**[Line 15 to 17]** In the function, we dereference the pointer `pa` to get access to `a` and `pb` to get access to `b`  in the main function. We then swap the values of `a` and `b` by assigning `*pb` to `*pa` and `*pa` to `*pb`.


```{figure} ./images/swapByPointer-a.png
:alt: Pass by pointer
:class: with-shadow
:width: 600px
:align: center

`a` and `b` are passed by pointer to the `swapByPointers` function. 
```

```{figure} ./images/swapByPointer-b.png
:alt: addresses of a and b are used to swap
:class: with-shadow
:width: 600px
:align: center

The addresses of `a` and `b` are used to change their values in the main function. `a` is accessed by dereferencing `pa` and `b` is accessed by dereferencing `pb`. 
```

```{figure} ./images/swapByPointer-c.png
:alt: Return from main function after swap by pointers
:class: with-shadow
:width: 600px
:align: center

When the `a` and `b` are swapped in the `swapByPointers` function, the changes are reflected in the `main` function. 
```

### Pass-By-Reference

Pass-by-pointer can be error prone and complex as the programmer has to take care of the syntax of `*` and `&` operators. To simplify the process, C++ provides a feature called **pass-by-reference**. 

**What is a reference?** In C++, a reference is an alias, an alternate identifier/name, for another variable. For example, in the following code, `a` is an integer. We create a reference to `a` by writing `int& ra = a;`, where the type of `ra` is `int&`. Any changes made to `ra` will affect `a` and vice versa.

```{code-block} cpp
int a = 5;
int& ra = a;
```

In the following code example, `ra` is a reference to the variable `a`. We use `ra` to change the value of `a` to 10. The value of `a` is then printed to the console.

Then, we use `ra` to change the value of `a` to `b`. **Note that `ra = b` does not reassign `ra` to refer to `b`.** Once `ra` was declared to refer to `a`, it will never refer to any other variable. 

**Code**
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" output="Point 1: ra = 5, a = 5
Point 2: ra = 10, a = 10
Point 3: ra = 12, a = 12">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
int main(void) {
  int a = 5, b = 12;
  int& ra = a; // ra is a reference to a
  cout << "Point 1: ra = " << ra << ", a = " << a << endl; 

  ra = 10; // changes the value of a to 10
  cout << "Point 2: ra = " << ra << ", a = " << a << endl; 

  ra = b; // changes the value of a to b
  cout << "Point 3: ra = " << ra << ", a = " << a << endl;  
  return 0;
}
</code-runner>
</pre>

A few important notes on references:
1. **A reference must be initialized when it is declared.** For example, we cannot do `int& ra;` as we must declare and initialize `ra` at the same time.
2. **A reference cannot be reassigned to another variable.** Once a reference is assigned to a variable, it cannot be reassigned to another variable. For example, `int& ra = a;` means `ra` is a reference to `a`. We cannot change `ra` to be a reference to another variable `b`.
3. **A reference is not a separate variable.** It does not have a separate memory location. It is only an alias to another variable.
4. **Don't confuse references with pointers.** References are not pointers. They are aliases to variables. The operators `*` and `&` are not used with references. The type of a reference is the same as the type of the variable it refers to. **We only add `&` after the type to declare a reference.**

**How can we use references to avoid the syntax-heavy pass-by-pointers?** To functions, we can pass references to variables and change the values of variables. For example, in the swap function, instead of passing the addresses of `a` and `b`, we can pass references to `a` and `b`.

**Code**
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="4 9 14" output="Before swapping: a = 5, b = 10
After swapping: a = 10, b = 5">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
void swapByRef(int& ra, int& rb);
<br>
int main(void) {
  int a = 5, b = 10;
  cout << "Before swapping: " << "a = " << a << ", b = " << b << endl;
  swapByRef(a, b);
  cout << "After swapping: " << "a = " << a << ", b = " << b << endl;
  return 0;
}
<br>
void swapByRef(int& ra, int& rb) {
  int temp = ra;
  ra = rb;
  rb = temp;
}
</code-runner>
</pre>

**[Line 4]** We change the function prototype to accept references to integers. The function signature should be `void swapByValue(int& ra, int& rb);`. The `&` operator is used after the data type to declare a reference to an integer.

**[Line 9]** When the function is called, we pass `a` and `b` to set the reference `ra` to `a` and `rb` to `b`. 

**[Line 14 to 17]** The function then sets the reference `ra` to `a` and `rb` to `b`. In the function, `ra` and `rb` are used to access the values of `a` and `b` in the main function. We then swap the values of `a` and `b` by assigning `ra` to `rb` and `rb` to `ra`.

## Reference vs. Pointer

References and pointers maybe confused with each other as they both allow you to access the memory address of a variable. However, there are some key differences between references and pointers:
1. Reference is safer than a pointer. A reference cannot be `NULL` and must be initialized when declared. A pointer can be `NULL` and can point to any memory location. Dereferencing a `NULL` pointer can cause a segmentation fault.
2. References do not have separate memory locations. They are aliases to variables. Pointers have separate memory locations and store the memory address of another variable.
3. A reference cannot be reassigned to another variable. Once a reference is assigned to a variable, it cannot be reassigned to another variable. A pointer can be reassigned to another memory location.
