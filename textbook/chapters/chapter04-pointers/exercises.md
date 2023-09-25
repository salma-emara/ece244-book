# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 9 in Fall 2022 Midterm Exam [Intermediate]**

Write down the standard output of the following program. Remember to write two "Check Point", since partial marks are given based on these "stop points". You might find it helpful to write down the memory layout.

```{code-block} cpp
#include <iostream>
using namespace std;

int i[5] = {0, 2, 4, 6, 8};
int* p;

void foo() {
  cout << *p << endl;
  ++(*p);
  ++p;
}

void bar() {
  for (int i = 0; i < 3; ++i) {
    foo();
  }
}

int main() {
  p = i;
  bar();
  cout << "Check Point 1" << endl;
  p = i;
  foo();
  cout << "Check Point 2" << endl;
  return 0;
}
```

```{admonition} Answer
:class: dropdown
<pre>
0
2
4
Check Point 1
1
Check Point 2
</pre>
```

**Question 3 in Fall 2021 Final Exam [Intermediate]**

Consider the following code snippet that manipulates pointers in a main function of a C++ program. 

```{code-block} cpp
int* p = nullptr;
int* q = nullptr;
int* r = nullptr;
int** t = &p;
int** s = &q;
r = p;
p = new int;
q = new int;
*p = 5;
*q = 2;
**s = *p + **t;
```

Which of the following statements (that come after the above snippets executes) prints 5 to the standard output? You may assume `iostream` is included and the `std` namespace is used. Choose all correct answers.

1. `cout << r;`
2. `cout << *t;`
3. `cout << *q;`
4. `cout << *p;`
5. `cout << **t;`
6. `cout << *r;`
7. `cout << *s;`
8. `cout << (**s) / 2;`

```{admonition} Answer
:class: dropdown
4. `cout << *p;`
5. `cout << **t;`
8. `cout << (**s) / 2;`
```

In progress!