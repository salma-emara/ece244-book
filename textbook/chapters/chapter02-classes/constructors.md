# Constructors

In the previous section, we learned about classes and how to define them. We discussed access modifiers: private and public, and the need for getter and setter functions to access and modify private members. In this section, we will learn about constructors, which are special member functions of a class that are called when an object of the class is instantiated. Constructors are used to initialize the members of a class when an object is created.


## Default Constructor

Recall the example of the `Student` class, we used in the previous section.

**Code in `Student.h`**
```{code-block} cpp
#include <string>
using namespace std;

class Student {
 private:
  string name;
  int ID;

 public:
  void print();
  void setName(string name);
  string getName();
};
```

**Code in `Student.cpp`**
```{code-block} cpp
#include <iostream>
#include "Student.h"
using namespace std;

void Student::print() {
  cout << "Name: " << name << endl << "ID: " << ID << endl;
}

void Student::setName(string n) {
  name = n;
}

string Student::getName() {
  return name;
}
```

**Code in `main.cpp`**
```{code-block} cpp
:linenos:
:emphasize-lines: 11
#include <iostream>
#include "Student.h"
using namespace std;

int main(void) {
  Student x;

  x.setName("Cindy");
  cout << x.getName() << endl;

  x.print(); // ID is not initialized
  return 0;
}
```

**<span style="color:red">Problem:</span>** When we run this program, we get unpredictable output like:
<pre>
Name: Cindy
ID: 32767  // or -12345, or any random garbage value
</pre>

**<span style="color:blue">Alternative Approach</span>** We could add a `setID()` function and call it after creating the object:

<pre>
Student x;
x.setName("Cindy"); 
x.setID(12345);  // But what if we forget this line?
</pre>

**<span style="color:green">Solution:</span>** 🎊 What if there was a way to guarantee that every `Student` object starts with initialized data member, automatically? Let's use the constructor - a special function that is called every time you create an object, ensuring it's always in a good state. 

The constructor
* is a special function called when an object is created, 
* is never called explicitly
* by default is empty and hence does nothing 
* has the same name as the class
* has no return type (not even `void`)
* should be a public member if you want to create objects from the class

Let's define a constructor for the `Student` class to initialize the `name` and `ID` members. Below in `Student.h` file, in line 10, we add the constructor declaration to the `Student` class. The constructor is a function with the **same name as the class and no return type**.

**Code in `Student.h`**
```{code-block} cpp
:linenos:
:emphasize-lines: 10
#include <string>
using namespace std;

class Student {
 private:
  string name;
  int ID;

 public:
  Student(); // Constructor
  void print();
  void setName(string name);
  string getName();
};
```

In `Student.cpp` file, we add the constructor implementation for the `Student` class. No return type is specified for the constructor. We are setting the value of `ID` to `0` and `name` to `"no name"` in the default constructor.


**Code in `Student.cpp`**
```{code-block} cpp
:linenos:
:emphasize-lines: 5-8
#include <iostream>
#include "Student.h"
using namespace std;

Student::Student() {
  ID = 0;
  name = "no name";
}

void Student::print() {
  cout << "Name: " << name << endl << "ID: " << ID << endl;
}

void Student::setName(string n) {
  name = n;
}

string Student::getName() {
  return name;
}
```

In `main.cpp` file, we create an object `x` of the `Student` class. The constructor is called automatically when the object is created. The value of `name` and `ID` are initialized to `"no name"` and `0`, respectively. The output of the program is now defined. 

**Code in `main.cpp`**
```{code-block} cpp
:linenos:
:emphasize-lines: 8
#include <iostream>
#include "Student.h"
using namespace std;

int main(void) {
  Student x;  // Constructor is called

  x.print();
  return 0;
}
```

**Output**
<pre>
Name: no name
ID: 0
</pre>

```{admonition} Note
`Student y[10];` creates an array of **10** `Student` objects. The constructor is called for each object in the array, *i.e.*, the constructor is called 10 times.
```

