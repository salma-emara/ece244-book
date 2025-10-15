# What is a copy constructor?

A copy constructor is a special constructor in C++ that initializes a new object as a copy of an existing object. Given `a` is an object of `Student` class. It is called when:

- `Student b(a);`
 
    Here, `a` is an existing object, and `b` is being created as a copy of `a`. We are passing `a` to the constructor.
- `Student b = a;` 
  
    Though `=` syntax is used, but as `b` is being created in this same line, this calls the copy constructor. **`=` operator is not called here.**
- An object is **passed by value** to a function.
  
  For example, when the function prototype is `void foo(Student s);` and the function call is `foo(a);`. Passing `a` to the function creates a new object `s` in the function's scope, and the copy constructor is called to initialize `s` with the value of `a`.

- An object is **returned by value** from a function.
    
    For example, when the function prototype is `Student foo();` and the function return statement is `return a;`. Since the return type is `Student`, a new object is created to hold the returned object, and the copy constructor is called to initialize this new object with the value of `a`.

**What does the copy constructor do?**
The copy constructor initializes the data of the new object being created with the values of the existing object's data member variables. For example, consider the following class definition:

```cpp
class Student {
  private:
    int id;
    string name;
  public:
    // Copy constructor
    Student(const Student &s) {
        id = s.id;
        name = s.name;
    }
};
```

(work in progress)