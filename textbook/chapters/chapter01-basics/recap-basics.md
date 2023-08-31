# Programming Basics

Assuming that you have some experience programming earlier, in this section we will recap on basic programming concepts *using* **C++**. Since we assume your first exposure to programming was in C, we may compare C++ to C. 

## Basic Structure of a C++ Program

In {numref}`hello-program`, we show an example of a C++ program that prints `Hello world!`. 

```{figure} ./images/hello-program.png
:alt: Structure of a C++ program
:class: with-shadow
:width: 800px
:align: center
:name: hello-program

A simple hello world program showing the structure of a C++ program
```

**Output**
<pre>
Hello world!
</pre>

`#include <iostream>` is an include statement that includes the standard input-output stream library. `iostream` has implementations of *streams*, which are a sequence of characters transferred between the program and input-output devices. We will use `cout` and `cin`, where `cout` is for output and `cin` is for input. The equivalent of `#include <iostream>` is `#include <stdio.h>` in C.

`using namespace std;` is a statement that declares using a container of names named `std`. Here, `namespace` means a container and `std` is the container we will use. `std` is short for standard.

`int main (){` is the `main` function which is the first function called when executing our program. 

`cout` is a standard output stream that we use to write output to the screen.

`<<` is an operator. Just like `+` is an operator for addition, `<<` is an operator to output.

`"Hello world!"` is a string that we want to output. Notice that we have it between double quotes. 

`<< endl;` is the output operator again followed by `endl`, which is used to output a newline in C++. 

`return 0;` exits the main function just as in C.

Recall that in C, the above program would look as follows:

**Code**
```{code-block} c
#include <stdio.h>

int main() {
    printf("Hello world!\n");
    return 0;
}
```

### A program to input a value

If we would like to write a program that takes a number from the user, we would use `cin` as follows.

**Code**
```{code-block} cpp
:linenos:
:emphasize-lines: 8, 10
#include <iostream>
using namespace std;

int main() {
  int value = 0;
  cout << "Enter a value: ";

  cin >> value; // operator to input is >> 

  cout << "The value entered is " << value << endl;
  return 0;
}
```

**Output [^1]**
<pre>
Enter a value: <b>7</b>
The value entered is 7
</pre>

In line 5, we declare an integer as we would do in C.

In line 8, `cin` is used for input and `>>` is the operator used to get an input from the user and store it in the variable to the right, which is `value`.

In line 10, we use `cout` to output the string `"The value entered is "` followed by `value`. To follow the string by the value stored in a variable, you have to put a `<<` before the variable. 

````{admonition} Equivalent in C
If we would write the above program in C, it look as follows.

**Code**
```{code-block} c
:emphasize-lines: 6
:linenos:
#include <stdio.h>

int main() {
    int value;
    printf("Enter a value: ");
    scanf("%d", &value);
    printf("The value entered is %d\n", value);
    return 0;
}
```
In line 6, we used `scanf` function to take input from the user.

In C, we have to use format specifiers, e.g. `%d`, to specify the type of the variable to print it or to take it as input. Note that this is not the case in C++.
````

````{tip}
Many people get confused between `<<` and `>>` and when to use them. The direction of the operator can help you. If you are using `cout`, you use `<<` which points outside the page on the left. Otherwise, if you are using `cin`, then use `>>` which points inside the page. This is illustrated in the figure below.

```{figure} ./images/tip-on-io.png
:alt: Direction of operator
:class: with-shadow
:width: 400px
:align: center

Direction of the operator can help you determine its use case.
```
````

## Common Data Representations

In C and C++, we define the data type of a variable when we declare it, *e.g.* in `int i;`, we declare a variable `i` of `int` type. The data types in C++ are similar to C. In the following subsections, we recap on common data types in C++.

### Integers

Integers are whole numbers, for example, $0$, $-23$ and $789$. We have different data types to store an integer. 

1. `int` stores an integer typically in 32 bits, *i.e.* 4 bytes. Recall that 8 bits make a byte. If one bit stores the sign, we have 31 bits to store the number. Hence, `int` can store $-2^{31}$ to $0$ to $2^{31} - 1$.
2. `short` stores an integer typically in 16 bits. If one bit stores the sign, we have 15 bits to store the number. Hence, `short` can store $-2^{15}$ to $0$ to $2^{15} - 1$.
3. `long` stores an integer typically in more than 32 bits with obviously a wider range of numbers. 

For the purpose of this course, we recommend using `int` to store integers. For example, `int apples = 6;`

### Floating-point numbers

Floating-point numbers or fractional number or real numbers are numbers that have numbers after the decimal point, for example, $2.9$, $-118.763$. We have different data types to store floating-point numbers. The floating-point representation does often resemble scientific notation., *e.g.* $2.89 \times 10^{14}$ is represented as $2.89e14$ or $2.89E14$. 

1. `float` stores a number using 32 bits, with 7 decimal digits of precision, which refers to the total number of significant digits, both before and after the decimal point.
2. `double` stores a number using 64 bits, with 15 decimal digits of precision.
3. `long double` typically stores a number using more than 64 bits, with obviously greater precision than `double`.

For the purpose of this course, we recommend the usage of `double` data type to store floating-point numbers. For example, `double inchesInCm = 2.54;`

### Boolean 

In C, we had a `bool` data type used to represent a logical value, *i.e.* `true` or `false` in 8 bits. We had to include a library using `#include <stdbool.h>` to use this data type. Similarly, in C++, we have the same `bool` stored in 8 bits, but we don't need to include a library for it. For example, `bool isRaining = false;`

### Characters 

We can store a single character in `char` data type using 8 bits. For example, `char letter = 'a'`, `char sign = '-'` where the character is enclosed between a single quote.

### Arrays

