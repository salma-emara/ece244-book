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

In progress!