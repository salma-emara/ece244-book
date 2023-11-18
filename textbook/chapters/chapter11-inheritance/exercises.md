# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 11 in Fall 2018 Final Exam [Easy]**

Consider the following class definitions and implementations, as well as a `main` function that uses them. All the code appears in one file and it compiles with no errors. 

```{code-block} cpp
#include <iostream>
using namespace std;

class firstOne {
 private:
  int x;
  char* first;

 public:
  firstOne();
  firstOne(const char* s);
};

class secondOne : public firstOne {
 private:
  int y;
  char* second;

 public:
  secondOne(const char* s);
  secondOne(int v);
};

firstOne::firstOne() {
  x = 0;
  first = new char[1];
  *first = '\0';
  cout << "Constructor 1 of firstOne done" << endl;
}

firstOne::firstOne(const char* s) {
  x = 0;
  int size = strlen(s);
  first = new char[size + 1];
  strcpy(first, s);
  cout << "Constructor 2 of firstOne done" << endl;
}

secondOne::secondOne(const char* s) {
  y = 0;
  int size = strlen(s);
  second = new char[size + 1];
  strcpy(second, s);
  cout << "Constructor 1 of secondOne done" << endl;
}

secondOne::secondOne(int v) : firstOne("X") {
  y = v;
  second = new char[1];
  *second = '\0';
  cout << "Constructor 2 of secondOne done" << endl;
}

int main() {
  firstOne a;
  firstOne b("G");
  secondOne c("N");
  secondOne d(8);
  return 0;
}
```

Indicate what each statement in the above `main` function prints, using the table below. If no output is produced, write "NONE".

|  Statement  |   Output   |
| ----------- | ---------- |
|`firstOne a;`|            |
|`firstOne b("G");`|       |
|`secondOne c ( "N");`|    |
|`secondOne d(8);`|        |

```{admonition} Answer
:class: dropdown
|  Statement  |      Output      |
| ----------- | ---------------- |
|`firstOne a;`| <pre>Constructor 1 of firstOne done</pre>  |
|`firstOne b("G");`| <pre>Constructor 2 of firstOne done</pre> |
|`secondOne c ( "N");`| <pre>Constructor 1 of firstOne done<br>Constructor 1 of secondOne done</pre> |
|`secondOne d(8);`| <pre>Constructor 1 of firstOne done<br>Constructor 2 of secondOne done</pre> |
```

**Question 14 in Fall 2019 Final Exam [Easy]**

Consider the following class definitions and implementations of classes, `Shape` and `Circle`. They are followed by a main function that utilizes these classes. 

```{code-block} cpp
#include <iostream>
using namespace std;
class Shape {
 protected:
  int shapeID;

 public:
  int getID() { return shapeID; }
  void setID(int k) { shapeID = k; }
  virtual void draw() = 0;
  virtual void print() = 0;
};
class Circle : public Shape {
 protected:
  float radius;

 public:
  float getRadius() { return radius; }
  void setRadius(float r) { radius = r; }
  virtual void draw() {
    // code to draw
  }
};
class Rectangle : public Shape {
 protected:
  float length;
  float width;

 public:
  float getLength() { return length; }
  void setLength(float x) { length = x; }
  float getWidth() { return width; }
  void setWidth(float x) { width = x; }
  virtual void draw() {
    // Code to draw
  }
  virtual void print() {
    // Code to print
  }
};

int main() {
  // Statements in the main function return 0;
}
```

Indicate which of the following statements that appear in the main function compile with no errors or produce a compile time error. 

Indicate also the reason in the table below. 

|            Code snippet              | Does the code snippet compile? If yes, Why?|
| ------------------------------------ | -------------------- |
| `Shape s;`                           |                      |
| `Circle c;`                          |                      | 
| `Rectangle r;` <br> `r.setID(9)`     |                      |
| `Rectangle d;` <br> `d.length = 3.0;`|                      |

```{admonition} Answer
:class: dropdown

|            Code snippet              | Does the code snippet compile? If yes, Why?|
| ------------------------------------ | -------------------- |
| `Shape s;`                           | Yes, an object of an abstract class cannot be created |
| `Circle c;`                          | Yes, Circle is an abstract class too as it doesn't implement print | 
| `Rectangle r;` <br> `r.setID(9)`     | No                   |
| `Rectangle d;` <br> `d.length = 3.0;`| Yes, Rectangle::length is a protected data member that cannot be accessed outside the class         |

```

