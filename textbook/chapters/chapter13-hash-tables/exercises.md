# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 10 in Fall 2022 Final Exam [Challenging]**

Thanks to your previous implementation of the VTuber, it became an instant modern classic. With great popularity comes greater responsibility. Now there are more than 300,000 VTubers streaming on the MeTube, and your engineering manager asks you to implement a data structure that allows users to quickly lookup whether a specific Vtuber is currently live-streaming. 

A native solution would be using an array of 300,000 entries, with each entry holding a boolean variable indicating whether the corresponding Vtuber is live-streaming or not. However, there are two major problems: 

1. Users can only query the database with Vtubers' names, not some internal ids.
2. Only ~20% of totls Vtubers are streaming at any given time, so most array enteris are inactive. However, you'd like to maintain a lookup time that is approximately $O(n)$.

Now, you suddenly recall that in ECE 244 you learned the hash table, which resolves collisions with chaining. The hash table would suit your needs perfectly. Even better, you can use an existing linked list implementation written by your new colleague.

The following is the class declaration of the linked list. Assume that it works correctly and encapsulates all the operations your hash table may need. Read it carefully, as you will need it to build your VTubers hash table later. **Remember, it will not allocate any list node automatically, and only the destructor will deallocate list node memory.**

```{code-block} cpp
#include <iostream>
using namespace std;

class ListNode {
 public:
  ListNode(const string& name_) {
    name = name_;
    next = NULL;
  };
  string name;
  ListNode* next;
};

class LinkedList {
 private:
  ListNode* head;

 public:
  // Default constructor: initialize the head to NULL.
  LinkedList();

  // Return true if and only if the list is empty,
  bool is_empty();

  // Insert the given node to the head of the list.
  // Time complexity: 0(1)
  void insert(ListNode* node);

  // Traversing from the head. Remove the first node found with the given
  // name from the list. The removed node is NOT deallocated.
  // Returns this node (or NULL if the name is not found).
  // Time complexity: 0(n)
  ListNode* remove(const string& name);

  // Return true if there exists at least one node with the given name.
  // Time complexity: 0(n)
  bool find(const string& name);

  // Remove the current head node from the linked list,
  // and return it.
  // Move the head one node forward.
  // Time complexity: 0(1)
  ListNode* pop_head();

  // Destructor: Properly deallocate all the nodes.
  ~LinkedList();
};
```

Also, you are given a string hash function, which uses a secret algorithm to turn the given string into a non-negative integer value. You can safely assume that given the same string inputs, the output value is always the same. However, two different strings may be turned into the same number.

```{code-block} cpp
int string_hash(const strings name);
```

And finally, here is how the hash table is declared. It stores all the names of active VTubers at a given time, **using the name as a unique key**. The hash table **solves collisions by chaining** using the linked list.

```{code-block} cpp
#define INIT_CAPACITY 32
class HashTable {
 private:
  // Array of Linked List: resolving collisions by chaining
  LinkedList** table;
  // The length of the table array,
  int table_slot_size;
  // Keep track of how many elements (names) are in the hash table
  int num_elements;
  int get_hash_index(const string& name) {
    return string_hash(name) % table_slot_size;
  }

 public:
  // Constructors and destructors.
  HashTable();
  ~HashTable();
  // Hash table method,
  bool exist(const string& name);
  bool insert(const string& name);
  bool remove(const string& name);
  bool change_name(const string& old_name, const string& new_name);
};
```

Essentially, the hash table should be similar to what has been discussed during the lecture. The
following diagram should help you visualize what this hash table looks like:



```{figure} ./images/hashtable.png
:alt: Hash Table
:class: with-shadow
:width: 800px
:align: center
Hash Table
```

When a VTuber goes online for streaming, `insert()` should be called to bring the name into the
hash table. When the VTuber goes offline, `remove()` method should be called to remove the
name from the hash table. The constructor and `exist()` methods are already implemented as
shown below. They should help you clarify how the hash table works.


```{code-block} cpp
HashTable::HashTable() {
  table = new LinkedList*[INIT_CAPACITY];
  table_slot_size = INIT_CAPACITY;
  num_elements = 0;
  for (int i = 0; i < table_slot_size; ++i) {
    table[i] = NULL;
  }
}
bool HashTable::exist(const string& name) {
  int idx = this->get_hash_index(name);
  if (table[idx] == NULL) {
    return false;
  }
  return table[idx]->find(name);
}
```

1. Implement the `insert()` method of the hash table. The insert should fulfill the following requirements:
    1. You should maintain the unique name property. If the name already exists in the hash table, you should return false. Otherwise, allocate a list node for the string and insert it into the correct list, and return true.
    2. To address the collision, your hashtable should dynamically grow at run time. Specifically, when you try to insert a new name but the value of `num_elements` will
    become equal to or larger than `table_slot_size/2`, you should double
    `table_slot_size` and allocate a new table with the updated size. Then, you should
    move all the existing names from the old table to the newly allocated table, and
    deallocate the old table. Notice that the hash index is directly related to the `slot_list_size`, so the hash index of the same name can be changed when moving from one table to another.

    3. You can add additional member functions if you need to.
    4. Your code should not trigger any segmentation fault, and it should not leak memory.
    You can define helper functions if you find them useful. You can make helpers as member functions if you think that would be necessary.
    ```{code-block} cpp
    // Implement bool HashTable::insert(const string& name), and define
    // any helper functions here.
    ```
    ````{admonition} Answer
    :class: dropdown
    bool HashTable::insert(const string& name){}
    ````

2. Implement the `remove` method. Return true if the given name exists and is successfully removed, otherwise, return false. Your code should not trigger any segmentation fault, and it should not leak memory.
    ```{code-block} cpp
    bool HashTable::remove(const string& name) {
    ```

3. Implement the `change_name` method. It removes the `old_name` and inserts the
`new_name`. Return true if successful. Otherwise, it returns false either when the `old_name`
doesn’t exist, or the `new_name` is the same as any existing name. Your code should not trigger
any segmentation fault, and it should not leak memory. Hint: you can use the function you
implemented in the previous questions.
    ```{code-block} cpp
    bool HashTable::change_name(const strings old_name, const strings new_name) {
    ```

4.  Implement the destructor of `HashTable`. It should deallocate the table array and all
the lists. Your code should not trigger any segmentation fault, and it should not leak memory.
    ```{code-block} cpp
    HashTable::~HashTable() {
    ```

In progress!