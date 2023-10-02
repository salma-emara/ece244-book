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

2. The assignment operator (operator=) should not be declared `const` as we want to change `priv` in line 8.

3. The assignment operator (operator=) returns `Foo&`, while `this` is `Foo*` type. Change `this` to `*this` in line 10.

```{code-block} cpp
:emphasize-lines: 7, 8, 10
:linenos:
class Foo {
 private:
  int priv;

 public:
  Foo(int pv) { priv = pv; }
  Foo(const Foo& src) { priv = src.priv; }
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

**Question 8 in Fall 2021 Midterm Exam [Intermediate]**

Consider the definition of a class called `Mystery`, which is in the file `Mystery.h`.  

**Mystery.h**

```{code-block} cpp
#include <iostream>
using namespace std;

class Mystery {
 private:
  // Private members not shown

 public:
  // Public members not shown
};
```

Now consider the following program that uses the `Mystery` class. The program compiles and runs correctly.

**main.cpp**
```{code-block} cpp
#include <iostream>
#include <string>
using namespace std;

#include "Mystery.h"

int main() {
  string n = "hello";
  Mystery x(3, n);
  Mystery* p = new Mystery(n, 4);
  Mystery y(x);
  x.invert(1, n);
  if (x == y)
    x = y / *p;
  delete p;

  return 0;
}
```

What public members of the class Mystery **must exist** (either written by the programmer or given by C++) for the above code to compile with no errors? Non-member functions are not allowed. Write necessary variable declarations and/or method prototypes.

````{admonition} Answer
:class: dropdown
```{code-block} cpp
Mystery(const Mystery&);
// used here: Mystery y(x);

Mystery(string, int);
// used here: Mystery(n, 4)

Mystery(int, string);
// used here: Mystery x(3, n);

void invert(int, string);
// used here: x.invert(1, n)

bool operator==(const Mystery& left, const Mystery& right);
// used here: x == y

Mystery operator/(const Mystery& left, const Mystery& right);
Mystery& operator=(const Mystery&);
// used here: x = y / *p;
  
~Mystery();
// used here: delete p;
```
````

**Question 2 in Fall 2017 Midterm Exam [Intermediate]**

Consider the following program. 

```{code-block} cpp
class Point {
  int x;
  int y;

 public:
  Point(int i, int j);
  Point increment_x();
  Point increment_y();
  void print() const;
};
Point::Point(int i, int j) {
  x = i;
  y = j;
}
Point Point::increment_x() {
  ++x;
  return *this;
}
Point Point::increment_y() {
  ++y;
  return *this;
}
void Point::print() const {
  cout << "(" << x << "," << y << ")" << endl;
}
int main() {
  Point a(2, 3);
  // Evaluation is done left to right
  a.increment_x().increment_y().print();
  a.print();
  return 0;
}
```

Assuming the C++ compiler does not optimize away copying of objects. Write the output produced by the program.

```{admonition} Answer
:class: dropdown
<pre>
(3,4)
</pre>
`a.increment_x()` is evaluated first, and would increment the `x` of object `a` making `x` of `a` equal to 3. This would return a new object with `x = 3` and `y = 3`. On this new object, you would call `increment_y()`, which would increment `y` to 4 and return a new object with `x = 3` and `y = 4`. Printing this new object would produce `(3,4)`.
<pre>
(3,3)
</pre>
Printing object `a` would output `(3,3)` due to the previous `a.increment_x()` call. 
```

**Question 8 in Fall 2022 Midterm Exam [Challenging]**

Vector is widely used in the engineering and science world. Suppose we create a class called `vector_2d`. It can be used to represent a 2D vector, with `x` and `y` as its values. The partial code of this vector is shown below.

```{code-block} cpp
class vector_2d {
 private:
  double x;
  double y;

 public:
  vector_2d() {
    x = 0;
    y = 0;
  }
  vector_2d(double x_, double y_) {
    x = x_;
    y = y_;
  }
  double get_x() const { return x; }
  double get_y() const { return y; }
  // Add overloaded operator+= here
}
```

Implement `operator+=` for `vector_2d`, as a member function. 

If `a = <x1, y1>` and `b = <x2, y2>`, after `a += b`, `a` becomes `<x1 + x2, y1 + y2>` whereas `b` is unchanged. Write no more than 5 lines of code.

````{admonition} Answer
:class: dropdown

```{code-block} cpp
vector_2d& vector_2d::operator+=(const vector_2d& rhs) {
  // need to do the changes on the members of the lhs object
  x += rhs.x;
  y += rhs.y;
  // need to return the lhs object.
  // Return by reference is to make sure we don't return a copy
  return *this;
}
```
NOTE: the return type cannot be `void`, because we need to support chained `+=`.
Example: `a += b += 2;`
which is equivalent to:
`b += 2;`
`a += b;`

````

In progress!
