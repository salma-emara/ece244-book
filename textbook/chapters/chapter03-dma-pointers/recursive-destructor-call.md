# Objects Owning Other Dynamically Allocated Objects

## Recall: When Are Destructors Called?

Recall that destructors are called when an object goes out of scope or when `delete` is used on a pointer to an object. For example, in the following code, when the `Complex` object `c` goes out of scope at the end of the `main` function, the destructor `~Complex()` is automatically called. 

**Code**
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="cpp" output="Constructor called for Complex(1, 2)
Constructor called for Complex(4, 5)
Destructor called for Complex(4, 5)
Destructor called for Complex(1, 2)">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
class Complex {
  public:
    int real;
    int imag;
    Complex(int r, int i) { 
      real = r; 
      imag = i;
      cout << "Constructor called for Complex(" << real << ", " << imag << ")" << endl;
    }
    ~Complex() {
      cout << "Destructor called for Complex(" << real << ", " << imag << ")" << endl;
    }
};

int main(void) {
  Complex c(1, 2); 
  Complex *p = new Complex(4, 5); 
    
  delete p; 
  return 0;
} 
</code-runner>
</pre>

```{admonition} Note
In `delete p`, there are two things that happen:
Step 1: destructor `~Complex()` is called for the object pointed to by `p`, which is the dynamically allocated `Complex` object.

Step 2: After this line, the memory allocated for that object is freed.

This means the destructor is not responsible for freeing the memory of the object it is called on; it is the `delete` operator that frees the memory.
```

## Recall: Why Do We Need Destructors?

**Destructors need to be defined if the object has dynamically allocated memory that needs to be freed.** This means if `Complex` object had a pointer pointing to dynamically allocated memory, we would need to define a destructor to free that memory. If we do not define a destructor, the memory allocated for that object will not be freed, leading to a **memory leak**.

## Why Do We Need Destructors for Objects Owning Other Dynamically Allocated Objects?


What happens when an object has a data member that is **a pointer to another dynamically allocated object**? For example, consider the following `Complex` class that has a data member `Complex* next`, which is a pointer to a dynamically allocated `Complex` object.

```{figure} ./images/lack-destructor-object.png
:alt: No destructor for object
:class: with-shadow
:width: 600px
:align: center
:name: lack-destructor-object

When `delete p` is called, the destructor `~Complex()` is called for the first `Complex` object, and the memory for that object is freed. However, the memory for the second `Complex` object pointed to by `p->next` is not freed, leading to a memory leak.
```

In line 8, `Complex* next;` is a pointer to another `Complex` object. 

In line 17, `Complex *p = new Complex(4, 5);` dynamically allocates a `Complex` object and stores its address in the pointer `p`. The `next` pointer of this object is pointing to `nullptr` as set in the constructor.

In line 18 `p->next = new Complex(7, 8);`, the right hand side `new Complex(7, 8);` dynamically allocates another `Complex` object and assigns its address to `p->next`, which is the `next` pointer of the first `Complex` object.

In line 20, when we call `delete p;`, it calls the destructor (that does nothing as it's not defined) for the first `Complex` object, which is pointed to by `p`. Then, the memory for that first `Complex` object is freed. 

However, the second `Complex` object is not freed. This results in a **memory leak**. Of course, one can do `delete p->next` before `delete p;`; however, what if we have multiple objects and we forgot to free one object? 

**Solution**

The solution is to define a destructor for the `Complex` class, that frees the memory for the `next` pointer if it is not `nullptr`. This way, when `delete p;` is called, the destructor will also free the memory for the second `Complex` object pointed to by `p->next`.

In the following code, the destructor `~Complex()` is defined to free the memory for the `next` pointer if it is not `nullptr`.

We put this things further by having another `Complex` object that is pointed to by the `next` pointer of the second `Complex` object. 


```{figure} ./images/recursive-destructor-call.png
:alt: Recursive destructor call
:class: with-shadow
:width: 600px
:align: center
:name: recursive-destructor-call

When `delete p` is called, the destructor `~Complex()` is called for the first `Complex` object, which then calls the destructor for the second `Complex` object pointed to by `p->next`, freeing the memory for both objects.
```

As shown in {numref}`recursive-destructor-call`, when `delete p` is called, the destructor `~Complex()` is called for the first `Complex` object "A". The destructor will check the `next` of object "A", and `delete next;` if it's not `nullptr`. The `delete next` line will call the destructor for the second `Complex` object "B", which will then check its own `next` pointer. Since the `next` of "B" is `nullptr`, the destructor for "B" will not call `delete next;`. We will then return to the destructor for "A" at the line `delete next` and free the memory for the second `Complex` object "B". This means `delete next` on "B" (i) called the destructor on "B" and (ii) freed the memory for "B". Now, the destructor of "A" is done, and the memory of "A" will be freed by the `delete p;` line in `main`.

```{admonition} Note
The order of destructor calls is important. The destructor for the first object is called first, which then calls the destructor for the second object. When returning from the recursive destructor call, the memory for both objects is freed in the opposite order of their creation. -- talk about this!
```


You can try running the code here:
{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="cpp" highlight = "20" output="">
&#35;include &lt;iostream&gt;
using namespace std;
<br>
class Complex {
  public:
    int real;
    int imag;
    Complex* next; 
    Complex(int r, int i) { 
      real = r; 
      imag = i;
      next = nullptr;
    }
    ~Complex() {
      cout << "Destructor called for Complex(" << real << ", " << imag << ")" << endl;
      if (next != nullptr) {
        delete next; 
      }
    }
};

int main(void) {
    Complex *p = new Complex(4, 5); 
    p->next = new Complex(7, 8);
    
    delete p; 
    return 0;
} 
</code-runner>
</pre>

```cpp
class Complex {
  public:
    int real;
    int imag;
    Complex* next; 
    Complex(int r, int i) { 
      real = r; 
      imag = i;
      next = nullptr;
    }
    ~Complex() {
      cout << "Destructor called for Complex(" << real << ", " << imag << ")" << endl;
      if (next != nullptr) {
        delete next; 
      }
    }
};

int main(void) {
    Complex *p = new Complex(4, 5); 
    p->next = new Complex(7, 8);
    
    delete p; 
    return 0;
} 
```




