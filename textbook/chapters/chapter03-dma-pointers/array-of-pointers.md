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
        "15": "Free the dynamically allocated memory",
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
      p2p = &p; 
      q = *p2p; 
      *q = 8; 
      cout &lt;&lt; "*p = " &lt;&lt; *p &lt;&lt; endl; 
      cout &lt;&lt; "*q = " &lt;&lt; *q &lt;&lt; endl; 
      cout &lt;&lt; "**p2p = " &lt;&lt; **p2p &lt;&lt; endl; 
      delete p; 
      delete p2p; // Free the dynamically allocated memory -- double free
      return 0;
    }
  </c-visualizer>

  