**Question 12 in Fall 2023 Final Exam [Intermediate]**

Consider the following base and derived classes. They compile with no errors.

```{code-block} cpp
#include <iostream>
#include <string>
using namespace std;

class Dessert {
 protected:
  int price = 0;

 public:
  Dessert() { cout << "we have dessert\n"; }
  ~Dessert() { cout << "no more dessert\n"; }
  void print() { cout << "dessert unknown\n"; }
  virtual int cost() = 0;
};

class Candy : public Dessert {
 protected:
  int weight_in_grams;

 public:
  Candy(int grams, int per_gram) {
    weight_in_grams = grams;
    price = per_gram;
    cout << "we have candy\n";
  }
  ~Candy() { cout << "no more candy\n"; }
  void print() {
    cout << "Candy: " << weight_in_grams << " grams, at " << price
         << " cents per gram\n";
  }
  virtual int cost() { return weight_in_grams * price; }
};

class Cookies : public Dessert {
 protected:
  int num_dozens;

 public:
  Cookies(int dozens, int per_dozen) {
    num_dozens = dozens;
    price = per_dozen;
    cout << "We have cookies\n";
  }
  ~Cookies() { cout << "no more cookies\n"; }
  void print() {
    cout << "Cookies: " << num_dozens << "dozens, at " << price
         << " cents per dozen\n";
  }
  virtual int cost() { return num_dozens * price; }
};

class IceCream : public Dessert {
 protected:
  string flavor = "vanilla";
  int scoops;

 public:
  IceCream(string fly, int scps, int per_scoop) {
    flavor = fly;
    scoops = scps;
    price = per_scoop;
    cout << "we have " << flavor << " Ice Cream\n";
  }
  ~IceCream() { cout << "no more ice cream\n"; }
  void print() {
    cout << "Ice Cream: " << scoops << " scoops, at " << price
         << " cents per scoop\n ";
  }
  virtual int cost() { return scoops * price; }
};

class Sundae : public IceCream {
 protected:
  int topings_cost;

 public:
  Sundae(string flv, int scps, int per_scoop, int tps)
      : IceCream(flv, scps, per_scoop) {
    topings_cost = tps;
    cout << " with topings\n";
  }
  ~Sundae() { cout << "no more sundae\n"; }
  void print() {
    IceCream::print();
    cout << " topings cost is: " << topings_cost << endl;
  }
  virtual int cost() { return scoops * price + topings_cost; }
};
```

Consider each of the following `main` functions that use the above classes. You may assume that each `main` function includes the code of the classes above, including the `#include`'s and the `using namespace std;`

For each `main` function, indicate if the function compiles with no errors or not (ignore warnings). If the function compiles with no errors, then indicate the output produced by the function?


1. 
    ```{code-block} cpp
    int main() {
      Dessert a;
      Cookies b(2, 300);
      IceCream c("Vanilla", 2, 350);
      return 0;
    }
    ```
    Does the program compile with no errors? If it does compile with no errors, what is the output produced by the execution?
    ```{admonition} Answer
    :class: dropdown
    No, it doesn't compile.

    We cannot create objects of abstract classes. 
    ```
2. 
    ```{code-block} cpp
    int main() {
      Dessert* pc;
      IceCream* pi;
      pc = new Cookies(2, 250);
      pi = new IceCream("mint", 1, 250);
      delete pc;
      delete pi;
      return 0;
    }
    ```
    Does the program compile with no errors? If it does compile with no errors, what is the output produced by the execution?
    ````{admonition} Answer
    :class: dropdown
    Yes, the program compiles.

    **Output**
    <pre>
    we have dessert
    We have cookies
    we have dessert
    we have mint Ice Cream
    no more dessert
    no more ice cream
    no more dessert
    </pre>


    `delete pc` calls the destructor of `Desert` only as `pc` is a pointer of type `Desert`. We cannot access the destructor of `Cookies` through `pc`.
    
    `delete pi` calls the destructor of `IceCream` first, then the destructor of `Desert`. `pi` is of type `IceCream`, and through it we can access both destructors.
    
    ````
