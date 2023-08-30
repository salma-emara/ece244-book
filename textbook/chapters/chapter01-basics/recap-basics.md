# Recap Basic Programming Concepts

Assuming that you have some experience programming earlier in another language other than C, in this section we will recap on basic programming concepts but in **C++**.

## Basic Structure of a C++ Program

In {numref}`hello-program`, we show an example of a C++ program that prints `Hello world!`. 

```{figure} ./images/hello-program.png
:alt: Structure of a C++ program
:class: with-shadow
:width: 400px
:align: center
:name: hello-program

A simple hello world program showing the structure of a C++ program
```

**Output**
<pre>
Hello world!
</pre>

`#include <iostream>` is an include statement that includes the standard input-output stream library. `iostream` has implementations of *streams*. We will use `cout` and `cin`, where `cout` is for output and `cin` is for input. The equivalent of `#include <iostream>` is `#include <stdio.h>` in C.

`using namespace std;` is a statement that declares using a container of names named `std`. Here, `namespace` means a container and `std` is the container we will use. `std` is short for standard.

`int main (){` is the `main` function which is the first function called when executing our program. 

`cout` is a standard output stream that we use to write output to the screen. 

`<<` is an operator. Just like `+` is an operator for addition, `<<` is an operator to output.

`"Hello world!"` is a string that we want to output. Notice that we have it between double quotes. 

`<< endl;` is the output operator again followed by `endl`, which is used to output a newline in C++. 

`return 0;` ends the program just as in C.

Recall that in C, the above program would look as follows:

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

In line 8, `cin` is used for input and `>>` is the operator used to get an input from the user and store it in the variable to the right, which `value`.

In line 10, we use `cout` to output the string `"The value entered is "` followed by `value`. To follow the string by a value stored in a variable, you have to separate them by `<<`. 

````{admonition} Equivalent in C
If we would write the above program in C, it look as follows.

**Code**
```{code-block} c
:emphasize-lines: 6
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

We also had to use the format specifier `%d` to specify the type of the variable. This is not the case in C++.
````

````{tip}
Many people get confused between `<<` and `>>` and when to use them. The direction of the operator can help you. If you are using `cout`, you use `<<` which points outside the page on the left. Otherwise, if you are using `cin`, then use `>>` which points inside the page. This is shown in the figure below.

```{figure} ./images/tip-on-io.png
:alt: Direction of operator
:class: with-shadow
:width: 400px
:align: center

Direction of the operator can help you decide when to use it.
```
````

## Common Data Representations

In C and C++, we have to define the data types of a variable at the time we declare it. The data types in C++ are the same as in C.  

### Integers

Integers are whole numbers, for example, $0$, $-23$ and $789$. We have different data types to store an integer. 

1. `int` stores an integer typically in 32 bits. If one bit stores the sign, we have 31 bits to store the number. Hence, `int` can store $-2^{31}$ to $0$ to $2^{31} - 1$.
2. `short` stores an integer typically in 16 bits. If one bit stores the sign, we have 15 bits to store the number. Hence, `short` can store $-2^{15}$ to $0$ to $2^{15} - 1$.
3. `long` stores an integer typically in 64 bits. If one bit stores the sign, we have 63 bits to store the number. Hence, `long` can store $-2^{63}$ to $0$ to $2^{63} - 1$.

For the purpose of this course, you will mainly be using `int`.

### Floating-point numbers

Floating-point numbers or fractional number or real numbers are numbers that have numbers after the decimal point. We have different data types to store floating-point numbers. They are stored similar to the standard notation, *e.g.* , e.g. $2.89 \times 10^{14}$ or $2.89e14$ or $2.89E14$. 

1. `float` stores a number using 32 bits, with 7 decimal digits of precision, which refers to the total number of significant digits, both before and after the decimal point.
2. `double` stores a number using 64 bits, with 15 decimal digits of precision.
3. `long double` typically stores a number using more than 64 bits, with obviously greater precision than `double`.

### Boolean 

In C, we had a `bool` data type used to represent a logical value, *i.e.* `true` or `false` in 8 bits. We had to include a library using `#include <stdbool.h>` to use this data type. Similarly, in C++, we have the same `bool` stored in 8 bits, but we don't need to include a library for it.

### Characters 

We can store text in C and C++ in `char` data type. It stores a single character using 8 bits. For example, `char letter = 'a'`, `char sign = '-'` where the character is enclosed between a single quote.

### Arrays

An array can represent multiple data elements of the same data type using a single variable name. Data can be of any type. For example, in `int arr[7] = {1, 2, 3, 4, 5, 6, 7};`, `arr` is an array that represented 7 different elements of the data type `int`. `arr[0]` would access the first element, `arr[1]` would access the second element, and so on till `arr[6]` that accesses the last element. 

### Strings

Using array, we can store more than a single character using one variable name, *i.e.* we can have a string or a sequence of characters in array of characters. In C, a string was a null-terminated array of characters. For example, `char h[6] = "Hello";`, where `h[5]` stored a null character `'\0'`. 

In C, including string library using `#include <string.h>` can let us gain access to functions like `strcmp`, `strlen` and `strcpy`.

In C++, we have a data type named `string` to store a sequence of characters. To use this data type, you need to include the string library using `#include <string>`. You can perform some operations on strings such as concatenating them using `+` or comparing them using `==`. For example, the following code, we take from the user the course department and code and check if it is `"ECE244"``.

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

We can do all opertions we 

### Arithmetic Operations

`+`

### Relational Expressions

`>=`

### Logical Conditions

`&&`

## Control Structures

## If-statements

if

## Loops

loops

[^1]: Inputs to programs are in **bold**.