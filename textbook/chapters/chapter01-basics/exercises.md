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