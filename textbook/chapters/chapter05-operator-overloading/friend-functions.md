# Friend Functions

Operator overloading can be implemented using member functions, for example, the `+` operator when the left operand is an object of the class. However, when the left operand is not an object of the class, we cannot use member functions to overload the operator. 

For example, consider the following code that overloads the `<<` operator to print out `Complex` objects:

```{code-block} cpp
Complex z(3, 4);
cout << z; // calls what function?
```

**Issue 1: Cannot have `operator<<` as member of `ostream`:** In the expression `cout << z`, the left operand is an object of the `ostream` class. **We cannot interpret this expression as `cout.operator<<(z)` because we cannot change the `ostream` class to have a member function that takes a `Complex` object as an argument.** This is because `ostream` is part of the C++ standard library, and we cannot modify it.

**Issue 2: Cannot have `operator<<` as a member of `Complex`:** Since the left-hand side is not `Complex` object, we cannot use a member function of the `Complex` class to overload the `<<` operator.

**Solution:** Have `operator<<` as a **non-member** function that takes an `ostream` object and a `Complex` object as parameters. This way, we can overload the `<<` operator to work with `ostream` and `Complex` objects.

***Another problem!* Private members of `Complex` need to be accessed:** `operator<<` needs to access the private members of the `Complex` class to print out the real and imaginary parts. How can we allow a non-member function to access the private members of a class?

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

All streams are passed by reference to avoid making a copy of the stream object. It gives a compile error if we pass the stream by value. Hence, the parameter list should be `ostream& os, Complex rhs`. 

So far, we have the following function prototype in `Complex` class:

```cpp
friend <<return type>> operator<<(ostream& os, Complex rhs);
```

**Return type.** In C++, we can chain multiple `<<` operators together, for example:

```{figure} ./images/chained-cout.png

:alt: Chaining operators
:width: 400px
:align: center
:figclass: align-center
Chaining `<<` operators
```

The expression `cout << "z is "` returns an `ostream` object, which is then used as the left operand for the next `<<` operator. To allow this chaining, the return type of `operator<<` should be `ostream&`, which is a reference to the same stream object passed as the first parameter.

Putting it all together, we have the following function prototype in the `Complex` class:

```cpp
friend ostream& operator<<(ostream& os, const Complex& rhs);
```

Here, `z` is passed as a `const` reference because we do not want to modify the `Complex` object when printing it. **We are not making the function `const` because it is not a member function. There is no data members `real` and `img` to prevent changing them as the function itself is not a member function.**

**Step 2: Implement the friend function**

A friend function is not a member of the class, so it is implemented outside the `Complex` class. 


{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="20 21 22 23" output="z is (3, 4)">
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
    // Overload the << operator
    friend ostream& operator<<(ostream& os, const Complex& rhs);
};

ostream& operator<<(ostream& os, const Complex& rhs) {
    os << "(" << rhs.real << ", " << ")" << endl; 
    return os; // return the same stream object
}

int main(void) { 
  Complex z(3.0, 4.0); 
  cout << "z is " << z << endl;
  return 0;
}
</code-runner>
</pre>

In lines 20-23, the implementation of `operator<<` takes an `ostream` object and a `Complex` object as parameters. It accesses the private members `real` and `img` of the `Complex` object to print them out. Finally, it returns the same `ostream` object to allow chaining.

**Important Note:** The friend function is not a member of the class, so it does not need `Complex::` before function name when defining it outside the class.