To store multiple data elements of the same data type using a single variable name, we can use an array. Data can be of any type. For example, in 

```
int arr[7] = {1, 2, 3, 4, 5, 6, 7};
```

`arr` is an array that represents 7 different elements of the data type `int`. `arr[0]` would access the first element, `arr[1]` would access the second element, and so on till `arr[6]`, which accesses the last element.

### Strings

An array can store more than a single character using one variable name. This can be a **string** in C if it was a null-terminated array of characters. For example, in
```
char h[6] = "Hello";
```

we declare a string named `h` that stores the string `"Hello"`, where `h[5]` stores a null character `'\0'`.

In C, including the string library using `#include <string.h>` can give access to string functions like `strcmp`, `strlen` and `strcpy`. 

However, in C++, we have a data type named `string` to store a sequence of characters. To use this data type, you need to include the string library using `#include <string>`. You can perform some operations on strings such as concatenating them using `+` or comparing them using `==`. For example, in the following code, we take from the user the course department and code and check if it is `"ECE244"``.

**Code**
```{code-block} cpp
#include <iostream>
#include <string>

using namespace std;

int main() {
  string courseDepart, courseNum, courseCode;
  cout << "Enter course department and code: ";
  cin >> courseDepart >> courseNum;
  courseCode = courseDepart + courseNum;
  if (courseCode == "ECE244") {
    cout << "This course is titled Programming Fundamentals" << endl;
  }
  return 0;
}
```

**Output[^1]**
<pre>
Enter course department and code: <b>ECE 244</b>
This course is titled Programming Fundamentals
</pre>

## Operators

Like most programming languages, in C++, we have:

1. **Arithmetic** operators such as `+`, `-`, `*`, `/` and `%` with brackets `()` to help us define the precedence of operations. For example, `5 % 3` is the remainder of 5 divided 3 is 2.
2. **Assignment** operators which assigns an evaluation/value to a variable. For example, in `int x = 7 + 3;` the `=` assigns the value of `7 + 3` to `x`. In addition to `=`, we have `+=`, `-=`, `*=`, `/=` and `%=`. These assign to the variable on the left the variable itself plus/minus/multiplied/divided/modulo the value on the right. For example, `x += 3` is equivalent to `x = x + 3`.
3. **Increment and decrement** operators such as `++` and `--`. For example, `i++;` would increment `i` by 1.
4. **Relational** operators such as `==` (equal), `!=` (not equal), `<` (less than), `>` (greater than), `<=`(less than or equal), `>=` (greater than or equal) that compare two values and get evaluated to `true` or `false`. For example, `7 < 5` would be evaluated as `false`.
5. **Logical** operators such as `&&` (and), `||` (or) and `!` (not). For example, if we want to evaluate a number is between 5 and 15 (inclusive), then the number has to be greater than or equal 5 and less than or equal 15. This would translate to this expression `number >= 5 && number <= 15`. 
6. `sizeof()` operator would find the number of bytes it takes to store a data type. For example, `sizeof(int)` would evaluate to 4, as it takes 4 bytes to store an `int`.

## Control Structures

Control structures are used to control the flow of execution of a program, *e.g.*, if-statements and while, for and do-while loops.

### If-statements

In C and C++, if-statements allow you to take a decision in a program to do something if a condition is `true`. If we want to take another decision if the condition is `false`, an `else` to the `if` would do it. For example, in the following code, we try finding out if the shape is a rectangle or square based on the height and width entered by the user. 

**Code**
```{code-block} cpp
#include <iostream>
using namespace std;

int main(void) {
  int height = 0, width = 0;
  cout << "Please enter the height and width of your shape: ";
  cin >> height >> width;

  if (height == width) {
    cout << "The shape is a square." << endl;
  } else {
    cout << "The shape is a rectangle." << endl;
  }
  return 0;
}
```

**Output[^1]**
<pre>
Please enter the height and width of your shape: <b>76 4</b>
The shape is a rectangle.
</pre>

### Loops

On the other hand, loops help you execute a block of code repeatedly as long as a condition is `true`. There are three main loop structures:

1. **A while loop** checks the condition of the loop, then if `true` executes the body of the loop. Otherwise, statements after the loop are executed. For example, the following code prints numbers from 1 to 10.

    **Code**
    ```{code-block} cpp
    #include <iostream>
    using namespace std;

    int main() {
      int i = 1;
      while (i <= 10) {
        cout << i << " ";
        i++;
      }
      cout << endl;
      return 0;
    }
    ```
   **Output**
   <pre>
   1 2 3 4 5 6 7 8 9 10
   </pre>

2. **A do-while loop** executes the body of the loop first then check the condition. If the condition is `true`, the body of the loop would be executed again. Otherwise, the statements after the loop will be executed. For example, the following code would ask the user to enter a number between 1 and 10, and if the entered number is within the range, it would exit the loop. Otherwise, it will continue to prompt the user. In short, the body of the loop will be executed at least once.
    
    **Code**
    ```{code-block} cpp
    #include <iostream>
    using namespace std;

    int main(void) {
      int num;

      do {
        cout << "Please enter a number between 1 and 10 (inclusive): ";
        cin >> num;
      } while (num < 1 || num > 10);

      cout << "The number entered is " << num <<  endl;
      return 0;
    }
    ```
    **Output[^1]**
    <pre>
    Please enter a number between 1 and 10 (inclusive): <b>-10</b>
    Please enter a number between 1 and 10  (inclusive): <b>8</b>
    The number entered is 8</pre>

3. **A for loop** also does repeat a block of code depending on a condition, but it has a different structure with three expressions: *initialization*, where you initialize a state of a variable for example, *condition*, which determines if the program will execute the body of the loop, and *increment*, where you change the state of the variable to get closer to change the condition. 



[^1]: Inputs to programs are in **bold**.