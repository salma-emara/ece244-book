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
        "5": "Define integer variable x = 10", 
        "6": "Define pointer p and initialize to NULL", 
        "7": "Make p point to the address of x", 
        "8": "Modify the value of x through pointer p (x = 5)
      },
      "folds": [{ "start": 13, "end": 16 }]
    }
    </script>

   #include &lt;iostream&gt;
    using namespace std;

    int main() {
      int** p2p; // Declare a double pointer
      int* p, *q;    // Declare a single pointer
      p = new int; // Dynamically allocate an integer
      return 0;
    }
  </c-visualizer>