```{admonition} Warning
:class: warning

`Student *z;` declares a pointer variable but creates no Student object. Since no object is created, no constructor is called. **Constructors run when objects are created, not when pointers are declared.**
```

## Other Constructors

As we have seen, the default constructor takes **no parameters**, and hence we could only set `ID` and `name` to pre-known values hardcoded in the constructor implementation. *What if we want to initialize the members of a class with particular values when an object is created?* We can define our own constructor that takes in parameters. These are called **parameterized constructors**.

Below in `Student.h` file, we add two more constructors to the `Student` class. The first constructor in line 7 takes an integer parameter `id` and initializes the `ID` member with the value of `id`, and sets the `name` member to `"no name"`.

The second constructor in line 8 takes an integer parameter `id` and a string parameter `n` and initializes the `ID` and `name` members with the values of `id` and `n`, respectively.

**Code in `Student.h`**
```{code-block} cpp
:linenos:
:emphasize-lines: 11, 12
#include <string>
using namespace std;

class Student {
 private:
  string name;
  int ID;

 public:
  Student();                  // Default constructor
  Student(int id);            // 1st constructor
  Student(int id, string n);  // 2nd constructor
  void print();
  void setName(string name);
  string getName();
};
```

In `Student.cpp` file, we add the implementation for the two new constructors. The first constructor in lines 10-13 initializes the `ID` member with the value of `id` and sets the `name` member to `"no name"`. 

The second constructor in lines 15-18 initializes the `ID` and `name` members with the values of `id` and `n`, respectively.

**Code in `Student.cpp`**
```{code-block} cpp
:linenos:
:emphasize-lines: 10-13, 15-18
#include "Student.h"
#include <iostream>
using namespace std;

Student::Student() {
  ID = 0;
  name = "no name";
}

Student::Student(int id) {
  ID = id;
  name = "no name";
}

Student::Student(int id, string n) {
  ID = id;
  name = n;
}

void Student::print() {
  cout << "Name: " << name << endl << "ID: " << ID << endl;
}

void Student::setName(string n) {
  name = n;
}

string Student::getName() {
  return name;
}
```

In the main function, we create three objects `x`, `y`, and `z` of the `Student` class. The default constructor is called for object `x`, the first constructor is called for object `y`, and the second constructor is called for object `z`. The value of `name` and `ID` members are initialized accordingly as shown in the output.


**Code in `main.cpp`**
```{code-block} cpp
:linenos:
:emphasize-lines: 8
#include <iostream>
#include "Student.h"
using namespace std;

int main(void) {
  Student x;                   // Default constructor is called
  Student y(20207);            // 1st constructor is called
  Student z(20207, "Osiris");  // 2nd constructor is called
  cout << "Student x" << endl;
  x.print();
  cout << "Student y" << endl;
  y.print();
  cout << "Student z" << endl;
  z.print();
  return 0;
}
```

**Output**
<pre>
Student x:
Name: no name
ID: 0
Student y:
Name: no name
ID: 20207
Student z:
Name: Osiris
ID: 20207
</pre>


## How is it possible to have multiple constructors with the same name but different numbers of parameters?

The constructors are distinguished by the number of parameters passed to them. The compiler determines which constructor to call based on the number of parameters passed to it. Defining multiple constructors with the same name but different number of parameters is called **function overloading**. This is used for other functions as well, not just constructors. For example, you could have `print(int x)` and `print(string s)` in the same class.

```{admonition} Important!
If the default constructor is not defined, the compiler will provide one. 

However, if any constructor is defined, for example, the first constructor in the example above, the compiler will not provide the default constructor. In that case, for example, `Student x;` will result in a compilation error as the default constructor `Student::Student()` is not defined.
```

## Summary

We discuss a way to initialize class data members when creating objects to avoid calling multiple setters. We can have multiple constructors with different parameters (overloading). If you define any constructor, you must also define a default one if you want to use it. 


