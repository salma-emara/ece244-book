# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 7 in Fall 2018 Midterm Exam [Intermediate]**

The following is the definition/implementation of a class called `Foo`.

```{code-block} cpp
class Foo {
 private:
  int priv;

 public:
  Foo(int pv) { priv = pv; }
  Foo(const Foo src) { priv = src.priv; }
  Foo& operator=(Foo& rhs) const {
    priv = rhs.priv;
    return this;
  }
  int getPriv() const { return priv; }
  void setPriv(int pv) { priv = pv; }
};
```

Compiling the above definition/implementation results in one or more errors. Re-write the class so it is error-free. Write your answer (the entire definition/implementation) in the box below. You may want to underline in your answer below the changes you made.

````{admonition} Answer
:class: dropdown
1. The copy constructor should take its argument as a const reference. Otherwise, it will call itself infinitely. Line 7 changed to add `&` after `const Foo`. 

2. The assignment operator (operator=) should not be declared `const` as we want to change `priv`.

3. The assignment operator (operator=) returns `Foo&`, while `this` is `Foo*` type.

```{code-block} cpp
:emphasize-lines: 7, 8, 10
:linenos:
class Foo {
 private:
  int priv;

 public:
  Foo(int pv) { priv = pv; }
  Foo(const Foo& src) : priv(src.priv) {}
  Foo& operator=(const Foo& rhs) {
    priv = rhs.priv;
    return *this;
  }
  int getPriv() const { return priv; }
  void setPriv(int pv) { priv = pv; }
};
```
````

**Question 9 in Fall 2018 Midterm Exam [Intermediate]**

Consider the following definition/implementation of a class called `Shape` that appears in the file: `Shape.h`.

**Shape.h**
```{code-block} cpp
#include <iostream>
using namespace std;
class Shape {
 private:
  int ID;

 public:
  Shape() {
    ID = 0;
    cout << "Constructor 1 " << ID << endl;
  }
  Shape(int id) {
    ID = id;
    cout << "Constructor 2 " << ID << endl;
  }
  Shape(const Shape& s) {
    ID = s.ID;
    cout << "Constructor 3 " << ID << endl;
  }
  ~Shape() { cout << "Destructor " << endl; }
  Shape& operator=(Shape rhs) {
    cout << "Operator= " << ID << endl;
    ID = rhs.ID;
    return *this;
  }
  int getID() const { return ID; }
  void setID(int id) { ID = id; }
};
```

The following is a main program that uses the above class.

**main.cpp**
```{code-block} cpp
#include <iostream>
using namespace std;
#include "Shape.h"
int getID(Shape s) {
  return s.getID();
}
int getShapeID(Shape& s) {
  return s.getID();
}
int main() {
  Shape circle(5);
  Shape* line1[2];
  Shape* polygon = new Shape(circle);
  line1[0] = polygon;
  line1[1] = polygon;
  *polygon = circle;
  Shape line2[2];
  line2[0] = *polygon;
  cout << (*(line1[0])).getID() << endl;
  cout << getID(*line1[1]) << endl;
  cout << getShapeID(*line1[0]) << endl;
  return 0;
}
```

What is the output of the program? Select one of the answers from the table below.

|  Grade  |   Output   |
| ------- | ---------- |
|    A    | Constructor 2 5<br>Constructor 3 5<br>Constructor 3 5<br>Operator= 5<br>Destructor<br>Constructor 1 0<br>Constructor 1 0<br>Constructor 3 5<br>Operator= 0<br>Destructor<br>5<br>5<br>5<br>Destructor<br>Destructor<br>Destructor<br>|
|    B    |Constructor 2 5<br>Constructor 3 5<br>Constructor 3 5<br>Operator= 5<br>Destructor<br>Constructor 1 0<br>Constructor 1 0<br>Constructor 3 5<br>Operator= 0<br>Destructor<br>5<br>Constructor 3 5<br>5<br>Destructor<br>5<br>Destructor<br>Destructor<br>Destructor|
|    C    |Constructor 2 5<br>Constructor 1 0<br>Constructor 1 0<br>Constructor 3 5<br>Constructor 3 5<br>Operator= 0<br>Destructor<br>Constructor 3 5<br>Operator= 0<br>Destructor<br>Constructor 3 5<br>Operator= 5<br>Destructor<br>Constructor 1 0<br>Constructor 1 0<br>Constructor 3 5<br>Operator= 0<br>Destructor<br>5<br>Constructor 3 5<br>5<br>Destructor<br>5<br>Destructor<br>Destructor<br>Destructor<br>Destructor<br>Destructor|
|    D    |Constructor 2 5<br>Destructor<br>Constructor 1 0<br>Constructor 1 0<br>Destructor<br>5<br>5<br>Destructor<br>5<br>Destructor<br>Destructor<br>Destructor|
|    E    |Constructor 2 5<br>Constructor 3 5<br>Constructor 3 5<br>Operator= 5<br>Destructor<br>Constructor 1 0<br>Constructor 1 0<br>Constructor 3 5<br>Operator= 0<br>Destructor<br>5<br>Constructor 3 5<br>5<br>Destructor<br>Constructor 3 5<br>5<br>Destructor<br>Destructor<br>Destructor<br>Destructor |
|    F    |Constructor 2 5<br>Constructor 3 5<br>Constructor 3 5<br>Destructor<br>Constructor 1 0<br>Constructor 1 0<br>Constructor 3 5<br>Destructor<br>5<br>Constructor 3 5<br>5<br>Destructor<br>5<br>Destructor<br>Destructor<br>Destructor|
|    G    |None of the above|

```{admonition} Answer 
:class: dropdown
B
```

In progress!

