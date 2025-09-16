# Why do we need destructors?

We understand that constructors are needed to initialize data members of an object at the time of instantiation. But why do we need destructors? The destructor is called when an object goes out of scope or is explicitly deleted, and it is used to clean up resources that the object may have acquired during its lifetime, such as dynamically allocated memory.

For example, in {numref}`memory-leak-student-grades`, we will dynamically allocate an array of integers in the constructor. As we instantiate an object using `Student x(3)`, the constructor will dynamically allocate an array of 3 integers. However, as the object `x` goes out of scope, a memory leak occurs as the dynamically allocated array is not freed. 

```{figure} ./images/memory-leak-student-grades.png
:alt: Memory leak in Student class
:class: with-shadow
:width: 600px
:align: center
:name: memory-leak-student-grades

Dynamically allocating memory in a `Student` object. Once it goes out of scope, a memory leak happens as we didn't free that dynamically allocated space. 
```

The solution to that issue is to write a destructor that takes cares of freeing the dynamically allocated memory. In {numref}`destructor-free-grades`, we define a destructor `~Student()` that frees the dynamically allocated array of integers. Now, when the object `x` goes out of scope, the destructor is automatically called, and the memory allocated for the array is freed, preventing a memory leak. 

```{figure} ./images/destructor-free-grades.png
:alt: No leaks
:class: with-shadow
:width: 600px
:align: center
:name: destructor-free-grades

Dynamically allocating memory in a `Student` object gets freed in the destructor. This avoid memory leaks when object `x` goes out of scope. 
```

