# Structs and Classes

In C/C++, to help with data organization, we group together multiple data members of different data types in a `struct`. For example, consider the following `student` structure:

**Code**
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="cpp" highlight-lines="15" output="Name: Kenya
ID: 8012">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
// struct definition
struct Student {
  string name;
  int ID;
};
<br>
int main(void) {
  struct Student x, y;
  x.name = "Kenya";
  x.ID = 8012;
  y.name = "Cindy";
  y.ID = 2023;
  cout << "X, Name: " << x.name << endl << "ID: " << x.ID << endl;
  return 0;
}
</code-runner>
</pre>

In this structure, we have grouped together a string and an integer. The struct definition, which is lines 5-8, does not involve any memory allocation. When we **create an instance** of the `struct Student`, only then a memory space is reserved for that instance.  In line 11, multiple instances of the student structure `x` and `y` were created, and each one stores different values. 

To access data members of a structure, we use the dot operator (`.`) on the instance. For example, to access the `name` data member of the `x` instance, we write `x.name`.

**<span style="color:red">Problem!</span>** In line 16, when we printed the name and ID of `Student x`, we had to access each data member to print them. If there were 10 data members, we would have to access each data member to print them. Unfortunately, that's a lot of code to write.
 
**<span style="color:green">Solution 1.</span>** We can create a function and name it `print` that takes in `struct Student` to help us print all data members of struct. This will make our code more modular, especially if we want to print the data members of multiple `struct Student`.

**<span style="color:green">Solution 2.</span>** Instead of having the `print` function separate from `Student` struct, we can associate it with `Student` and keep it with the other data members of `Student`. To do so, we need to bundle the data members and the `print` function in a definition of a `Student` **"class."**

## What is a class?

A class is an expansion to structures in C/C++. It allows us to group data members and **functions** in a single unit. 

A class is a user-defined data type. Creating an instance of a class is called instantiation and the instance is called an **object**. The program will not allocate memory when the class is defined. Memory will be allocated for each **object**. You can think of a class as a template/blueprint for creating objects, and only instances of the class or objects will be allocated in the memory.  

## Defining a class

To define a class, we use the `class` keyword followed by the class name. For example, the following code defines a class `Student` with two data members `name` and `ID`. We also define a function `print` that prints the data members of the class. 

To keep our code clean and organized, we store the class definition, which includes data members and function prototypes, in a header file (e.g., Student.h).

**Code in `Student.h`**
```{code-block} cpp
#include <string>
using namespace std;

class Student {
  string name;
  int ID;
  void print();
};
```

## Access Control

**<span style="color:red">Problem!</span>** Members in a class are **private** by default. This means that the `name`, `ID` and `print` cannot be accessed outside the class, for example, in the main function. 

To control access to the members of a class, we can use access specifiers/modifiers. The common two are `private` and `public`. These access modifiers allow us to dictate which members:

* can only be used within a class -- `private`, and 
* can be used inside and outside the class -- `public`. 

For example, we will edit the class definition in `Student.h` to have `name` and `ID` as private members and `print` as a public member. `name` and `ID` can only be accessed within the class, while `print` can be accessed outside the class.

**Code in `Student.h`**
```{code-block} cpp
:emphasize-lines: 5, 8
#include <string>
using namespace std;

class Student {
  private:
    string name;
    int ID;
  public:
    void print();
};
```

To understand further how access specifiers work, we need to create instances of the class and access the members. However, **we cannot yet create instances of the class because we have not implemented the function members of `Student`**. 

## Implementing functions in a class

The implementation of the functions in `Student` (i.e., the actual code of the `print` function) goes into a source file (e.g., Student.cpp). This structure helps with separate compilation and makes large programs easier to manage and debug.

In a source file named `Student.cpp`, we will implement the function member of the class `Student`. The function `print` will print the data members of the class.

**Code in `Student.cpp`**
```{code-block} cpp
:linenos:
:emphasize-lines: 5
#include <iostream>
#include "Student.h"
using namespace std;

void Student::print() {
  cout << "Name: " << name << endl << "ID: " << ID << endl;
}
```

**Lines 1 and 3.** We include the `iostream` library and write `using namespace std;` to use `cout` in `print`.

**Line 2.** We include the header file `Student.h` to be able to access the class `Student`.

**Line 5.** We define the function `print` that prints the data members of the class. Since `print` is being implemented outside of the class definition, we need to specify in `Student.cpp` in the function header that `print` is part of `Student` class. To do so, we append to the function name the class name `Student` and use the scope resolution operator `::`, *i.e.,* `Student::print`.

