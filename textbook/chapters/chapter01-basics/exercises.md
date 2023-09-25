# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 2 in Fall 2022 Midterm Exam [Easy]**

When you compile the following program, what happens? If there is an error, explain what the error is (one sentence max).

```{code-block} cpp 
#include <iostream>
using namespace std;

int main() {
  hello(1);
  return 0;
}
void hello(int i) {
  cout << "Hello !" << i << endl;
  return;
}
```

```{admonition} Answer
:class: dropdown
There will be a compilation error because hello() is called before it's declared.
```

**Question 4 in Fall 2022 Midterm Exam [Easy]**


```{code-block} cpp
#include <iostream>
using namespace std;

void increment(int& a) {
  a = a + 1;
}
void decrement(int a) {
  a = a - 1;
}
void doubling(int* a) {
  *a = (*a) * 2;
}

int main() {
  int a = 3;
  increment(a);
  cout << a << endl;
  decrement(a);
  cout << a << endl;
  doubling(&a);
  cout << a << endl;
  return 0;
}
```



```{admonition} Answer
:class: dropdown
The output is

<pre>
4
4
8
</pre>
```

**Question 6 in Fall 2022 Midterm Exam [Easy]**:

Compared to C, passing by reference is introduced in C++. Both of the following two functions can be used to swap the value of two integers:

```{code-block} cpp
void swap_by_p(int* a, int* b); // swap version.1
void swap_by_r(int& a, int& b); // swap version.2
```

1. Write the implementations for these two functions (no more than 4 lines of code for each function)

    ```{code-block} cpp
    void swap_by_p(int* a, int* b) {

    }
    void swap_by_r(int& a, int& b) {

    }
    ```

    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    void swap_by_p(int* a, int* b) {
      int temp = *a;
      *a = *b;
      *b = temp;
    }

    void swap_by_r(int& a, int& b) {
      int temp = a;
      a = b;
      b = temp;
    }
    ```
    ````

2. If given two int variables `x` and `y`, write a function call that swaps the value of `x` and `y`, using `swap_by_p`.

    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    swap_by_p (&x, &y);
    ```
    ````

3. If given two int variables `x` and `y`, write a function call that swaps the value of `x` and `y`, using `swap_by_r`.

    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    swap_by_r (x, y);
    ```
    ````

**Question 7 in Fall 2022 Midterm Exam [Easy]**

Ellie writes a program to make a simple database for ECE students who like drinking soy milk from 2T2 to 2T6. She designs two classes: `student` and `ECE`, and puts them into different files below. The main function is in the `main.cpp`.

**ECE.h**
```
#ifndefine ECE
#define ECE

#include "student.h"

class ECE{
  ...
};
#endif
```

**ECE.cpp**
```
#include "ECE.h"

ECE::ECE(){
  ...
}
```

**student.h**
```
#include <string>

class Student{
  ...
};
```

**student.cpp**
```
#include "student.h"

Student::Student(){
  ...     
}
```

**main.cpp**
```
#include "ECE.h"
#include "student.h"
int main(){
     ...
}
```

1. Ellie tries to compile this program with g++. What's the Unix (i.e., terminal) command that compiles the entire program using one command, which generates an executable called `small_database`?
   
    ```{admonition} Answer
    :class: dropdown
    <pre>
    g++ ECE.cpp student.cpp main.cpp -o small_database
    </pre>
    ```

2. However, it fails to compile. Can you point out the compile-time error and fix this error for her? 

    ```{admonition} Answer
    :class: dropdown
    No header guard in student.h
    ```

3. With your help, Ellie has fixed the compile-time error. Now, Ellie wants to use separate compilation learned from ECE244 to compile her project. Write down all the Unix commands necessary to separately compile the above files and generate an executable `small_database`.

    ```{admonition} Answer
    :class: dropdown
    <pre>
    g++ -c student.cpp -o student.o
    g++ -c ECE.cpp -o ECE.o
    g++ -c main.cpp -o main.o
    g++ student.o ECE.o main.o -o small_database
    </pre>
    ```

4. Ellie then changes some code in `ECE.cpp`. Write down the Unix commands necessary to regenerate the executable by compiling the smallest number of files needed. Assume the generated executable is called `small_database`.

    ```{admonition} Answer
    :class: dropdown
    <pre>
    g++ -c ECE.cpp -o ECE.o
    g++ student.o ECE.o main.o -o small_database
    </pre>
    ```

**Question 2 Fall 2018 Midterm Exam**

You are given a program that has a main function and 3 classes: First, Second and Third. For each of these classes, you have a definition file and an implementation file. Thus, you have seven
files in total: First.h, First.cpp, Second.h, Second.cpp, Third.h, Third.cpp and main.cpp. All the files exist in the same directory. 

The first few lines of each file are shown below.
The rest of the contents of each file is irrelevant to the question and is shown as `...`. You may assume the definition/implementation files are error-free.

**First.h**
```{code-block} cpp
#ifndef FIRST_H
#define FIRST_H
class First {
  ...
};
#endif
```

**First.cpp**
```{code-block} cpp
#include “First.h”
First::First() {
  ...
}
```

**Second.h**
```{code-block} cpp
#ifndef SECOND_H
#define SECOND_H
class Second {
  ...
};
#endif
```

**Second.cpp**
```{code-block} cpp
#include “First.h”
#include “Second.h”
Second::Second() {
  ...
}
```

**Third.h**
```{code-block} cpp
#ifndef THIRD_H
#define THIRD_H
class Third {
  ...
};
#endif
```

**Third.cpp**
```{code-block} cpp
#include “Second.h”
Third::Third() {
  ...
}
```

**main.cpp**
```{code-block} cpp
#include “First.h”
#include “Second.h”
#include “Third.h”
int main() {
  ...
}
```

The files are to be separately compiled and then linked into a single executable called `main`.

1. Write down the Unix commands necessary to separately compile the above files and generate the executable.

    ```{admonition} Answer
    :class: dropdown
    <pre>
    g++ -c First.cpp -o First.o
    g++ -c Second.cpp -o Second.o
    g++ -c Third.cpp -o Third.o
    g++ -c main.cpp -o main.o
    g++ First.o Second.o Third.o main.o -o main
    </pre>
    ```

2. You modify the file `Second.cpp`. Write down the Unix commands necessary to regenerate the executable by compiling the smallest number of files possible.

    ```{admonition} Answer
    :class: dropdown
    <pre>
    g++ -c Second.cpp -o Second.o
    g++ First.o Second.o Third.o main.o -o main
    </pre>
    ```

3. You modify the file `First.h`. Write down the Unix commands necessary to regenerate the executable by compiling the smallest number of files possible.

    ```{admonition} Answer
    :class: dropdown
    <pre>
    g++ -c First.cpp -o First.o
    g++ -c Second.cpp -o Second.o
    g++ -c main.cpp -o main.o
    g++ First.o Second.o Third.o main.o -o main
    </pre>
    ```

