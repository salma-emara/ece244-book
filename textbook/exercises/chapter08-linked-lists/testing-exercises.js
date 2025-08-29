let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "title": "Question 6 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "question": "The following is the definition of the class `ListNode` which represents a node in a linked list. All the members are public for simplicity. The head node of the linked list is pointed to by `head`.\n\n```{code-block} cpp\nclass ListNode {\n public:\n  int key;\n  ListNode* next;\n};\n\nListNode* head;\n```\n\nThe following is a non-member function to traverse the linked list. However, some content from the function is removed, as shown by the comments. What are the removed lines?\n\n```{code-block} cpp\n// Non-member function invoked as traverse(head)\n\nvoid traverse(ListNode* h) {\n  if (h == nullptr)\n    return;\n  ListNode** ptr = &(h->next);\n  // Line 1 removed\n\n  while (<condition removed>) {\n    // Line 2 removed\n    // Line 3 removed\n  }\n}\n```\n\n(1) What should `Line 1 removed` be replaced with? Choose one answer.\n\n",
      "answer": [
        1
      ],
      "choices": [
        "1. `Nothing`",
        "2. `cout << h->key << endl;`",
        "3. `cout << ptr->key << endl;`",
        "4. `cout << (*h)->key << endl;`",
        "5. `cout << (*ptr)->key;`"
      ],
      "explanations": [
        "2. `cout << h->key << endl;`"
      ]
    },
    {
      "title": "Question 6 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "question": "(2) What should the `<condition removed>` be? Choose one answer.\n",
      "answer": [
        0,
        1,
        2,
        3,
        4
      ],
      "choices": [
        "1. true",
        "2. `ptr != nullptr`",
        "3. `*ptr == nullptr`",
        "4. `*ptr != h`",
        "5. `ptr != *h`"
      ],
      "explanations": [
        "All are incorrect. The correct answer is `*ptr != nullptr`"
      ]
    },
    {
      "title": "Question 6 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "question": "(3) What should `Line 2 removed` be replaced with? Choose one answer.\n",
      "answer": [
        4
      ],
      "choices": [
        "1. true",
        "2. `ptr != nullptr`",
        "3. `*ptr == nullptr`",
        "4. `*ptr != h`",
        "5. `ptr != *h`"
      ],
      "explanations": [
        "5. `cout << (*ptr)->key << endl;`"
      ]
    },
    {
      "title": "Question 6 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "question": "(3) What should `Line 2 removed` be replaced with? Choose one answer.\n",
      "answer": [
        1
      ],
      "choices": [
        "1. Nothing",
        "2. `ptr = &((*ptr)->next);`",
        "3. `ptr = (*ptr)->next;`",
        "4. `ptr = ptr->next;`",
        "5. `ptr = (*ptr).next;`"
      ],
      "explanations": [
        "2. `ptr = &((*ptr)->next);"
      ]
    },
    {
      "title": "Question 7 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": false,
      "question": "It is desired to implement an efficient deletion function in a linked list. You are given a linked list pointed to by `head` and a pointer `ptr` to a node in a linked list, which is guaranteed not to be the last node on the list (*i.e.*, not the tail node ). Write a function `removeNode` that removes this node from the list. You should not iterate the nodes in the list. \n\nYou may assume the following is the definition of the class, `ListNode`. The head node of the linked list is pointed to by `head`.\n\n```{code-block} cpp\nclass ListNode {\n public:\n  int key;\n  ListNode* next;\n};\nListNode* head;\n```\n\nWrite your answer below. You are not allowed to change the function's argument or return type. \n",
      "starter-code": "void removeNode(ListNode* node){\n    \n    // Write your code here!\n\n}\n",
      "answer": "\nvoid removeNode(ListNode* node) {\n  ListNode* next = node->next;\n  node->key = next->key;\n  node->next = next->next;\n  delete next;\n}\n\n"
    },
    {
      "title": "Question 8 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "\nYou are provided with an implementation of a `linkedList` class as well as a `listNode` class. The `linkedList` class is shown below, you may assum every function is correctly implemented. \n\n```{code-block} cpp\nclass linkedList {\n private:\n  listNode* head;\n\n public:\n  linkedList();\n  linkedList(const linkedList& other);\n  ~linkedList();\n  linkedList& operator=(const linkedList& rhs);\n  /*creates a new head with key k and updates the linked list accordingly*/\n  void insertKeyatHead(int k);\n\n  /*creates a new node at tail with value k*/\n  void insertKeyatTail(int k);\n\n  // if the list is empty the following functions\n  // return false and do nothing, otherwise they perform the\n  // mentioned tasks, update their arguments with the key\n  // of deleted node, and return true\n  bool deleteTail(int& k);  // deletes the node at tail\n  bool deleteHead(int& k);  // deletes the node at head\n};\n```\n\nWe wish to implement a `myQueue` class that represents a *queue*. A queue is a data structure in which all insertions are done on one end, called the *back* and all deletions are done on another end called the *front*. The `myQueue` class looks has the following definition:\n\n```{code-block} cpp\nclass myQueue {\n private:\n  linkedList data; /* lined list */\n public:\n  myQueue();             /* create an empty queue */\n  void push_back(int k); /* insert node with key k at back */\n  int pop_front();       /* remove node at front, return its key */\n  int front();           /* return key of node at front */\n  bool isempty();        /* return true if queue is empty */\n};\n```\n\nYou are required to implement the following functions of the queue class to have the mentioned functionality. Note that the only private data member of `myQueue` is a `linkedList` named `data`. \n\n(1) Implement the `void push_back(int k)` function. In this function, a new node with value of `k` is added at the back of the queue.\n\n",
      "starter-code": "void push_back(int k){\n\n}\n",
      "answer": "void push_back(int k){\n  data.insertKeyatTail(k);\n}\n"
    },
    {
      "title": "Question 8 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "(2) Implement the `int front()` function. In this function, the value of the key of the front node in the queue is returned and no updated happen to the queue. If the queue is empty `-1` is returned. \n",
      "starter-code": "int front(){\n\n}\n",
      "answer": "int front(){\n  int d;\n  bool isDeleted = data.deleteHead(d);\n  if (isDeleted == false) {\n    return -1;\n  } else {\n    data.insertKeyatHead(d);\n    return d;\n  }\n}\n"
    },
    {
      "title": "Question 8 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "(3) Implement the `bool isempty()` function which returns `true` if there are no nodes in the queue and `false` otherwise. \n",
      "starter-code": "int isempty(){\n\n}\n",
      "answer": "bool isempty(){\n  int d;\n  bool isDeleted = data.deleteHead(d);\n  if (isDeleted == false) {\n    return true;\n  } else {\n    data.insertKeyatHead(d);\n      return false;\n  }\n}\n"
    },
    {
      "title": "Question 8 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "(4) Implement the `int pop_front()` function. In this function, the value of the key of the front of the queue is returned and the node at front is removed from the queue. If the queue is empty, `-1` is returned. \n",
      "starter-code": "int pop_front(){\n\n}\n",
      "answer": "int pop_front(){\n  int d;\n  bool isDeleted = data.deleteHead(d);\n  if (isDeleted == false) {\n    return -1;\n  } else {\n    return d;\n  } \n}\n"
    },
    {
      "title": "Question 6 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "Circular linked lists are a variation on linked lists described in class. In a circular linked list, the next field in the last node in the list is not set to NULL (or nullptr). Rather, the field is made to point to the first node in the list, hence the name \"circular\". An example of a circular linked list is\nshown below.\n\nConsider the class `ListNode` shown below. It represents a node in a circular linked list. It is similar to the one described in class and that you implemented in the labs, but all members are public for simplicity. The declaration of a head pointer, which points to the head of the list, is also shown.\n\n```{code-block} cpp\nclass ListNode {\n public:\n  int id;\n  ListNode* next;\n};\nListNode* head;\n```\n\n\n```{figure} _images/circular-linked-list.png\n```\n\n(1) Write a non-member function traverse `ListNode* h` that traverses the linked list. The function is invoked as `traverse(head)` to start the traversal at the head of the list. In the traversal, visiting a node is simply printing its `id` field to `cout`.\n",
      "starter-code": "void traverse(ListNode* h) {\n\n}\n",
      "answer": "void traverse(ListNode* h) {\n  if (h == nullptr)\n    return;\n  ListNode* curr = h;\n  cout << curr->id << \" \";\n  curr = curr->next;\n  while (curr != h) {\n    cout << curr->id << \" \";\n    curr = curr->next;\n  }\n}\n"
    },
    {
      "title": "Question 6 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "(2) Write a non-member function `deleteNode(ListNode*& h, ListNode* p)` that deletes the node *after the one pointed to by p* from the circular list pointed to by h. The function is invoked as `deleteNode(head, ptr)`, where `ptr` is guaranteed to point to one of the nodes on the list.\n",
      "starter-code": "void deleteNode(ListNode*& h, ListNode* p) {\n\n}\n",
      "answer": "\nvoid deleteNode(ListNode*& h, ListNode* p) {\n  if (h == nullptr)\n    return;\n  if (h->next == h) {  // one element, guaranteed p == h\n    delete h;\n    h = nullptr;\n    return;\n  }\n  \n  if (p->next == h) {\n    h = h->next;\n  }\n  \n  ListNode* next = p->next;\n  p->next = next->next;\n  delete next;\n}\n"
    },
    {
      "title": "Question 6 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "(3) It is sometimes not known if the linked list pointed to by `head` is circular or just a regular linked list with the next field in the last node set to `NULL`. Write a non-member function `isCircular(ListNode* h)` that returns true if the list is circular and false otherwise. The function is invoked as `isCircular(head)`.\n",
      "starter-code": "bool isCircular(ListNode* h) {\n\n}\n",
      "answer": "bool isCircular(ListNode* h) {\n  if (h == nullptr) {  // is circular and regular at the same time\n    return true;\n  }\n  ListNode* p = h->next;\n  while (p != nullptr && p != h) {\n    p = p->next;\n  }\n  return p == h;\n}\n"
    }
  ]
};