## Creating instances of a class

We will write a `main` function where we create an instance of the `Student` class. We will put the `main` function in another file named `main.cpp`. In `main.cpp`, we need to include `Student.h` header file to be able to create an instance of `Student` class. In {numref}`uninitialized-name-id`:

**Line 6.** We create an instance of the class `Student` named `x`. This requires only the name of the class followed by the name of the object `Student x`. In the memory, a memory space for object `x` is created. That space stores two data members: `name` and `ID`. Since `name` and `ID` are uninitialized, they will have garbage values denoted by `?`.

**Line 7 [Erroneous].** To initialize the value of `name`, we attempt to access the data member `name` of the object `x` using the dot operator. However, **we cannot access `name` because it is a private member of `Student` class.** 

**Line 8.** We call the `print` function on the instance `x`. This is allowed since `print` is a `public` function of `Student`. 

**<span style="color:red">Problem!</span>** However, the outout of the program **is undefined because the data members `name` and `ID` are uninitialized**.

```{figure} ./images/uninitialized-name-id.png
:alt: Header vs. Source Files
:class: with-shadow
:width: 700px
:align: center
:name: uninitialized-name-id

Object `x` of class `Student` with uninitialized data members `name` and `ID`. Data members are private and cannot be accessed outside the class.
```


**Output is undefined**
<pre>
Name: hmvjl
ID: -87569870
</pre>

**<span style="color:green">Solution 1</span>** Have the data members `name` and `ID` public to be able to access them and initialize them in the `main` function. 

**<span style="color:green">Solution 2</span>** Have **public** functions that allow you to initialize or "set" the values of `name` and `ID` and other functions to allow you to read or know or "get" the values of `name` and `ID`. These functions will be named getters and setters as we discuss in the next section. All this while keeping `name` and `ID` private. 

## Getter and Setter functions

To help gain access to the private members of `name` and `ID`, we can create getter and setter functions. Getter functions are used to access/return the value of a private member, while setter functions are used to set the value of a private member. 

In the following example, we will create getter and setter functions for only the `name` data member of the `Student` class, we will discuss the `ID` in the next section. 

As shown below in `Student.h` file in lines 11 and 12, we add the function declarations for `getName` and `setName` functions to the `Student` class. 

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
  void print();
  void setName(string name);
  string getName();
};
```

In `Student.cpp` file, in lines 9 to 15, we add the function implementations for `getName` and `setName` functions.
* `getName`: The getter for `name` will return the value of `name` and received nothing as an input. 
* `setName`: The setter for `name` will receive a string as an input and assign it to `name`.


**Code in `Student.cpp`**
```{code-block} cpp
:linenos:
:emphasize-lines: 9-11, 13-15
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

Below in `main.cpp` file in line 8, we invoke the `setName` function on object `x`, and pass `"Cindy"` to the function. This calls the `setName()` which is capable of accessing `name` member of `x` and set it to `"Cindy"`.

Therefore, in line 9 in main.cpp, when we invoke the `getName` function on object `x`, we return the value of `name` stored in object `x`. Then, we print it to the user as `"Cindy"`.

In line 11, we are still invoking `print()` on `x` while it has an uninitialized `ID`. The output will be `Name: Cindy` and `ID: <undefined>`.

**Code in `main.cpp`**
```{code-block} cpp
:linenos:
:emphasize-lines: 8, 9
#include <iostream>
#include "Student.h"
using namespace std;

int main(void) {
  Student x;

  x.setName("Cindy");
  cout << x.getName() << endl;

  x.print();
  return 0;
}
```

**Output (ID is undefined)**
<pre>
Cindy
Name: Cindy
ID: -86764
</pre>


```{admonition} getter cannot be used to modify
:class: warning
Getters, like `getName`, return the value of a private member, but they cannot be used to **modify** the value of the private member. For example, we cannot write `x.getName() = "Cindy"` to change the value of `name` in object `x`. This is because `getName` returns a copy of the value of `name`, which cannot be assigned to another value. **`getName` does not return a reference to `name`.**
```

## Summary

In this section, we have learned about classes in C++. We have seen how to 
* define a class, 
* create instances of a class,
* access the members of a class, 
* control access to the members of a class using access specifiers/modifiers, *i.e.* `private` and `public`,
* implement functions in a class,
* create getter and setter functions to access private members of a class. 

In the next section, we will learn about how can we set private members of a class using constructors at the time of instantiation without need for setter functions.