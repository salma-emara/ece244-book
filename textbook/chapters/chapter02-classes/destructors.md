# Lifecycle of an Object

As we have seen in the previous section, a constructor is called when an object is created. Likewise, a special function called the **destructor** is called when an object goes out of scope  or when it is destroyed/erased/freed from the memory.

For example, in the following code, we define a class named `Student` with a constructor and a destructor, implement the constructor and destructor to print a message, and in the main function, we create two objects of the class `Student` in different scopes. `Student x` has a scope that starts from its declaration to the end of the `main` function, while `Student y` has a scope that starts from its declaration to the end of the inner block of the if-statement body. When each object goes out of scope, its destructor is called automatically.

**Code in `main.cpp`**
```{figure} ./images/lifecycle-object.png
:alt: Lifecycle of an Object
:class: with-shadow
:width: 400px
:align: center
:name: lifecycle-object

Two objects created in different places in a program, and they go out of scope at different times.
```

A destructor is:

* the complement of the constructor
* given to each class by default
* automatically called when an object os destroyed or goes out of scope.
* empty if it is not defined
