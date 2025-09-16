# Freeing an Object from Memory Explicitly

In the previous chapter, we discuss that when an object is created, the constructor is called, and when it goes out of scope, the destructor is called **automatically**. However, in another case, if the object was dynamically allocated, the destructor is **explicitly** called when an object is freed. We need to recap dynamic memory allocation before we look at an example of this case.

## Recap: Dynamic Memory Allocation

**What happens when a program runs?** A computer allocates memory in Random Access Memory (RAM) (or another named is main memory) for the program's variables and objects. There are four segments in this memory: 
* **Stack:** Stores the local variables and objects of a function
* **Heap:** Stores the dynamically allocated memory, 
* **Globals + Const variables:** Stores the constants and global variables of your program
* **Code:** Stores the instructions of the program
  
In the following example, we will see the stack get used to store local variables and the heap to store dynamically allocated memory.

**Step 1: Stack Only**

In {numref}`step1-stack-only`, in the first two lines, we declare and initialize `x` to 10 and declare and initialize pointer `p` of type `int*` to `NULL`. Both `x` and `p` are stored in the stack as they are local variables. 

In `p = &x`, we use the **reference operator `&`** before `x` to get the address of `x` and we store it in `p`. Using `p`, we can now gain access to `x`.

In `*p = 5`, we use the **deference operator `*`** before `p` to dereference it, which means we access the value stored at the address that `p` points to. We can say "we dereference the reference to `x`," which is `x`. This changes the line `*p = 5` $\rightarrow$ `*(&x) = 5` $\rightarrow$ `x = 5`, allowing allows us to change the value of `x` to 5.

**Code in `main.cpp`**
```{figure} ./images/step1-stack-only.png
:alt: Step 1
:class: with-shadow
:width: 600px
:align: center
:name: step1-stack-only

The stack stores local variables: `int x` and `int* p`, where `p` stores the address of `x` in the stack, and then through `p` we change the value of `x` from 10 to 5. 
```

**Step 2: Dynamic Memory Allocation**

In {numref}`step2-allocate`, we dynamically allocate memory for an integer using the `new` operator. The `new` operator allocates memory on the heap, and it returns the address to that memory. Hence, in `p = new int`, `p` now points to the heap memory where the integer is stored. We can access the value stored in that memory using `*p`.

In `*p = 20`, we again dereference `p` to change the value stored in the heap memory to 20.

**Code in `main.cpp`**
```{figure} ./images/step2-allocate.png
:alt: Step 2
:class: with-shadow
:width: 600px
:align: center
:name: step2-allocate

Dynamically allocating memory using `new` operator. The pointer `p` now points to the heap memory where the integer is stored, and we can access it using `*p`.
```

**Step 3: Freeing Memory**

In {numref}`step3-delete`, we free the dynamically allocated memory using the `delete` operator. The `delete` keyword requires we put the address that we want to free. In our case, this is the variable that stores the address on the heap, *i.e.* `p`. After this line, `p` still points to the same address, but that memory is no longer valid for use, and accessing it will lead to undefined behavior. `p` is now called a dangling pointer. This memory location is "freed" as shown in the image.

**Code in `main.cpp`**
```{figure} ./images/step3-delete.png
:alt: Step 3
:class: with-shadow
:width: 600px
:align: center
:name: step3-delete

We free the dynamically allocated memory using the `delete` operator. This frees the memory back to the heap. 
```

**Step 4: Resolve Dangling Pointer**

To resolve the dangling pointer issue, we set `p` to `NULL` after freeing the memory. This way, we can check if `p` is `NULL` before dereferencing it in the future, preventing undefined behavior.

**Code in `main.cpp`**
```{figure} ./images/step4-null.png
:alt: Step 4
:class: with-shadow
:width: 600px
:align: center
:name: step4-null

It's a good practice to always set the pointer to `NULL` after freeing the memory to avoid dangling pointer issues.
```

**Try out this!**

Please try out the following interactive visualization to see how the stack and heap memory change along with annotations as we dynamically allocate and free memory.

{{cpp_visualizer}}
 <c-visualizer example="1" lang="cpp">
    <script type="application/json" data-kind="annotation">
      {
      "annotation": { 
        "5": "Define integer variable x = 10", 
        "6": "Define pointer p and initialize to NULL", 
        "7": "Make p point to the address of x", 
        "8": "Modify the value of x through pointer p (x = 5)", 
        "10": "Allocate a new int on the heap", 
        "12": "Assign value 20 to the heap-allocated int", 
        "14": "Print the value stored at p (*p)", 
        "15": "Print the value of x", 
        "17": "Free the heap memory", 
        "18": "Set pointer p to NULL to avoid dangling pointer"
      },
      "folds": [{ "start": 13, "end": 16 }]
    }
    </script>

   #include &lt;iostream&gt;
    using namespace std;

    int main() {
      int x = 10;
      int* p = NULL;
      p = &amp;x;
      *p = 5;

      p = new int;

      *p = 20;

      cout &lt;&lt; "Value at p: " &lt;&lt; *p &lt;&lt; endl;
      cout &lt;&lt; "Value of x: " &lt;&lt; x &lt;&lt; endl;

      delete p;
      p = NULL;
      return 0;
    }
  </c-visualizer>

### Dynamic Memory Allocation of Arrays

To dynamically allocate an integer, we use 

```cpp
new int
```

, but to dynamically allocate an array of integers, we use 

```cpp
new int[size]
```

, where `size` is the number of elements in the array. The `new` operator allocates memory for the array on the heap and returns a pointer to the first element of the array.

For freeing, to free the dynamically allocated integer that was allocated using `int* p = new int`, we use 

```cpp
delete p;
```

To free the dynamically allocated array that was allocated using `int* p = new int[size]`, we use 

```cpp
delete[] p;
```

Notice the `[]` after `delete`, which indicates that we are freeing an array. This is important to ensures that entire array is freed.

## Explicitly Calling Destructor

Objects can also be dynamically allocated using the `new` operator. When an object is created dynamically, its constructor is called. For example, if we have a class named `Student`, we can dynamically allocate an object and store its address in a pointer `p` using 

```cpp
Student* p = new Student;
```

However, to free the memory of the object, the destructor is explicitly called when the `delete` operator is used. The destructor is called on the object before the memory gets released. For example, the following line will call the destructor of the `Student` class:

```cpp
delete p;
```

You can try out the following code to see how the constructor and destructor are called when an object is dynamically allocated and freed.


**Code in `main.cpp`**
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="cpp" output="Constructor called
Destructor called">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
class Student {
  public:
    Student() {
      cout << "Constructor called" << endl;
    }
    
    ~Student() {
      cout << "Destructor called" << endl;
    }
};

int main(void) {
    Student* p = new Student; // Dynamically allocated object
    delete p; // Explicitly calling destructor
    return 0;
}
</code-runner>
</pre>





