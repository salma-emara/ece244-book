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
        "8": "Modify the value of x through pointer p (x = 5)",
        "9": "Make p2p point to the address of p",
        "10": "Dereference p2p to get the value of p and assign it to q, equivalent to q = p",
        "11": "Modify the value of x through double pointer p2p (x = 8)",
        "12": "Output the value pointed to by p",
        "13": "Output the value pointed to by q",
        "14": "Output the value pointed to by p which is pointer through p2p",
        "15": "Free the dynamically allocated memory"
      },
      "folds": [{ "start": 13, "end": 16 }]
    }
    </script>

    #include &lt;iostream&gt;
    using namespace std;

    int main() {
      int** p2p; 
      int* p, *q;     
      p = new int;  
      *p = 5;
      p2p = &p ; 
      q = *p2p; 
      *q = 8; 
      cout &lt;&lt; "*p = " &lt;&lt; *p &lt;&lt; endl; 
      cout &lt;&lt; "*q = " &lt;&lt; *q &lt;&lt; endl; 
      cout &lt;&lt; "**p2p = " &lt;&lt; **p2p &lt;&lt; endl; 
      delete p; 
      return 0;
    }
  </c-visualizer>

In line 9, we make the double pointer `p2p` point to the address of the single pointer `p`. In line 10, we dereference `p2p` to get the value of `p` and assign it to another single pointer `q`. This means that both `p` and `q` now point to the same memory location.

In line 11, we modify the value of `x` through the double pointer `p2p`. Since `p2p` points to `p`, and `p` points to `x`, dereferencing `p2p` twice (`**p2p`) allows us to access and modify the value of `x`.

The output of the program will be:
```
*p = 8
*q = 8
**p2p = 8
```

When we modify the value of `x` through `p2p`, it also reflects when we access `x` through `p` and `q`, since they all point to the same memory location.

When we are done using the dynamically allocated memory, we free it using `delete` to prevent memory leaks. After `delete` keyword we write the pointer variable that points to the dynamically allocated memory. This can be `p` or `q` or `*p2p` as they all point to the same memory location. However, we should only free the memory once to avoid undefined behavior. If we try to free the same memory location multiple times, it is called a **double free** and can lead to program crashes or other unexpected behavior.

## Array of Pointers

An array of integers is a collection of integers stored in contiguous memory locations. To dynamically allocate it, we need a pointer that stored the address of the first element in the array. We can allocate it using `new int[size]`, where `size` is the number of integers we want to store in the array. This returns the address of the first element of the array, which we can store in a pointer variable `int* arr`. For example:

```cpp
int* arr = new int[size];
```

If we access the array using a pointer, we can use pointer arithmetic to access each element of the array. For example, `(arr + i)` gives us the address of the `i`-th element of the array. To access the value of the `i`-th element, we can dereference this address using `*(arr + i)`, which is equivalent to `arr[i]`.

An **array of pointers** is a collection of pointers stored in contiguous memory locations. Each pointer in the array can point to a different variable or object. To dynamically allocate it, we need to use `new int*[size]`, since each element is of type `int*`. We need a pointer that stores the address of the first element in the array. A variable that can store the address of a pointer is a double pointer. Therefore, we declare a double pointer `int** arr` to store the address of the first element in the array of pointers. We can allocate an array of pointers using:

```cpp
int** arr = new int*[size];
```

(work-in-progress)
  