3. 
    ```{code-block} cpp
    int main() {
      Sundae* ps;
      IceCream* pi;
      pi = new IceCream("mint", 1, 250);
      ps = pi;
      delete ps;
    }
    ```
    ````{admonition} Answer
    :class: dropdown
    No, the program doesn't compile.

    `ps = pi;` is not valid. `Sundae` is derived from `IceCream`. `ps` cannot point to an object `IceCream`, as it cannot access its members that don't exist. 
    
    ````
4. 
    ```{code-block} cpp
    int main() {
      Dessert* ps = new IceCream("vanilla", 2, 350);
      cout << ps->cost() << endl;
      return 0;
    }
    ```

    ````{admonition} Answer
    :class: dropdown
    Yes, the program compiles.

    **Output**
    <pre>
    we have dessert
    we have vanilla Ice Cream
    700
    </pre> 

    `ps->cost()` will call the `cost()` of `IceCream` as `cost()` is a virtual function, hence `ps` will call the function according to the type of the object, not the pointer.
    ````



**Question 15 in Fall 2019 Final Exam [Easy]**

Consider the following class definitions.

```{code-block} cpp
class BaseC {
 private:
  int a;
  void help();

 protected:
  int b;

 public:
  int c;
  int d;
  void print();
};

class DerivedC : public BaseC {
 private:
  int x;
  void nohelp();

 public:
  int w;
  int z;
  void noprint();
};
```

The following declaration appears in the `nohelp` member function of the class `DerivedC`. 

```{code-block} cpp
DerivedC derived;
```

Indicate whether the following statements is correct code (i.e., compiles with no errors), or incorrect code (i.e., generates a compile time
error). Assume the statements in the rows of the table also appear in the `nohelp` member function of the class `DerivedC`.

|     Statement    | Correct/Incorrect |
| ---------------- | ----------------- |
| `derived.a = 8;` |                   |
| `derived.b = 10;`|                   |
| `derived.x = 12;`|                   |
| `derived.w = 4;` |                   |

```{admonition} Answer
:class: dropdown

|     Statement    | Correct/Incorrect |
| ---------------- | ----------------- |
| `derived.a = 8;` |Incorrect (`a` is a private member of the `Base` class)|
| `derived.b = 10;`|Correct (`b` is protected in `Base` and can be access in `DerivedC`)|
| `derived.x = 12;`|    Correct (`x` is private member of the `Base` class and can be accessed in `DerivedC`)         |
| `derived.w = 4;` |    Correct (`w` is a public member of `DerivedC`)        |

```

**Question 16 in Fall 2019 Final Exam [Intermediate]**

Consider the following base and derived classes. They compile with no errors.

```{code-block} cpp
#include <iostream>
#include <string>

using namespace std;

class CircuitElement {
 protected:
  int code;

 public:
  CircuitElement() { cout << "circuit element\n"; }
  CircuitElement(int c) {
    code = c;
    cout << "circuit element with code\n";
  }
  ~CircuitElement() { cout << "no circuit element\n"; }
  float getPower() { return 0.0; }
  virtual void print() { cout << "error\n"; }
};

class Resistor : public CircuitElement {
 protected:
  int resistance;

 public:
  Resistor(int r) {
    code = 1;
    resistance = r;
    cout << "resistor\n";
  }
  ~Resistor() { cout << "no resistor\n"; }
  float getPower() { return 0.0; }
  void print() { cout << "Resistor: " << resistance << endl; }
};

class Capacitor : public CircuitElement {
 protected:
  int capacitance;

 public:
  Capacitor(int c) : CircuitElement(2) {
    capacitance = c;
    cout << "capacitor\n";
  }
  float getPower() { return 0.0; }
  ~Capacitor() { cout << "no capacitor\n"; }
  void print() { cout << "Capacitor: " << capacitance << endl; }
};

class PowerResistor : public Resistor {
 protected:
  float power;

 public:
  PowerResistor(int r, float p) : Resistor(r) {
    power = p;
    cout << "power resistor\n";
  }
  ~PowerResistor() { cout << "no power resistor\n"; }
  float getPower() { return power; }
  virtual float powerResistance() { return (power * resistance); }
  void print() {
    Resistor::print();
    cout << "Power resistor: " << power << endl;
  }
};

class PowerCapacitor : public Capacitor {
 protected:
  float power;

 public:
  PowerCapacitor(int c, float p) : Capacitor(c) {
    power = p;
    cout << "power capacitor\n";
  }
  ~PowerCapacitor() { cout << "no power capacitor\n"; }
  float getPower() { return power; }
  virtual float powerCapacitance() { return (power * capacitance); }
  void print() {
    Capacitor::print();
    cout << "Power capacitor: " << power << endl;
  }
};
```

