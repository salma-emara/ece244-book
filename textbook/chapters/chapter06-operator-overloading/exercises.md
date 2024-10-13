# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 2 in Fall 2019 Midterm Exam [Intermediate]**

Consider the definition of a class called `Nova`, which is in the file `Nova.h`.

```{code-block} cpp
#include <iostream>
using namespace std;
class Nova {
 private:
 // Private members not shown
 public:
 // Public members not shown
};
```

Now consider the following program that uses the `Nova` class. The program compiles and runs correctly.

```{code-block} cpp
#include <iostream>
using namespace std;
#include “Nova.h”
int main() {
  Nova a(3, 8.1);
  Nova* p;
  Nova b(a);
  ++a.it;
  a.setAll(1, 7.8);
  p = new Nova(9, 12.7);
  if (a != b)
    *p = a + b;
  delete p;
  return 0;
}
```

What members of the class Nova must exist for the above code to compile with no errors? Give variable declarations and/or method prototypes in the table below. Note that you may or may not need to fill every row in the table. 

|   Variable Declaration or Method Prototype    |
|-----------------------------------------------|
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |
|                                               |

````{admonition} Answer
:class: dropdown

|   Variable Declaration or Method Prototype    |
|-----------------------------------------------|
|         `Nova(int, double);`                  |
|               `int it;`                       |
|       `void setAll(int,double);`             |
|         `operator+(Nova&)`                    |
|         `bool operator!=(Nova&)`              |

No need for destructor as I don't dynamically allocate space in the object.
No need for a copy constructor in `Nova b(a)` since one is given by default.
No need for `operator=` in `*p = a + b`
````

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
G (and B is acceptable too)

The output is very similar to B, except for swapping `5` and `Destructor` in the following.
<pre>
Constructor 2 5
Constructor 3 5
Constructor 3 5
Operator= 5
Destructor 
Constructor 1 0
Constructor 1 0
Constructor 3 5
Operator= 0
Destructor 
5
Constructor 3 5
5
Destructor (this and the line above)
5
Destructor 
Destructor 
Destructor 
</pre>
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

bool operator==(const Mystery& right);
// used here: x == y

Mystery operator/(const Mystery& right);
Mystery& operator=(const Mystery&);
// used here: x = y / *p;
  
~Mystery();
// used here: delete p;
```
````

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
};
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

**Question 14 in Fall 2019 Midterm Exam [Intermediate]**

The following class is used to create objects that represent ordinary fractions `n/d`, consisting of a numerator `n` and a denominator `d`.

```{code-block} cpp
#include <iostream>
using namespace std;
class Fraction {
 private:
  int numerator;
  int denominator;

 public:
  Fraction(int num, int denm);
  int getNumerator();
  int getDenominator();
  void setNumerator(int num);
  void setDenominator(int denm);
  void print();
};
Fraction::Fraction(int num, int denm) {
  numerator = num;
  // Should check that denm is not 0, but ignore for now
  denominator = denm;
}
int Fraction::getNumerator() {
  return (numerator);
}
int Fraction::getDenominator() {
  return (denominator);
}
void Fraction::setNumerator(int num) {
  numerator = num;
}
void Fraction::setDenominator(int denm) {
  // Should check that denm is not 0, but ignore for now
  denominator = denm;
}
void Fraction::print() {
  cout << numerator << "/" << denominator << endl;
}
```

We wish to overload the `*` operator for the Fraction class to be able to write code like this in a non-member function (say main):

```{code-block} cpp
Fraction X(1, 5);
Fraction Y(4, 6);
 :
 .. = X * Y; // The first multiply operation
 ..= X * 2;  // The second multiply operation
```

For example, if `X` represents `1/5` and `Y` represents `4/6` then `X * Y` results in an object that represents `4/30`, while `X * 2` results in an object that represents `2/10`. That is, both the numerator and denominator are multiplied by `2`.

Write the implementation of the two overloaded operator functions as members of the class
Fraction. Clearly show the function header and its body.

1. Overload the multiplication operator `*` as a member of the class `Fraction` to be
able to perform the first multiply operation (see comment above). Be sure to indicate both the header and the body of the method. You need not worry about using const modifiers.

    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    Fraction Fraction::operator*(Fraction& rhs) {
      Fraction w(numerator * rhs.numerator, denominator * rhs.denominator);
      return w;
    }
    ```
    ````

2. Overload the multiplication operator `*` as a member of the class `Fraction` to be
able to perform the second multiply operation (see comment above). Be sure to indicate both the header and the body of the method. You need not worry about using const modifiers.

    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    Fraction Fraction::operator*(int x) {
      Fraction w(numerator * x, denominator * x);
      return w;
    }
    ```
    ````