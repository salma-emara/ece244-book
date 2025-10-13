# Friend Functions

Operator overloading can be implemented using member functions, for example, the `+` operator when the left operand is an object of the class. However, when the left operand is not an object of the class, we cannot use member functions to overload the operator. 

For example, consider the following code that overloads the `<<` operator to print out `Complex` objects:

```{code-block} cpp
Complex z(3, 4);
cout << z; // calls what function?
```

**Cannot have `operator<<` as member of `ostream`:** In the expression `cout << z`, the left operand is an object of the `ostream` class. **We cannot interpret this expression as `cout.operator<<(z)` because we cannot change the `ostream` class to have a member function that takes a `Complex` object as an argument.** This is because `ostream` is part of the C++ standard library, and we cannot modify it.

**Cannot have `operator<<` as a member of `Complex`:** Since the left-hand side is not `Complex` object, we cannot use a member function of the `Complex` class to overload the `<<` operator.

**Solution:** Have `operator<<` as a **non-member** function that takes an `ostream` object and a `Complex` object as parameters. This way, we can overload the `<<` operator to work with `ostream` and `Complex` objects.

**Another problem! Private members of `Complex` need to be accessed:** `operator<<` needs to access the private members of the `Complex` class to print out the real and imaginary parts. How can we allow a non-member function to access the private members of a class?

The **final solution** is to define `operator<<` as a **friend function** of the `Complex` class. A friend function is a **non-member** function that (i) has access to the private members of the class in which it is declared as a friend. Also, (ii) it allows the left operand to be of a different type.

For example, we can declare `operator<<` as a friend function of the `Complex` class using the **`friend`** keyword before the function prototype as follows:

```cpp
class Complex {
  // ...
  friend <<return type>> operator<<(<<parameter list>>);
};
```



**Step 1: Understand the function prototype**


**Input parameter list.** The function `operator<<` should receive `cout` and `z` from `cout << z` as parameters. The left-hand side `cout` is an object of the `ostream` class and is received as the first parameter. Then, the right-hand side `z` is an object of the `Complex` class and is received as the second parameter. 

All streams are passed by reference to avoid making a copy of the stream object. It gives a compile error if we pass the stream by value. Hence, the parameter list should be `ostream& os, const Complex& rhs`. Here, `z` is passed as a `const` reference because we do not want to modify the `Complex` object when printing it.

So far, we have the following function prototype:

```cpp
friend <<return type>> operator<<(ostream& os, const Complex& rhs);
```

**Return type.** In C++, we can chain multiple `<<` operators together, for example:

```cpp
cout << "z is " << z << endl;
```



A friend function is not a member of the class, so it is defined outside the class. 






