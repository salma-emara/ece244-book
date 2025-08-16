# Why do we need destructors?

We understand that constructors are needed to initialize data members of an object at the time of instantiation. But why do we need destructors? The destructor is called when an object goes out of scope or is explicitly deleted, and it is used to clean up resources that the object may have acquired during its lifetime, such as dynamically allocated memory.

For example, in the following class, we will dynamically allocate an array of integers in the constructor.

```cpp
class Student {
  private: 
    int* grades;
  public:
    Student(int size) {
      p = new int[size]; // Dynamically allocate an integer
    }
    ~Student() {
      delete p; // Free the dynamically allocated memory
    }
};
```

(work-in-progress)