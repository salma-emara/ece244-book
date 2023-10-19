# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 6 in Fall 2021 Final Exam [Intermediate]**

The following is the definition of the class `ListNode` which represents a node in a linked list. All the members are public for simplicity. The head node of the linked list is pointed to by `head`.

```{code-block} cpp
class ListNode {
 public:
  int key;
  ListNode* next;
};

ListNode* head;
```

The following is a non-member function to traverse the linked list. However, some content from the function is removed, as shown by the comments. What are the removed lines?

```{code-block} cpp
// Non-member function invoked as traverse(head)

void traverse(ListNode* h) {
  if (h == nullptr)
    return;
  ListNode** ptr = &(h->next);
  // Line 1 removed

  while (<condition removed>) {
    // Line 2 removed
    // Line 3 removed
  }
}
```

1. What should `Line 1 removed` be replaced with? Choose one answer.

    1. Nothing
    2. `cout << h->key << endl;`
    3. `cout << ptr->key << endl;`
    4. `cout << (*h)->key << endl;`
    5. `cout << (*ptr)->key;`
    
    ````{admonition} Answer
    :class: dropdown
    2. `cout << h->key << endl;`
    ````
   
2. What should the `<condition removed>` be? Choose one answer.
    1. `true`
    2. `ptr != nullptr`
    3. `*ptr == nullptr`
    4. `*ptr != h`
    5. `ptr != *h`
    ````{admonition} Answer
    :class: dropdown
    All are incorrect. The correct answer is `*ptr != nullptr`
    ````

3. What should `Line 2 removed` be replaced with? Choose one answer.

    1. Nothing
    2. `cout << ptr->key << endl;`
    3. `cout << (*ptr).key << endl;`
    4. `cout << &(*ptr)->key << endl;`
    5. `cout << (*ptr)->key << endl;`
    ````{admonition} Answer
    :class: dropdown
    5. `cout << (*ptr)->key << endl;`
    ````

4. What should `Line 3 removed` be replaced with? Choose one answer.

    1. Nothing
    2. `ptr = &((*ptr)->next);`
    3. `ptr = (*ptr)->next;`
    4. `ptr = ptr->next;`
    5. `ptr = (*ptr).next;`
    ````{admonition} Answer
    :class: dropdown
    2. `ptr = &((*ptr)->next);`
    ````

**Question 7 in Fall 2021 Final Exam [Intermediate]**

It is desired to implement an efficient deletion function in a linked list. You are given a linked list pointed to by `head` and a pointer `ptr` to a node in a linked list, which is guaranteed not to be the last node on the list (*i.e.*, not the tail node ). Write a function `removeNode` that removes this node from the list. You should not iterate the nodes in the list. 

You may assume the following is the definition of the class, `ListNode`. The head node of the linked list is pointed to by `head`.

```{code-block} cpp
class ListNode {
 public:
  int key;
  ListNode* next;
};
ListNode* head;
```

Write your answer below. You are not allowed to change the function's argument or return type. 

```{code-block} cpp
void removeNode(ListNode* node){
    // write your code here!
}
```

````{admonition} Answer
:class: dropdown
```{code-block} cpp
void removeNode(ListNode* node) {
  ListNode* next = node->next;
  node->key = next->key;
  node->next = next->next;
  delete next;
}
```
````

**Question 8 in Fall 2021 Final Exam [Intermediate]**

You are provided with an implementation of a `linkedList` class as well as a `listNode` class. The `linkedList` class is shown below, you may assum every function is correctly implemented. 

```{code-block} cpp
class linkedList {
 private:
  listNode* head;

 public:
  linkedList();
  linkedList(const linkedList& other);
  ~linkedList();
  linkedList& operator=(const linkedList& rhs);
  /*creates a new head with key k and updates the linked list accordingly*/
  void insertKeyatHead(int k);

  /*creates a new node at tail with value k*/
  void insertKeyatTail(int k);

  // if the list is empty the following functions
  // return false and do nothing, otherwise they perform the
  // mentioned tasks, update their arguments with the key
  // of deleted node, and return true
  bool deleteTail(int& k);  // deletes the node at tail
  bool deleteHead(int& k);  // deletes the node at head
};
```

We wish to implement a `myQueue` class that represents a *queue*. A queue is a data structure in which all insertions are done on one end, called the *back* and all deletions are done on another end called the *front*. The `myQueue` class looks has the following definition:

```{code-block} cpp
class myQueue {
 private:
  linkedList data; /* lined list */
 public:
  myQueue();             /* create an empty queue */
  void push_back(int k); /* insert node with key k at back */
  int pop_front();       /* remove node at front, return its key */
  int front();           /* return key of node at front */
  bool isempty();        /* return true if queue is empty */
};
```

You are required to implement the following functions of the queue class to have the mentioned functionality. Note that the only private data member of `myQueue` is a `linkedList` named `data`. 

1. Implement the `void push_back(int k)` function. In this function, a new node with value of `k` is added at the back of the queue.
    ```{code-block} cpp
    void push_back(int k){

    }
    ```
    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    void push_back(int k){
        In progress!
    }
    ```
    ````
2. Implement the `int front()` function. In this function, the value of the key of the front node in the queue is returned and no updated happen to the queue. If the queue is empty `-1` is returned. 
    ```{code-block} cpp
    int front(){

    }
    ```
    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    int front(){
        In progress!
    }
    ```
    ````
3. Implement the `bool isempty()` function which returns `true` if there are no nodes in the queue and `false` otherwise. 
    ```{code-block} cpp
    bool isempty(){

    }
    ```
    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    bool isempty(){
        In progress!
    }
    ```
    ````
4. Implement the `int pop_front()` function. In this function, the value of the key of the front of the queue is returned and the node at front is removed from the queue. If the queue is empty, `-1` is returned. 
    ```{code-block} cpp
    int pop_front(){

    }
    ```

    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    int pop_front(){
       In progress! 
    }
    ```
    ````

In progress!