# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 5 in Fall 2019 Midterm Exam [Easy]**

Consider a (non-member) function called `doIt`, which takes a single object of type `DayOfYear` and returns a single object also of type `DayOfYear`. You may assume that the class `DayOfYear` is correctly implemented and that `DayOfYear.h` is included. Which of the
following implementations of this function is problem-free? 

1.
    ```{code-block} cpp
    DayOfYear doIt(DayOfYear& arg) {
      DayOfYear temp;
      temp = arg;
      return (arg);
    }
    ```

    ```{admonition} Answer
    :class: dropdown

    Has no problem. We return `arg` by value and we create a copy of `arg` using copy constructor.

    ```

2.
    ```{code-block} cpp
    DayOfYear doIt(DayOfYear& arg) {
      DayOfYear temp;
      temp = arg;
      return (temp);
    }
    ```

    ```{admonition} Answer
    :class: dropdown

    Has no problem. We return `temp` by value and we create a copy of `temp` using copy constructor.

    ```

3. 
    ```{code-block} cpp
    DayOfYear& doIt(DayOfYear& arg) {
      DayOfYear temp;
      temp = arg;
      return (*this);
    }
    ```

    ```{admonition} Answer
    :class: dropdown

    Has a problem, because in the question it says `doIt` is a non-member function. Since this is a pointer to an object on which the member function is invoked, it can only be accessed in a member function. In short, we cannot access `this` in `doIt` function.
    ```

4. 
    ```{code-block} cpp
    DayOfYear& doIt(DayOfYear& arg) {
      DayOfYear temp;
      temp = arg;
      return (temp);
    }
    ```

    ```{admonition} Answer
    :class: dropdown

    Has a problem, but it is quite tricky. `temp` is a local only to the function `doIt` since it was defined only inside the function. `temp` will go out of scope or disappear from the memory the moment we return from `doIt` function. If we return `temp` by reference, and `temp` actually is non-existing after the function call, the behavior is undefined if we try accessing whatever `doIt` returns.

    ```

**Question 5 in Fall 2019 Final Exam [Intermediate]**

Consider the following class definition and implementation.

```{code-block} cpp
#include <iostream>
using namespace std;

class Duo {
 private:
  int* p;
  int* q;

 public:
  Duo(int a, int b) {
    p = new int;
    *p = a;
    q = new int;
    *q = b;
  }
  int get_a() { return *p; }
  int get_b() { return *q; }
  void set_a(int a) { *p = a; }
  void set_b(int b) { *q = b; }
  Duo funnyMultiply(Duo& rhs) {
    Duo temp(0, 0);
    *(temp.p) = (*p) * *(rhs.p);
    *(temp.q) = (*q) * *(rhs.q);
    *(rhs.p) = *(rhs.p) - 1;
    *(rhs.q) = *(rhs.q) - 1;
    return (temp);
  }
  Duo print() {
    cout << *p << " " << *q << endl;
    return (*this);
  }
};
```

The following `main` program uses class `Duo`.

```{code-block} cpp
int main() {
  Duo X(3, 5);
  Duo Y(8, 9);
  Duo Z(2, 4);
  Z = X.funnyMultiply(Y);
  Z.print();  // Statement 1
  Z.set_a(1);
  Z.set_b(2);
  Z.print();  // Statement 2
  X.print();  // Statement 3
  Y.print();  // Statement 4
  Duo W(6, 12);
  Duo V(2, 3);
  W.print().funnyMultiply(V).print();  // Statement 5
  W.print();                           // Statement 6
  // Point A
  cout << "Program is done" << endl;
  return (0);
}
```

1. Write the output produced by each of the labeled statement (Statement 1 to
Statement 6) in main. Write your answer in the table below.

    |   Grade   |   Output   |
    | --------- | ---------- |
    |Statement 1|            |
    |Statement 2|            |
    |Statement 3|            |
    |Statement 4|            |
    |Statement 5|            |
    |Statement 6|            |

    ```{admonition} Answer
    :class: dropdown
    |   Grade   |   Output   |
    | --------- | ---------- |
    |Statement 1| 24 45      |
    |Statement 2| 1 2        |
    |Statement 3| 3 5        |
    |Statement 4| 7 8        |
    |Statement 5| 6 12<br>12 36  |
    |Statement 6|  6 12      |
    ```

2. How many integers exist in memory in the form of a memory leak when execution
reaches Point A in the main function above? Write your answer in the box below.

    ```{admonition} Answer
    :class: dropdown
    Z initially had p and q pointing to two integers, and we lost access to them when we pointed to p and q from the object returned by value in `Z = X.funnyMultiply(Y);`.

    Another two integers were lost in `W.print().funnyMultiply(V).print();` after returning from `funnyMultiply` function. 

    Total, we have 4 integers in the memory exist in the form of a memory leak. 
    ```

In progress!