Consider each of the following main functions that use the above classes. You may assume that each main function includes the code of the classes above, including the `#include`'s and the `using namespace std;`.

For each main function, if the function compiles with no errors (ignore warnings), then write the output produced by the function. If the function compiles with errors, then write: "compile errors". 

1. 
    ```{code-block} cpp
    int main() {
      Capacitor c(150);
      PowerResistor p(180, 350);
      return 0;
    }
    ```

    ```{admonition} Answer
    :class: dropdown
    <pre>
    circuit element with code
    capacitor
    circuit element
    resistor
    power resistor
    no power resistor
    no resistor
    no circuit element
    no capacitor
    no circuit element
    </pre>
    We assume that `p` is destructed before `c`.
    ```

2. 
    ```{code-block} cpp
    int main() {
      CircuitElement* pr;
      pr = new PowerResistor(200, 250);
      delete pr;
      return 0;
    }
    ```
    ```{admonition} Answer
    :class: dropdown
    <pre>
    circuit element
    resistor
    power resistor
    no circuit element
    </pre>
    The tricky part is that `delete pr` will execute the destructor of the type of `pr`, since the destructor is not a `virtual` function.
    ```
3. 
    ```{code-block} cpp
    int main() {
      Capacitor* c;
      c = new CircuitElement(5);
      delete c;
      return 0;
    }
    ```

    ```{admonition} Answer
    :class: dropdown
    Compile-time error for line `c = new CircuitElement(5);`, as you cannot make a pointer to a derived object `c` point to a base object `CircuitElement`.
    ```
4. 
    ```{code-block} cpp
    int main() {
      PowerResistor* pr;
      Resistor* r;
      r = new Resistor(450);
      pr = r;
      delete pr;
      return 0;
    }
    ```
    ```{admonition} Answer
    :class: dropdown
    Compile-time error for line `pr = r;`, as `pr` is a pointer of derived object that cannot point to a base object. 
    ```
5. 
    ```{code-block} cpp
    int main() {
      PowerResistor r(250, 1000);
      CircuitElement e;
      e = r;
      return 0;
    }
    ```

    ```{admonition} Answer
    :class: dropdown
    <pre>
    circuit element
    resistor
    power resistor
    circuit element
    no circuit element
    no power resistor
    no resistor
    no circuit element
    </pre>
    We assume we destruct `e` then `p`. It is possible to do `e = r` as `e` is a base object and `r` is derived.
    ```
6. 
    ```{code-block} cpp
    int main() {
      CircuitElement* e = new PowerCapacitor(500, 1000);
      e->print();
      return 0;
    } 
    ```

    ```{admonition} Answer
    :class: dropdown
    <pre>
    circuit element with code
    capacitor
    power capacitor
    Capacitor: 500
    Power capacitor: 1000
    </pre>
    We can make a base object point to a derived object, hence `CircuitElement* e = new PowerCapacitor(500, 1000);` is possible. 
    
    Since the `print()` function is virtual in `CircuitElement`, it is virtual in all derived classes. Therefore when `e->print()` is executed, the `print()` function of the object `e` is pointing, which is `PowerCapacitor` to is called.
    ```

7. 
    ```{code-block} cpp
    int main() {
      Capacitor* c = new PowerCapacitor(300, 100);
      cout << c->getPower() << endl;
      return 0;
    }
    ```

    ```{admonition} Answer
    :class: dropdown
    <pre>
    circuit element with code
    capacitor
    power capacitor
    0
    </pre>
    The `getPower` function is not virtual, therefore when `c->getPower()` is called we call the getPower function of Capacitor -- the type of `c`.

    Since the memory is dynamically allocated and not freed, no destructors are called before returning from `main`.
    ```


8. 
    ```{code-block} cpp
    int main() {
      PowerResistor pr(20, 100);
      Resistor* r = &pr;
      cout << r->powerResistance() << endl;
      return 0;
      }
    ```
    ```{admonition} Answer
    :class: dropdown
    Compile-time error.

    The error exists at `r->powerResistance()`. `powerResistance()` is not a virtual function, hence when `r->powerResistance()` is executed, `powerResistance()` of `Resistor` is called. There is no member named `powerResistance` in `Resistor` class. 
    ```
