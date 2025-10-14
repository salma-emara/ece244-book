# Arrays of Pointers 

We will now look at double pointers and their use in creating arrays of pointers. This is particularly useful in saving space when we have a list of objects we want to store in array form. 

## Double Pointers

A double pointer is a pointer that points to another pointer. It is declared using two asterisks (`**`). For example, `int** p` declares a double pointer `p` that can point to a pointer of type `int*`.

To understand how are double pointers used, let's look at the following example:


{{cpp_visualizer}}
 <c-visualizer example="1" lang="cpp">
    <script type="application/json" data-kind="annotation">
      {
      "annotation": { 
        "5": "Declare a double pointer", 
        "6": "Declare two single pointers", 
        "7": "Dynamically allocate an integer", 
        "8": "Modify the value of the int through pointer p ( = 5)",
        "9": "Make p2p point to the address of p",
        "10": "Dereference p2p to get the value of p and assign it to q, equivalent to q = p",
        "11": "Modify the value of int through double pointer p2p ( = 10)",
        "12": "Modify the value of int through p2p by referencing it twice ( = 8)",
        "13": "Output the value pointed to by p",
        "14": "Output the value pointed to by q",
        "15": "Output the value pointed to by p which is pointer through p2p",
        "16": "Free the dynamically allocated memory"
      },
    }
    </script>

    #include &lt;iostream&gt;
    using namespace std;

    int main() {
      int** p2p = NULL; 
      int* p = NULL, *q = NULL;     
      p = new int;  
      *p = 5;
      p2p = &p ; 
      q = *p2p; 
      *q = 10; 
      **p2p = 8;
      cout &lt;&lt; "*p = " &lt;&lt; *p &lt;&lt; endl; 
      cout &lt;&lt; "*q = " &lt;&lt; *q &lt;&lt; endl; 
      cout &lt;&lt; "**p2p = " &lt;&lt; **p2p &lt;&lt; endl; 
      delete p; 
      return 0;
    }
  </c-visualizer>

In line 6, we declare two pointers `p` and `q` of type `int*`. The * in a declaration belongs to the variable name, not the type, so `int *p, *q;` means both p and q are pointers to int.

In line 7, we dynamically allocate memory for an integer using `new int` and assign the address of the allocated memory to the pointer `p`. 

In line 8, we modify the value of the integer pointed to by `p` to be `5`.

In line 9, we make the double pointer `p2p` point to the address of the single pointer `p`. 

In line 10, we dereference `p2p` to get the value of `p` and assign it to another single pointer `q`. This means that both `p` and `q` now point to the same memory location.

In line 11, we modify the value of the integer through the pointer `q`. Since `q` points to the integer, dereferencing `q` once makes us gain access to the integer and we can change its value.

In line 12, we modify the value of the integer through the pointer `p2p`. Since `p2p` points to `p`, and `p` points to the new int, dereferencing `p2p` once makes us gain access to `p` and dereferencing `p2p` twice (`**p2p`) allows us to access and modify the value of the integer on the heap.

The output of the program will be:
```
*p = 8
*q = 8
**p2p = 8
```

When we modify the value of the int through `p2p`, it also reflects when we access int through `p` and `q`, since they all point to the same memory location.

When we are done using the dynamically allocated memory, we free it using `delete` to prevent memory leaks. After `delete` keyword we write the pointer variable that points to the dynamically allocated memory. This can be `p` or `q` or `*p2p` as they all point to the same memory location. However, we should only free the memory once to avoid undefined behavior. If we try to free the same memory location multiple times, it is called a **double free** and can lead to program crashes or other unexpected behavior.

````{admonition} Important
If we were to free the memory using `p2p` pointer, we need to put after `delete` the address on the heap, which is `*p2p`. Writing `delete p2p;` would lead to undefined behavior since `p2p` points to `p`, which is a pointer variable stored on the stack, not the heap.

