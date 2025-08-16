# Lifecycle of an Object

As we have seen in the previous section, a constructor is called when an object is created. Likewise, a special function called the **destructor** is called when an object goes out of scope  or when it is destroyed/erased/freed from the memory.

**What is a destructor?**

The complement (opposite) function of the constructor. 

**When is it called?**

A destructor is called automatically when an object is destroyed/freed/erased or goes out of scope.

**How is it defined?**

It's defined with the same name as the class, but with a tilde (`~`) before the name, e.g. `~ClassName()`
It has the following characteristics:
* no return type, not even `void`
* no input parameters
* given to each class by default
* empty if it is not defined

## Object Goes Out of Scope

For example, in the following code, we 
* define a class named `Student` with a constructor `Student();` and a destructor `~Student()`
* implement the constructor and destructor to print a message (no return type is specified for either and the destructor MUST not have an input parameter), and 
* in the main function, we create two objects of the class `Student` in different scopes. 

```{admonition} note
We didn't define them into `Student.h`, `Student.cpp` and `main.cpp` files. We put all the code into the `main.cpp` file for simplicity.
```

**Code in `main.cpp`**
```{figure} ./images/lifecycle-object.png
:alt: Lifecycle of an Object
:class: with-shadow
:width: 400px
:align: center
:name: lifecycle-object

Two objects created in different places in a program, and they go out of scope at different times.
```

**Output**
<pre>
Constructor called
Inside main
Constructor called
Inside if
Destructor called
Outside if
Destructor called
</pre>

In line 19, the constructor of `Student` is called when object `x` is created, and the message `Constructor called` is printed. 

In line 22, the object `y`is created. Note that object `y` is created inside an `{}` block, so it goes out of scope when the block ends.

In line 24, object `y` goes out of scope, and the destructor is called automatically, printing `Destructor called`.

In line 27, the destructor for object `x` is called when the program ends, printing `Destructor called`.

In summary, the lifecycle of an object is as follows:

1. Memory is allocated for the object.
2. The constructor is called to initialize the object.
3. The object is used in the program.
4. When the object goes out of scope, the destructor is called.
   


