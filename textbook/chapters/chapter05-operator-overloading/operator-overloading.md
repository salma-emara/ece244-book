# Operator Overloading

We have studied function overloading, where we can define multiple functions with the same name but different parameter lists. Depending on the arguments used in a function call, the appropriate function is selected.

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

```{code-block} cpp 
:linenos: 
:emphasize-lines: 5
Complex x(3.0, 4.0); 
Complex y(5.0, 6.0); 
Complex z;

z = x + y;  // We want to add two Complex objects using the + operator
```

Currently, the `+` operator can add two integers or doubles, e.g. `2.0 + i`, where `i` is an integer. Additionally, those who implemented the `string` class in C++ implemented the `+` operator to enable two strings to be "added" and produce a new string object with two strings concatenated, e.g. `string s = "Hello" + " world"`.

Similarly, we need to implement or overload the `+` operator to add two `Complex` objects, i.e. we need to define what `x + y` means when `x` and `y` are `Complex` objects.

**Step 1: Understand the function header**

In the expression `x + y;`, the left-hand side of the `+` operator is the object of class `Complex`. This means we can interpret the `x + y` to be equivalent to `x.operator+(y)`. The function name is `operator+`. It should be a member function of `Complex` class, since we invoke `operator+` on `x`. The object `y` is passed as an argument to this member function.

```{figure} ./images/operator-plus.png
:alt: operator-plus
:class: with-shadow
:width: 600px
:align: center
:name: operator-plus

`x + y` is interpreted as `x.operator+(y)`. The left-hand side of the `+` operator is the object `x`, on which `operator+` of the `Complex` class is invoked. The right-hand side of the `+` operator is the object `y`, which is passed as an argument to the `operator+` member function.
```

To implement the `operator+` member function, we need to consider the following:

1. **Input Argument Type:** The `operator+` **member** function should take one parameter of type `Complex`, which is the object on the right-hand side of the `+` operator. Since the left-hand side object is the one on which the member function is invoked, it does not need to be passed as a parameter. 
2.  **Return Type:** The `operator+` member function should return a newly created `Complex` object that represents the sum of the two `Complex` objects.
3. **Public or Private**: The `operator+` member function should be declared as a `public` member function of the `Complex` class to allow it to be accessed from outside the class.

**Step 2: Implement the `operator+` Member Function**

We can implement the `operator+` member function as follows:

```{figure} ./images/operator-plus-implement.png
:alt: operator-plus-implement
:class: with-shadow
:width: 600px
:align: center
:name: operator-plus-implement

We create a new `Complex` object `temp` to store the sum of the two `Complex` objects. We add the real and imaginary parts separately and return the `temp` object.
```

We pass the `Complex` object `y` as a parameter to the `operator+` member function and name it `rhs`, short for right-hand side. 

We can access the `real` and `img` data members of the left-hand side object `x` (the object on which `operator+` is invoked) directly using `real` and `img` since we are inside a member function of the `Complex` class. We access the `real` and `img` data members of the right-hand side object `rhs` using the dot operator, e.g. `rhs.real` and `rhs.img`.

Inside the function, we create a new `Complex` object `temp` to store the sum of the two `Complex` objects. We set the real of `temp` to the sum of the `real` of `y` (`rhs.real`) and the real of the left-hand side object `x`, which is just `real` since `operator+` is invoked on `x`. We do the same for the imaginary part. 

Finally, we return the `temp` object. The return type of `operator+` is `Complex`, which matches the type of the object we are returning. 

```{admonition} Return by value
`operator+` returns a `Complex` object by value. This means that a copy of the `temp` object is returned to the caller. Returning by value is important because the scope of `temp` will end by the end of the function and it will be destroyed. We want to return a newly created `Complex` object that is a copy of `temp` object at the time of return to by used in the caller function, e.g. `main` function.
```

**Step 3: Optimizations on the `operator+` Member Function**

We can make three main optimizations to the `operator+` member function:

1. **Pass the parameter by reference:** Passing the `Complex` object `rhs` by value creates a copy of `rhs` just for the `operator+` function. This can be memory inefficient especially if `Complex` has many data members. Instead, we can pass it by reference to avoid making a copy of the object when the function is called. This means we change the parameter type from `Complex rhs` to `Complex& rhs`.
2. **Pass `rhs` as a `const`**: We can ensure that the function does not modify the `rhs` object. This is important because `rhs` is the right-hand side object of the `+` operator, and we do not want to change its value when performing addition. To do this, we can declare the parameter as a `const` reference, i.e. `const Complex& rhs`.
3. **Make the function `const`:** We can declare the `operator+` member function as a `const` member function to indicate that it does not modify the state of the left-hand side object. This is done by adding the `const` keyword after the function parameter list, i.e. `Complex operator+(const Complex& rhs) const`.

```{figure} ./images/optimize-operator-plus.png
:alt: optimize-operator-plus
:class: with-shadow
:width: 600px
:align: center
:name: optimize-operator-plus
```

## Overloading the `==` Operator

Before getting to the `operator=` or assignment operator, another common operator to overload is the equality operator `==`. We can use this operator to compare two `Complex` objects for equality. For example, we want to be able to write the following code:

{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="24 25 26 32" output="x is equal to y">
&#35;include &lt;iostream&gt;
using namespace std;
<br>

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
    // Overload the + operator
    Complex operator+(Complex rhs) {
      Complex temp;
      temp.real = real + rhs.real; // Add the real parts
      temp.img = img + rhs.img;     
      return temp;                  
    }
    // Overload the == operator
    bool operator==(const Complex& rhs) const {
      return (real == rhs.real) && (img == rhs.img);
    }
};

int main(void) { 
  Complex x(3.0, 4.0); 
  Complex y(3.0, 4.0); 
  if (x == y) {
    cout << "x is equal to y" << endl;
  } else {
    cout << "x is not equal to y" << endl;
  }
  return 0;
}
</code-runner>
</pre>

We can overload the `==` operator to compare two `Complex` objects for equality. The `==` operator should return `true` if both the real and imaginary parts of the two `Complex` objects are equal, and `false` otherwise.

In line 24, we write the function header for the `operator==` member function. The left-hand side object is the one on which the member function is invoked, and the right-hand side object is passed as a `const` reference parameter. The return type of the function is `bool`, which indicates whether the two `Complex` objects are equal or not. 

The function is declared as a `const` member function since it does not modify the state of the left-hand side object. It also receives the right-hand side object as a `const` reference to avoid making a copy and to ensure that it is not modified.

In line 25, we compare the `real` and `img` data members of the left-hand side object and the right-hand side object `rhs.real` and `rhs.img` using the `==` operator for `double` values. If both parts are equal, we return `true`; otherwise, we return `false`.

We use the overloaded `==` operator in line 32 to compare the two `Complex` objects `x` and `y`. Since both objects have the same real and imaginary parts, the output will be `x is equal to y`.

## Overloading the `=` Operator

(work-in-progress)