```cpp
delete *p2p; // Correct, as *p2p points to the int on the heap
delete p2p;   // Incorrect, leads to undefined behavior as we are trying to free memory on the stack
delete **p2p; // Incorrect, as **p2p is an int, not a pointer
```
````

## Array of Integers Vs Array of Pointers to Integers

### Array of Integers 

An array of integers is a collection of integers stored in contiguous memory locations. To dynamically allocate it, use `new int[size]`, where `size` is the number of integers we want to store in the array. This returns the address of the first element of the array, which we can store in an `int` pointer variable `int* arr`. For example:

```cpp
int* arr = new int[size];
```

If we access the array using a pointer, we can use pointer arithmetic to access each element of the array. For example, `(arr + i)` gives us the address of the `i`-th indexed element of the array. To access the value of the `i`-th index element, we can dereference this address using `*(arr + i)`, which is equivalent to `arr[i]`.

To dynamically free the memory allocated for the array, we use `delete[]` followed by the pointer variable that points to the first element of the array. For example:

```cpp
delete[] arr;
```

### Array of Pointers to Integers

An **array of pointers** is a collection of **pointers** stored in contiguous memory locations. Each pointer in the array can point to a different variable or object. To dynamically allocate an array of integer pointers, we need to use `new int*[size]`. Each element is of type `int*`. We need a pointer that stores the address of the first element in the array. A variable that can store the address of a pointer is a double pointer. Therefore, we declare a double pointer `int** arr2p` to store the address of the first element in the array of pointers. 

**Step 1:** We can allocate an array of four pointers using:

```{figure} ./images/allocate-array-int*.png
:alt: allocate-array-int*
:class: with-shadow
:width: 400px
:align: center
:name: allocate-array-int*

Dynamically allocate an array of four integer pointers. The variable `arr2p` is a double pointer that points to the first element of the array of pointers.
```

**Step 2:** We can then assign each pointer in the array to point to different integers. We can use `arr2p[i]` or `*(arr2p + i)`. For example:


```{figure} ./images/allocate-one-int-per-point.png
:alt: allocate-one-int-per-point
:class: with-shadow
:width: 600px
:align: center
:name: allocate-one-int-per-point

For each pointer in the array, dynamically allocate an integer. Each pointer in the array now points to a different integer on the heap.
```

**Step 3:** We can then assign values to each integer using the pointers in the array. We can dereference each element in the array using `*arr2p[i]` or `*(*(arr2p+i))`. For example:


```{figure} ./images/edit-int.png
:alt: edit-int
:class: with-shadow
:width: 600px
:align: center
:name: edit-int

Assign values to each integer using the pointers in the array.
```

Once you are done using the array of pointers, you need to free the memory allocated for each integer first, and then free the memory allocated for the array of pointers itself. 

This is done in two steps. For every `new`, there should be a corresponding `delete`. 

**Step 4:** If we dynamically allocated four integers, we need to free each of them first using a loop:

```{figure} ./images/free-int-per-int_.png
:alt: free-int-per-int*
:class: with-shadow
:width: 500px
:align: center
:name: free-int-per-int*

Free each integer pointed to by the pointers in the array.
```

**Step 5:** Finally, we free the memory allocated for the array of pointers itself:

```{figure} ./images/delete-entire-int_-array.png
:alt: delete-entire-int*-array
:class: with-shadow
:width: 500px
:align: center
:name: delete-entire-int*-array

Free the array of pointers itself.
```

```{admonition} Order of deletion!
When freeing memory, always free the memory allocated for the individual integers first, and then free the memory allocated for the array of pointers itself. This is because if we free the array of pointers first, we will lose access to the individual integers, leading to memory leaks.
```

## Array of Objects Vs Array of Pointers to Objects

### Array of Objects

Similar to an array of integers, we can create an array of objects. For example, if we have a class `Student`, we can create an array of `Student` objects using `new Student[size]`, where `size` is the number of `Student` objects we want to create. This returns the address of the first element of the array, which we can store in a `Student` pointer variable `Student* arr`. For example:

