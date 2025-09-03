let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "question-id": "chapter-05-Q1",
      "title": "Question 2 in Fall 2019 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "explaination",
      "multipart": false,
      "question": "\nConsider the definition of a class called `Nova`, which is in the file `Nova.h`.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\nclass Nova {\n private:\n // Private members not shown\n public:\n // Public members not shown\n};\n```\n\nNow consider the following program that uses the `Nova` class. The program compiles and runs correctly.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n#include “Nova.h”\nint main() {\n  Nova a(3, 8.1);\n  Nova* p;\n  Nova b(a);\n  ++a.it;\n  a.setAll(1, 7.8);\n  p = new Nova(9, 12.7);\n  if (a != b)\n    *p = a + b;\n  delete p;\n  return 0;\n}\n```\nWhat members of the class Nova must exist for the above code to compile with no errors? Give variable declarations and/or method prototypes in the table below. Note that you may or may not need to fill every row in the table. \n\n",
      "answer": "`Nova(int, double);`\n\n\n`int it;`\n\n\n`void setAll(int,double);`\n\n\n`Nova operator+(Nova&)`\n\n\n`bool operator!=(Nova&)`\n\n\nNo need for destructor as we don't dynamically allocate space in the object.\n\nNo need for a copy constructor in `Nova b(a)` since one is given by default.\n\nNo need for `operator=` in `*p = a + b`\n"
    },
    {
      "question-id": "chapter-05-Q2",
      "title": "Question 7 in Fall 2018 Midterm Exam",
      "difficulty": "Intermediate",
      "type": "function programming",
      "table": false,
      "question": "The following is the definition/implementation of a class called `Foo`.\n\n```{code-block} cpp\nclass Foo {\n private:\n  int priv;\n\n public:\n  Foo(int pv) { priv = pv; }\n  Foo(const Foo src) { priv = src.priv; }\n  Foo& operator=(Foo& rhs) const {\n    priv = rhs.priv;\n    return this;\n  }\n  int getPriv() const { return priv; }\n  void setPriv(int pv) { priv = pv; }\n};\n```\n\nCompiling the above definition/implementation results in one or more errors.\nRe-write the class so it is error-free. \n\n",
      "starter-code": "\nclass Foo {\n private:\n  int priv;\n\n public:\n  Foo(int pv) { priv = pv; }\n  Foo(const Foo src) { priv = src.priv; }\n  Foo& operator=(Foo& rhs) const {\n    priv = rhs.priv;\n    return this;\n  }\n  int getPriv() const { return priv; }\n  void setPriv(int pv) { priv = pv; }\n};\n\n",
      "answer": "\n1. The copy constructor should take its argument as a const reference. Otherwise, \nit will call itself infinitely. Line 7 changed to add `&` after `const Foo`. \n\n2. The assignment operator (operator=) should not be declared `const` as we want \nto change `priv` in line 8.\n\n3. The assignment operator (operator=) returns `Foo&`, while `this` is `Foo*` type. \nChange `this` to `*this` in line 10.\n\nclass Foo {\n private:\n  int priv;\n\n public:\n  Foo(int pv) { priv = pv; }\n  Foo(const Foo& src) { priv = src.priv; }\n  Foo& operator=(const Foo& rhs) {\n    priv = rhs.priv;\n    return *this;\n  }\n  int getPriv() const { return priv; }\n  void setPriv(int pv) { priv = pv; }\n};\n",
      "main-function": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int aval, bval, newval;\n  cin >> aval >> bval >> newval;\n\n  Foo a(aval);\n  Foo b(bval);\n\n  cout << \"Testing copy constructor:\" << endl;\n  Foo c = a; \n  cout << \"c copies a = \" << c.getPriv() << endl;\n\n  cout << \"Testing assignment operator:\" << endl;\n  c = b;\n  cout << \"c after assignment from b = \" << c.getPriv() << endl;\n\n  cout << \"Testing setter/getter:\" << endl;\n  c.setPriv(newval);\n  cout << \"c after setPriv = \" << c.getPriv() << endl;\n  cout << \"a remains = \" << a.getPriv() << endl;\n\n  cout << \"Testing self-assignment:\" << endl;\n  c = c;\n  cout << \"c after self-assign = \" << c.getPriv() << endl;\n\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "10 15 20\n"
          ],
          "output": [
            "Testing copy constructor:\nc copies a = 10\nTesting assignment operator:\nc after assignment from b = 15\nTesting setter/getter:\nc after setPriv = 20\na remains = 10\nTesting self-assignment:\nc after self-assign = 20\n"
          ]
        },
        {
          "input": [
            "5 5 100\n"
          ],
          "output": [
            "Testing copy constructor:\nc copies a = 5\nTesting assignment operator:\nc after assignment from b = 5\nTesting setter/getter:\nc after setPriv = 100\na remains = 5\nTesting self-assignment:\nc after self-assign = 100\n"
          ]
        },
        {
          "input": [
            "7 42 999\n"
          ],
          "output": [
            "Testing copy constructor:\nc copies a = 7\nTesting assignment operator:\nc after assignment from b = 42\nTesting setter/getter:\nc after setPriv = 999\na remains = 7\nTesting self-assignment:\nc after self-assign = 999\n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-05-Q3",
      "title": "Modified Version of Question 9 in Fall 2018 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "tracing",
      "multipart": false,
      "question": "\nConsider the following definition/implementation of a class called `Shape` that appears in the file: `Shape.h`.\n\n**Shape.h**\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\nclass Shape {\n private:\n  int ID;\n\n public:\n  Shape() {\n    ID = 0;\n    cout << \"Constructor 1 \" << ID << endl;\n  }\n  Shape(int id) {\n    ID = id;\n    cout << \"Constructor 2 \" << ID << endl;\n  }\n  Shape(const Shape& s) {\n    ID = s.ID;\n    cout << \"Constructor 3 \" << ID << endl;\n  }\n  ~Shape() { cout << \"Destructor \" << endl; }\n  Shape& operator=(Shape rhs) {\n    cout << \"Operator= \" << ID << endl;\n    ID = rhs.ID;\n    return *this;\n  }\n  int getID() const { return ID; }\n  void setID(int id) { ID = id; }\n};\n```\n\nThe following is a main program that uses the above class.\n\n**main.cpp**\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n#include \"Shape.h\"\nint getID(Shape s) {\n  return s.getID();\n}\nint getShapeID(Shape& s) {\n  return s.getID();\n}\nint main() {\n  Shape circle(5);\n  Shape* line1[2];\n  Shape* polygon = new Shape(circle);\n  line1[0] = polygon;\n  line1[1] = polygon;\n  *polygon = circle;\n  Shape line2[2];\n  line2[0] = *polygon;\n  cout << (*(line1[0])).getID() << endl;\n  cout << getID(*line1[1]) << endl;\n  cout << getShapeID(*line1[0]) << endl;\n  return 0;\n}\n```\n\nWhat is the output of the program? \n\n",
      "answer": "Constructor 2 5\nConstructor 3 5\nConstructor 3 5\nOperator= 5\nDestructor \nConstructor 1 0\nConstructor 1 0\nConstructor 3 5\nOperator= 0\nDestructor \n5\nConstructor 3 5\nDestructor \n5\n5\nDestructor \nDestructor \nDestructor \n"
    },
    {
      "question-id": "chapter-05-Q4",
      "title": "Question 8 in Fall 2021 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "explaination",
      "multipart": false,
      "question": "Consider the definition of a class called `Mystery`, which is in the file `Mystery.h`.  \n\n**Mystery.h**\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass Mystery {\n private:\n  // Private members not shown\n\n public:\n  // Public members not shown\n};\n```\n\nNow consider the following program that uses the `Mystery` class. The program compiles and runs correctly.\n\n**main.cpp**\n```{code-block} cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\n#include \"Mystery.h\"\n\nint main() {\n  string n = \"hello\";\n  Mystery x(3, n);\n  Mystery* p = new Mystery(n, 4);\n  Mystery y(x);\n  x.invert(1, n);\n  if (x == y)\n    x = y / *p;\n  delete p;\n\n  return 0;\n}\n```\n\nWhat public members of the class Mystery **must exist** (either written by the programmer or given by C++) for the above code to compile with no errors? Non-member functions are not allowed. Write necessary variable declarations and/or method prototypes.\n",
      "answer": "`Mystery(const Mystery&);` // used here: Mystery y(x);\n\n`Mystery(string, int);` // used here: Mystery(n, 4)\n\n`Mystery(int, string);` // used here: Mystery x(3, n);\n\n`void invert(int, string);` // used here: x.invert(1, n)\n\n`bool operator==(const Mystery& right);` // used here: x == y\n\n`Mystery operator/(const Mystery& right);` // used here: y / *p;\n\n`Mystery& operator=(const Mystery&);` // used here: x = y;\n\n`~Mystery();` // used here: delete p;\n"
    },
    {
      "question-id": "chapter-05-Q5",
      "title": "Question 8 in Fall 2022 Midterm Exam",
      "difficulty": "Challenging",
      "table": false,
      "type": "function programming",
      "multipart": false,
      "question": "Vector is widely used in the engineering and science world. Suppose we create a class called `vector_2d`. It can be used to represent a 2D \nvector, with `x` and `y` as its values. The partial code of this vector is given below.\n\nImplement `operator+=` for `vector_2d`, as a member function. \n\nIf `a = <x1, y1>` and `b = <x2, y2>`, after `a += b`, `a` becomes `<x1 + x2, y1 + y2>` whereas `b` is unchanged. Write no more than 5 lines of code.\n\n",
      "starter-code": "class vector_2d {\n private:\n  double x;\n  double y;\n\n public:\n  vector_2d() {\n    x = 0;\n    y = 0;\n  }\n  vector_2d(double x_, double y_) {\n    x = x_;\n    y = y_;\n  }\n  double get_x() const { return x; }\n  double get_y() const { return y; }\n  \n  // TO DO: Implement overloaded operator+= here\n\n\n};\n",
      "answer": "\nvector_2d& operator+=(const vector_2d& rhs) {\n  // need to do the changes on the members of the lhs object\n  x += rhs.x;\n  y += rhs.y;\n  // need to return the lhs object.\n  // Return by reference is to make sure we don't return a copy\n  return *this;\n}\n\nNOTE: the return type cannot be `void`, because we need to support chained `+=`.\nExample: `a += b += 2;`\nwhich is equivalent to:\n`b += 2;`\n`a += b;`\n\n",
      "main-function": "#include <iostream>\nusing namespace std;\n\nint main() {\n  double ax, ay, bx, by, cx, cy;\n  cin >> ax >> ay >> bx >> by >> cx >> cy;\n\n  vector_2d a(ax, ay);\n  vector_2d b(bx, by);\n  vector_2d c(cx, cy);\n\n  cout << \"Initial vectors:\" << endl;\n  cout << \"a = <\" << a.get_x() << \", \" << a.get_y() << \">\" << endl;\n  cout << \"b = <\" << b.get_x() << \", \" << b.get_y() << \">\" << endl;\n  cout << \"c = <\" << c.get_x() << \", \" << c.get_y() << \">\" << endl;\n\n  cout << \"\\nTesting a += b:\" << endl;\n  a += b;\n  cout << \"a = <\" << a.get_x() << \", \" << a.get_y() << \">\" << endl;\n  cout << \"b = <\" << b.get_x() << \", \" << b.get_y() << \">\" << endl;\n\n  cout << \"\\nTesting chained (a += b) += c:\" << endl;\n  (a += b) += c;\n  cout << \"a = <\" << a.get_x() << \", \" << a.get_y() << \">\" << endl;\n\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "1 2 3 4 5 6\n"
          ],
          "output": [
            "Initial vectors:\na = <1, 2>\nb = <3, 4>\nc = <5, 6>\n\nTesting a += b:\na = <4, 6>\nb = <3, 4>\n\nTesting chained (a += b) += c:\na = <12, 16>\n"
          ]
        },
        {
          "input": [
            "0 0 -1 -2 10 20\n"
          ],
          "output": [
            "Initial vectors:\na = <0, 0>\nb = <-1, -2>\nc = <10, 20>\n\nTesting a += b:\na = <-1, -2>\nb = <-1, -2>\n\nTesting chained (a += b) += c:\na = <8, 16>\n"
          ]
        },
        {
          "input": [
            "2.5 3.5 0.5 1.5 -1.0 -1.0\n"
          ],
          "output": [
            "Initial vectors:\na = <2.5, 3.5>\nb = <0.5, 1.5>\nc = <-1, -1>\n\nTesting a += b:\na = <3, 5>\nb = <0.5, 1.5>\n\nTesting chained (a += b) += c:\na = <2.5, 5.5>\n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-05-Q6",
      "title": "Modified Version of Question 14 in Fall 2019 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "\nThe following class is used to create objects that represent ordinary fractions `n/d`, consisting of a numerator `n` and a denominator `d`.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\nclass Fraction {\n private:\n  int numerator;\n  int denominator;\n\n public:\n  Fraction(int num, int denm);\n  int getNumerator();\n  int getDenominator();\n  void setNumerator(int num);\n  void setDenominator(int denm);\n  void print();\n};\n\nFraction::Fraction(int num, int denm) {\n  numerator = num;\n  // Should check that denm is not 0, but ignore for now\n  denominator = denm;\n}\nint Fraction::getNumerator() {\n  return (numerator);\n}\nint Fraction::getDenominator() {\n  return (denominator);\n}\nvoid Fraction::setNumerator(int num) {\n  numerator = num;\n}\nvoid Fraction::setDenominator(int denm) {\n  // Should check that denm is not 0, but ignore for now\n  denominator = denm;\n}\nvoid Fraction::print() {\n  cout << numerator << \"/\" << denominator << endl;\n}\n```\n\nWe wish to overload the `*` operator for the Fraction class to be able to write code like this in a non-member function (say main):\n\n```{code-block} cpp\nFraction X(1, 5);\nFraction Y(4, 6);\n :\n .. = X * Y; // The first multiply operation\n ..= X * 2;  // The second multiply operation\n```\n\nFor example, if `X` represents `1/5` and `Y` represents `4/6` then `X * Y` results in an object that represents `4/30`, while `X * 2` results in an object that represents `2/10`. That is, both the numerator and denominator are multiplied by `2`.\n\nWrite the implementation of the two overloaded operator functions as members of the class\nFraction. Clearly show the function header and its body.\n\n1. Overload the multiplication operator `*` as a member of the class `Fraction` to be\nable to perform the first multiply operation (see comments below). Be sure to indicate both the header and the body of the method. You need not worry about using const modifiers.\n\n2. Overload the multiplication operator `*` as a member of the class `Fraction` to be\nable to perform the second multiply operation (see comments below). Be sure to indicate both the header and the body of the method. You need not worry about using const modifiers.\n\n",
      "starter-code": "\n#include <iostream>\nusing namespace std;\nclass Fraction {\n private:\n  int numerator;\n  int denominator;\n\n public:\n  Fraction(int num, int denm);\n  int getNumerator();\n  int getDenominator();\n  void setNumerator(int num);\n  void setDenominator(int denm);\n  void print();\n\n  // TODO: Declare operator* overloads here\n\n};\n\nFraction::Fraction(int num, int denm) {\n  numerator = num;\n  denominator = denm;\n}\nint Fraction::getNumerator() {\n  return (numerator);\n}\nint Fraction::getDenominator() {\n  return (denominator);\n}\nvoid Fraction::setNumerator(int num) {\n  numerator = num;\n}\nvoid Fraction::setDenominator(int denm) {\n  denominator = denm;\n}\nvoid Fraction::print() {\n  cout << numerator << \"/\" << denominator << endl;\n}\n\n// TODO: Implement operator overloads below\n\n\n",
      "answer": "\n// TODO: Declare operator* overloads here\n\nFraction operator*(Fraction& rhs);\nFraction operator*(int x);\n\n// TODO: Implement operator overloads below\n\nFraction Fraction::operator*(Fraction& rhs) {\n  Fraction w(numerator * rhs.numerator, denominator * rhs.denominator);\n  return w;\n}\n\nFraction Fraction::operator*(int x) {\n  Fraction w(numerator * x, denominator * x);\n  return w;\n}\n\n",
      "main-function": "\n#include <iostream>\nusing namespace std;\n\nint main() {\n    int n1, d1, n2, d2, k;\n    cin >> n1 >> d1 >> n2 >> d2 >> k;\n\n    Fraction X(n1, d1);\n    Fraction Y(n2, d2);\n\n    cout << \"Initial fractions:\" << endl;\n    cout << \"X = \";\n    X.print();\n    cout << \"Y = \";\n    Y.print();\n    cout << \"Integer k = \" << k << endl;\n\n    cout << \"\\nTesting Fraction * Fraction:\" << endl;\n    Fraction Z = X * Y;\n    cout << \"Z = X * Y = \";\n    Z.print();\n\n    cout << \"\\nTesting Fraction * int:\" << endl;\n    Fraction W = X * k;\n    cout << \"W = X * k = \";\n    W.print();\n\n    return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "1 5 4 6 2\n"
          ],
          "output": [
            "Initial fractions:\nX = 1/5\nY = 4/6\nInteger k = 2\n\nTesting Fraction * Fraction:\nZ = X * Y = 4/30\n\nTesting Fraction * int:\nW = X * k = 2/10\n"
          ]
        },
        {
          "input": [
            "3 7 5 9 4\n"
          ],
          "output": [
            "Initial fractions:\nX = 3/7\nY = 5/9\nInteger k = 4\n\nTesting Fraction * Fraction:\nZ = X * Y = 15/63\n\nTesting Fraction * int:\nW = X * k = 12/28\n"
          ]
        },
        {
          "input": [
            "2 1 3 1 5\n"
          ],
          "output": [
            "Initial fractions:\nX = 2/1\nY = 3/1\nInteger k = 5\n\nTesting Fraction * Fraction:\nZ = X * Y = 6/1\n\nTesting Fraction * int:\nW = X * k = 10/5\n"
          ]
        }
      ]
    }
  ]
};