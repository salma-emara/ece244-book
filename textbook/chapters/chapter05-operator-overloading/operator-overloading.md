# Operator Overloading

We have heard of function overloading, where we can define multiple functions with the same name but different parameter lists. Depending on the arguments used in a function call, the appropriate function is selected.

Similarly, C++ allows us to overload operators, such as `+`, `=`, `==` and `<<`. This means that we can define how operators such as `+` behave when they are used with objects of user-defined types (i.e., classes). This is known as operator overloading.

**Why Overload Operators?**

Operator overloading can make code more intuitive and easier to read. For example, consider a `Complex` class that represents complex numbers with real and imaginary values. By overloading the `+` operator, we can add two `Complex` objects using the familiar `+` syntax.

We will explore how to overload various operators within the context of the `Complex` class defined as follows:

**Starting Point: The `Complex` Class**
```cpp
class Complex {
  private:
    double real;      
    double img;
  public:
    Complex() {
      real = 0; img = 0;
    }
    Complex(double r, double i) {
      real = r; img = i;
    } 
};
```   

## Overloading the `+` Operator

We want to add two `Complex` objects using the `+` operator as we show in the following code snippet: 

```{code-block} cpp :line-numbers :highlight-lines: 4
Complex x(3.0, 4.0); 
Complex y(5.0, 6.0); 
Complex z;

z = x + y;  // We want to add two Complex objects using the + operator
```

Currently, the `+` operator can add two integers or doubles. Additionally, those who implemented the `string` class in C++ implemented an overloaded `+` operator to concatenate two strings and produce a new string object with two strings added.

Similarly, we need to overload the `+` operator to add two `Complex` objects, i.e. we need to define what `x + y` means when `x` and `y` are `Complex` objects.

First, 