{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="15" output="Student constructor called
Student constructor called
Student constructor called
Student destructor called
Student destructor called
Student destructor called">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
class Student{
  public:
    string name;
    int ID;
    Student() {
      cout << "Student constructor called" << endl;
    }
    ~Student() {
      cout << "Student destructor called" << endl;
    }
};

int main(void) {
  Student* arr = new Student[3];
  arr[0].name = "Alice";
  delete [] arr;
  return 0;
}
</code-runner>
</pre>

In line 17, the constructor will be called for three times, once for every object that gets created.

In line 19, we dynamically free the memory allocated for the array of objects, we use `delete[]` followed by the pointer variable that points to the first element of the array. The destructor will be called for three times, once for each object in the array when we use `delete[]`. 


### Array of Pointers to Objects

We can also create an array of pointers to objects. For example, if we have a class `Student`, we can create an array of pointers to `Student` objects using `new Student*[size]`, where `size` is the number of pointers we want to create. This returns the address of the first element of the array, which we can store in a double pointer variable `Student** arr2p`.

**Step 1:** We can allocate an array of three pointers using:

```{figure} ./images/allocate-array-Student_.png
:alt: allocate-array-Student*
:class: with-shadow
:width: 400px
:align: center
:name: allocate-array-Student*

Dynamically allocate an array of three Student pointers. The variable `arr2p` is a double pointer that points to the first element of the array of pointers.
```

**Step 2:** We can then assign each pointer in the array to point to different integers. We can use `arr2p[i]` or `*(arr2p + i)` to gain access to each pointer. `new Student` will create one Student object and return its address. For example:


```{figure} ./images/allocate-one-Student-per-point.png
:alt: allocate-one-Student-per-point
:class: with-shadow
:width: 600px
:align: center
:name: allocate-one-Student-per-point

For each pointer in the array, dynamically allocate a Student object. Each pointer in the array now points to a different Student object on the heap.
```

**Step 3:** We can then assign values to each ID using the pointers in the array. We can dereference each element in the array using `*arr2p[i]` or `*(*(arr2p+i))` then use the `.` operator as in `*arr2p[i].ID = i + 1;` or use the arrow operator on the pointer as `arr2p[i]->ID = i + 1;`. For example:


```{figure} ./images/edit-ID.png
:alt: edit-ID
:class: with-shadow
:width: 600px
:align: center
:name: edit-ID

Assign values to each ID in each Student object using the pointers in the array.
```

Once you are done using the array of pointers, you need to free the memory allocated for each Student first, and then free the memory allocated for the array of pointers itself. 

This is done in two steps. For every `new`, there should be a corresponding `delete`. 

**Step 4:** If we dynamically allocated three Student objects, we need to free each of them first using a loop:

```{figure} ./images/free-Student-per-Student_.png
:alt: free-Student-per-Student*
:class: with-shadow
:width: 500px
:align: center
:name: free-Student-per-Student*

Free each Student pointed to by the pointers in the array.
```

**Step 5:** Finally, we free the memory allocated for the array of pointers itself:

```{figure} ./images/delete-entire-Student_-array.png
:alt: delete-entire-Student*-array
:class: with-shadow
:width: 500px
:align: center
:name: delete-entire-Student*-array

Free the array of pointers itself.
```


**Why use an array of pointers to objects instead of an array of objects?**

Pointers store addresses, which are typically smaller in size compared to the actual objects they point to. Therefore, using an array of pointers can save memory space, especially when dealing with large objects. Therefore, the benefits of using an array of pointers to objects include:

1. **Dynamic Size**: If the number of objects is not known at compile time or can change during runtime, using an array of pointers allows for dynamic allocation and deallocation of objects as needed.
2. **Memory Efficiency**: If the objects are large and only a few of them are needed at a time, using an array of pointers can save memory by only allocating memory for the objects that are actually used.
3. *(We discuss this later!)* **Polymorphism**: If you are using inheritance and polymorphism, an array of pointers to base class objects can hold pointers to derived class objects, allowing for more flexible and dynamic behavior.