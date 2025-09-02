let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "question-id": "chapter-07-Q1",
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
        "(1) `Nothing`",
        "(2) `cout << h->key << endl;`",
        "(3) `cout << ptr->key << endl;`",
        "(4) `cout << (*h)->key << endl;`",
        "(5) `cout << (*ptr)->key;`"
      ],
      "explanation": "(2) `cout << h->key << endl;`"
    },
    {
      "question-id": "chapter-07-Q2",
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
        "(1) true",
        "(3) `ptr != nullptr`",
        "(3) `*ptr == nullptr`",
        "(4) `*ptr != h`",
        "(5) `ptr != *h`"
      ],
      "explanation": "All are incorrect. The correct answer is `*ptr != nullptr`"
    },
    {
      "question-id": "chapter-07-Q3",
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
        "(1) true",
        "(2) `ptr != nullptr`",
        "(3) `*ptr == nullptr`",
        "(4) `*ptr != h`",
        "(5) `ptr != *h`"
      ],
      "explanation": "(5) `cout << (*ptr)->key << endl;`"
    },
    {
      "question-id": "chapter-07-Q4",
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
        "(1)Nothing",
        "(2) `ptr = &((*ptr)->next);`",
        "(3) `ptr = (*ptr)->next;`",
        "(4) `ptr = ptr->next;`",
        "(5) `ptr = (*ptr).next;`"
      ],
      "explanation": " (2) `ptr = &((*ptr)->next);`"
    },
    {
      "question-id": "chapter-07-Q5",
      "title": "Question 7 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": false,
      "question": "It is desired to implement an efficient deletion function in a linked list. You are given a linked list pointed to by `head` and a pointer `ptr` to a node in a linked list, which is guaranteed not to be the last node on the list (*i.e.*, not the tail node ). Write a function `removeNode` that removes this node from the list. You should not iterate the nodes in the list. \n\nYou may assume the following is the definition of the class, `ListNode`. The head node of the linked list is pointed to by `head`.\n\n```{code-block} cpp\nclass ListNode {\n public:\n  int key;\n  ListNode* next;\n};\nListNode* head;\n```\n\nWrite your answer below. You are not allowed to change the function's argument or return type. \n",
      "starter-code": "void removeNode(ListNode* node){\n    \n    // Write your code here!\n\n}\n",
      "answer": "\nvoid removeNode(ListNode* node) {\n  ListNode* next = node->next;\n  node->key = next->key;\n  node->next = next->next;\n  delete next;\n}\n\n",
      "append-before": "class ListNode {\n public:\n  int key;\n  ListNode* next;\n};\nListNode* head;\n",
      "main-function": "#include <iostream>\nusing namespace std;\n\nvoid printList(ListNode* h) {\n  while (h != nullptr) {\n    cout << h->key;\n    if (h->next) cout << \" -> \";\n    h = h->next;\n  }\n  cout << endl;\n}\n\nint main() {\n  int N, idx;\n  cin >> N >> idx;\n\n  // Build list for testcases\n  head = nullptr;\n  ListNode* tail = nullptr;\n  for (int i = 0; i < N; i++) {\n    int val;\n    cin >> val;\n    ListNode* newNode = new ListNode;\n    newNode->key = val;\n    newNode->next = nullptr;\n    if (head == nullptr) {\n      head = newNode;\n      tail = newNode;\n    } else {\n      tail->next = newNode;\n      tail = newNode;\n    }\n  }\n\n  cout << \"Original list:\" << endl;\n  printList(head);\n\n  // Get pointer to node idx\n  ListNode* target = head;\n  for (int i = 0; i < idx; i++) {\n    target = target->next;\n  }\n\n  cout << \"Deleting node at index \" << idx\n       << \" (value \" << target->key << \"):\" << endl;\n\n  removeNode(target);\n\n  printList(head);\n\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "5 2\n10 20 30 40 50\n"
          ],
          "output": [
            "Original list:\n10 -> 20 -> 30 -> 40 -> 50\nDeleting node at index 2 (value 30):\n10 -> 20 -> 40 -> 50\n"
          ]
        },
        {
          "input": [
            "5 0\n5 10 15 20 25\n"
          ],
          "output": [
            "Original list:\n5 -> 10 -> 15 -> 20 -> 25\nDeleting node at index 0 (value 5):\n10 -> 15 -> 20 -> 25\n"
          ]
        },
        {
          "input": [
            "2 0\n100 200\n"
          ],
          "output": [
            "Original list:\n100 -> 200\nDeleting node at index 0 (value 100):\n200\n"
          ]
        },
        {
          "input": [
            "6 3\n7 7 7 7 8 9\n"
          ],
          "output": [
            "Original list:\n7 -> 7 -> 7 -> 7 -> 8 -> 9\nDeleting node at index 3 (value 7):\n7 -> 7 -> 7 -> 8 -> 9\n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-07-Q6",
      "title": "Question 8 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "\nYou are provided with an implementation of a `linkedList` class as well as a `listNode` class. The `linkedList` class is shown below, you may assum every function is correctly implemented. \n\n```{code-block} cpp\nclass linkedList {\n private:\n  listNode* head;\n\n public:\n  linkedList();\n  linkedList(const linkedList& other);\n  ~linkedList();\n  linkedList& operator=(const linkedList& rhs);\n  /*creates a new head with key k and updates the linked list accordingly*/\n  void insertKeyatHead(int k);\n\n  /*creates a new node at tail with value k*/\n  void insertKeyatTail(int k);\n\n  // if the list is empty the following functions\n  // return false and do nothing, otherwise they perform the\n  // mentioned tasks, update their arguments with the key\n  // of deleted node, and return true\n  bool deleteTail(int& k);  // deletes the node at tail\n  bool deleteHead(int& k);  // deletes the node at head\n};\n```\n\nWe wish to implement a `myQueue` class that represents a *queue*. A queue is a data structure in which all insertions are done on one end, called the *back* and all deletions are done on another end called the *front*. The `myQueue` class looks has the following definition:\n\n```{code-block} cpp\nclass myQueue {\n private:\n  linkedList data; /* lined list */\n public:\n  myQueue();             /* create an empty queue */\n  void push_back(int k); /* insert node with key k at back */\n  int pop_front();       /* remove node at front, return its key */\n  int front();           /* return key of node at front */\n  bool isempty();        /* return true if queue is empty */\n};\n```\n\nYou are required to implement the following functions of the queue class to have the mentioned functionality. Note that the only private data member of `myQueue` is a `linkedList` named `data`. \n\n(1) Implement the `void myQueue::push_back(int k);` function. In this function, a new node with value of `k` is added at the back of the queue.\n\n",
      "starter-code": "void myQueue::push_back(int k){\n\n}\n",
      "answer": "void myQueue::push_back(int k){\n  data.insertKeyatTail(k);\n}\n",
      "append-before": "#include <iostream>\nusing namespace std;\n\nclass listNode {\n public:\n  int key;\n  listNode* next;\n  listNode(int k) : key(k), next(nullptr) {}\n};\n\nclass linkedList {\nprivate:\n  listNode* head;\n\npublic:\n  // Default constructor\n  linkedList() : head(nullptr) {}\n\n  // Copy constructor\n  linkedList(const linkedList& other) {\n    head = nullptr;\n    listNode* temp = other.head;\n    listNode** ptr = &head;\n    while (temp) {\n      *ptr = new listNode(temp->key);\n      ptr = &((*ptr)->next);\n      temp = temp->next;\n    }\n  }\n\n  // Destructor\n  ~linkedList() {\n    listNode* curr = head;\n    while (curr) {\n      listNode* next = curr->next;\n      delete curr;\n      curr = next;\n    }\n  }\n\n  // Assignment operator\n  linkedList& operator=(const linkedList& rhs) {\n    if (this == &rhs) return *this; // self-assignment check\n\n    // Delete existing nodes\n    listNode* curr = head;\n    while (curr) {\n      listNode* next = curr->next;\n      delete curr;\n      curr = next;\n    }\n    head = nullptr;\n\n    // Deep copy from rhs\n    listNode* temp = rhs.head;\n    listNode** ptr = &head;\n    while (temp) {\n      *ptr = new listNode(temp->key);\n      ptr = &((*ptr)->next);\n      temp = temp->next;\n    }\n    return *this;\n  }\n\n  // Insert at head\n  void insertKeyatHead(int k) {\n    listNode* node = new listNode(k);\n    node->next = head;\n    head = node;\n  }\n\n  // Insert at tail\n  void insertKeyatTail(int k) {\n    listNode* node = new listNode(k);\n    if (!head) {\n      head = node;\n      return;\n    }\n    listNode* temp = head;\n    while (temp->next) temp = temp->next;\n    temp->next = node;\n  }\n\n  // Delete head node\n  bool deleteHead(int& k) {\n    if (!head) return false;\n    listNode* temp = head;\n    k = temp->key;\n    head = head->next;\n    delete temp;\n    return true;\n  }\n\n  bool deleteTail(int& k) {\n    if (!head) return false;\n    if (!head->next) { // only one node\n      k = head->key;\n      delete head;\n      head = nullptr;\n      return true;\n    }\n    listNode* temp = head;\n    while (temp->next->next) temp = temp->next;\n    k = temp->next->key;\n    delete temp->next;\n    temp->next = nullptr;\n    return true;\n  }\n\n  listNode* getHead() { return head; }\n  bool isEmpty() { return head == nullptr; }\n};\n\nclass myQueue {\n private:\n  linkedList data;  // linked list\n\n public:\n  myQueue() {}\n  void push_back(int k);\n\n  void printQueue() {\n    listNode* temp = data.getHead();\n    cout << \"Queue contents (front → back): \";\n    while (temp) {\n      cout << temp->key << \" \";\n      temp = temp->next;\n    }\n    cout << endl;\n  }\n\n};\n",
      "main-function": "int main() {\n  myQueue q;\n  int x;\n\n  // Read until end-of-file (Ctrl+D or file input)\n  while (cin >> x) {\n      q.push_back(x);\n      cout << \"Pushed: \" << x << endl;\n  }\n\n  // Print the queue at the end\n  q.printQueue();\n\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "5 10 15 20\n"
          ],
          "output": [
            "Pushed: 5\nPushed: 10\nPushed: 15\nPushed: 20\nQueue contents (front → back): 5 10 15 20\n"
          ]
        },
        {
          "input": [
            "0\n-5\n-5\n42\n42\n999999999\n"
          ],
          "output": [
            "Pushed: 0\nPushed: -5\nPushed: -5\nPushed: 42\nPushed: 42\nPushed: 999999999\nQueue contents (front → back): 0 -5 -5 42 42 999999999 \n"
          ]
        },
        {
          "input": [
            "7\n"
          ],
          "output": [
            "Pushed: 7\nQueue contents (front → back): 7 \n"
          ]
        },
        {
          "input": [
            "5\n10\n15\n"
          ],
          "output": [
            "Pushed: 5\nPushed: 10\nPushed: 15\nQueue contents (front → back): 5 10 15 \n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-07-Q7",
      "title": "Question 8 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "(2) Implement the `int myQueue::front()` function. In this function, the value of the key of the front node in the queue is returned and no updated happen to the queue. If the queue is empty `-1` is returned. \n",
      "starter-code": "int myQueue::front(){\n\n}\n",
      "answer": "int myQueue::front(){\n  int d;\n  bool isDeleted = data.deleteHead(d);\n  if (isDeleted == false) {\n    return -1;\n  } else {\n    data.insertKeyatHead(d);\n    return d;\n  }\n}\n",
      "append-before": "#include <iostream>\nusing namespace std;\n\nclass listNode {\n public:\n  int key;\n  listNode* next;\n  listNode(int k) : key(k), next(nullptr) {}\n};\n\nclass linkedList {\nprivate:\n  listNode* head;\n\npublic:\n  // Default constructor\n  linkedList() : head(nullptr) {}\n\n  // Copy constructor\n  linkedList(const linkedList& other) {\n    head = nullptr;\n    listNode* temp = other.head;\n    listNode** ptr = &head;\n    while (temp) {\n      *ptr = new listNode(temp->key);\n      ptr = &((*ptr)->next);\n      temp = temp->next;\n    }\n  }\n\n  // Destructor\n  ~linkedList() {\n    listNode* curr = head;\n    while (curr) {\n      listNode* next = curr->next;\n      delete curr;\n      curr = next;\n    }\n  }\n\n  // Assignment operator\n  linkedList& operator=(const linkedList& rhs) {\n    if (this == &rhs) return *this; // self-assignment check\n\n    // Delete existing nodes\n    listNode* curr = head;\n    while (curr) {\n      listNode* next = curr->next;\n      delete curr;\n      curr = next;\n    }\n    head = nullptr;\n\n    // Deep copy from rhs\n    listNode* temp = rhs.head;\n    listNode** ptr = &head;\n    while (temp) {\n      *ptr = new listNode(temp->key);\n      ptr = &((*ptr)->next);\n      temp = temp->next;\n    }\n    return *this;\n  }\n\n  // Insert at head\n  void insertKeyatHead(int k) {\n    listNode* node = new listNode(k);\n    node->next = head;\n    head = node;\n  }\n\n  // Insert at tail\n  void insertKeyatTail(int k) {\n    listNode* node = new listNode(k);\n    if (!head) {\n      head = node;\n      return;\n    }\n    listNode* temp = head;\n    while (temp->next) temp = temp->next;\n    temp->next = node;\n  }\n\n  // Delete head node\n  bool deleteHead(int& k) {\n    if (!head) return false;\n    listNode* temp = head;\n    k = temp->key;\n    head = head->next;\n    delete temp;\n    return true;\n  }\n\n  bool deleteTail(int& k) {\n    if (!head) return false;\n    if (!head->next) { // only one node\n      k = head->key;\n      delete head;\n      head = nullptr;\n      return true;\n    }\n    listNode* temp = head;\n    while (temp->next->next) temp = temp->next;\n    k = temp->next->key;\n    delete temp->next;\n    temp->next = nullptr;\n    return true;\n  }\n\n  listNode* getHead() { return head; }\n  bool isEmpty() { return head == nullptr; }\n};\n\nclass myQueue {\n private:\n  linkedList data;  // linked list\n\n public:\n  myQueue() {}\n  // push_back from Part (1)\n  void push_back(int k) { data.insertKeyatTail(k); }\n  int front();\n\n  void printQueue() {\n    listNode* temp = data.getHead();\n    cout << \"Queue contents (front → back): \";\n    while (temp) {\n      cout << temp->key << \" \";\n      temp = temp->next;\n    }\n    cout << endl;\n  }\n\n};\n",
      "main-function": "\nint main() {\n  myQueue q;\n  int x;\n\n  // Push values\n  while (cin >> x) {\n    q.push_back(x);\n    cout << \"Pushed: \" << x << endl;\n  }\n\n  // Print front\n  cout << \"Front of queue: \" << q.front() << endl;\n\n  return 0;\n}\n\n",
      "testcases": [
        {
          "input": [
            "5 10 15 20\n"
          ],
          "output": [
            "Pushed: 5\nPushed: 10\nPushed: 15\nPushed: 20\nFront of queue: 5\n"
          ]
        },
        {
          "input": [
            "\n"
          ],
          "output": [
            "Front of queue: -1\n"
          ]
        },
        {
          "input": [
            "7\n"
          ],
          "output": [
            "Pushed: 7\nFront of queue: 7\n"
          ]
        },
        {
          "input": [
            "0\n-5\n-5\n42\n42\n999999999\n"
          ],
          "output": [
            "Pushed: 0\nPushed: -5\nPushed: -5\nPushed: 42\nPushed: 42\nPushed: 999999999\nFront of queue: 0\n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-07-Q8",
      "title": "Question 8 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "(3) Implement the `bool isempty()` function which returns `true` if there are no nodes in the queue and `false` otherwise. \n",
      "starter-code": "bool myQueue::isempty(){\n\n}\n",
      "answer": "bool myQueue::isempty(){\n  int d;\n  bool isDeleted = data.deleteHead(d);\n  if (isDeleted == false) {\n    return true;\n  } else {\n    data.insertKeyatHead(d);\n      return false;\n  }\n}\n",
      "append-before": "#include <iostream>\nusing namespace std;\n\nclass listNode {\n public:\n  int key;\n  listNode* next;\n  listNode(int k) : key(k), next(nullptr) {}\n};\n\nclass linkedList {\nprivate:\n  listNode* head;\n\npublic:\n  // Default constructor\n  linkedList() : head(nullptr) {}\n\n  // Copy constructor\n  linkedList(const linkedList& other) {\n    head = nullptr;\n    listNode* temp = other.head;\n    listNode** ptr = &head;\n    while (temp) {\n      *ptr = new listNode(temp->key);\n      ptr = &((*ptr)->next);\n      temp = temp->next;\n    }\n  }\n\n  // Destructor\n  ~linkedList() {\n    listNode* curr = head;\n    while (curr) {\n      listNode* next = curr->next;\n      delete curr;\n      curr = next;\n    }\n  }\n\n  // Assignment operator\n  linkedList& operator=(const linkedList& rhs) {\n    if (this == &rhs) return *this; // self-assignment check\n\n    // Delete existing nodes\n    listNode* curr = head;\n    while (curr) {\n      listNode* next = curr->next;\n      delete curr;\n      curr = next;\n    }\n    head = nullptr;\n\n    // Deep copy from rhs\n    listNode* temp = rhs.head;\n    listNode** ptr = &head;\n    while (temp) {\n      *ptr = new listNode(temp->key);\n      ptr = &((*ptr)->next);\n      temp = temp->next;\n    }\n    return *this;\n  }\n\n  // Insert at head\n  void insertKeyatHead(int k) {\n    listNode* node = new listNode(k);\n    node->next = head;\n    head = node;\n  }\n\n  // Insert at tail\n  void insertKeyatTail(int k) {\n    listNode* node = new listNode(k);\n    if (!head) {\n      head = node;\n      return;\n    }\n    listNode* temp = head;\n    while (temp->next) temp = temp->next;\n    temp->next = node;\n  }\n\n  // Delete head node\n  bool deleteHead(int& k) {\n    if (!head) return false;\n    listNode* temp = head;\n    k = temp->key;\n    head = head->next;\n    delete temp;\n    return true;\n  }\n\n  bool deleteTail(int& k) {\n    if (!head) return false;\n    if (!head->next) { // only one node\n      k = head->key;\n      delete head;\n      head = nullptr;\n      return true;\n    }\n    listNode* temp = head;\n    while (temp->next->next) temp = temp->next;\n    k = temp->next->key;\n    delete temp->next;\n    temp->next = nullptr;\n    return true;\n  }\n  \n  listNode* getHead() { return head; }\n  bool isEmpty() { return head == nullptr; }\n\n};\n\nclass myQueue {\n private:\n  linkedList data;  // linked list\n\n public:\n  myQueue() {}\n  // push_back from Part (1)\n  void push_back(int k) { \n    data.insertKeyatTail(k); \n    }\n\n  // front() from Part (2)\n  int front() {\n    int d;\n    bool deleted = data.deleteHead(d);\n    if (!deleted) return -1;\n    data.insertKeyatHead(d);\n    return d;\n  }\n\n  bool isempty();\n\n  void printQueue() {\n    listNode* temp = data.getHead();\n    cout << \"Queue contents (front → back): \";\n    while (temp) {\n      cout << temp->key << \" \";\n      temp = temp->next;\n    }\n    cout << endl;\n  }\n\n};\n",
      "main-function": "\nint main() {\n  myQueue q;\n\n  cout << \"Queue empty? \" << (q.isempty() ? \"Yes\" : \"No\") << endl;\n\n  int val;\n  while (cin >> val) {      // read numbers from input until EOF\n      q.push_back(val);\n      cout << \"Pushed: \" << val << endl;\n  }\n\n  cout << \"Queue empty? \" << (q.isempty() ? \"Yes\" : \"No\") << endl;\n\n  q.printQueue();\n\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "5 10 15 20\n"
          ],
          "output": [
            "Queue empty? Yes\nPushed: 5\nPushed: 10\nPushed: 15\nPushed: 20\nQueue empty? No\nQueue contents (front → back): 5 10 15 20\n"
          ]
        },
        {
          "input": [
            "0\n-1\n999999999\n"
          ],
          "output": [
            "Queue empty? Yes\nPushed: 0\nPushed: -1\nPushed: 999999999\nQueue empty? No\nQueue contents (front → back): 0 -1 999999999 \n"
          ]
        },
        {
          "input": [
            "\n"
          ],
          "output": [
            "Queue empty? Yes\nQueue empty? Yes\nQueue contents (front → back): \n"
          ]
        },
        {
          "input": [
            "10\n20\n30\n"
          ],
          "output": [
            "Queue empty? Yes\nPushed: 10\nPushed: 20\nPushed: 30\nQueue empty? No\nQueue contents (front → back): 10 20 30 \n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-07-Q9",
      "title": "Question 8 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "(4) Implement the `int pop_front()` function. In this function, the value of the key of the front of the queue is returned and the node at front is removed from the queue. If the queue is empty, `-1` is returned. \n",
      "starter-code": "int myQueue::pop_front(){\n\n}\n",
      "answer": "int myQueue::pop_front(){\n  int d;\n  bool isDeleted = data.deleteHead(d);\n  if (isDeleted == false) {\n    return -1;\n  } else {\n    return d;\n  } \n}\n",
      "append-before": "#include <iostream>\nusing namespace std;\n\nclass listNode {\n public:\n  int key;\n  listNode* next;\n  listNode(int k) : key(k), next(nullptr) {}\n};\n\nclass linkedList {\nprivate:\n  listNode* head;\n\npublic:\n  // Default constructor\n  linkedList() : head(nullptr) {}\n\n  // Copy constructor\n  linkedList(const linkedList& other) {\n    head = nullptr;\n    listNode* temp = other.head;\n    listNode** ptr = &head;\n    while (temp) {\n      *ptr = new listNode(temp->key);\n      ptr = &((*ptr)->next);\n      temp = temp->next;\n    }\n  }\n\n  // Destructor\n  ~linkedList() {\n    listNode* curr = head;\n    while (curr) {\n      listNode* next = curr->next;\n      delete curr;\n      curr = next;\n    }\n  }\n\n  // Assignment operator\n  linkedList& operator=(const linkedList& rhs) {\n    if (this == &rhs) return *this; // self-assignment check\n\n    // Delete existing nodes\n    listNode* curr = head;\n    while (curr) {\n      listNode* next = curr->next;\n      delete curr;\n      curr = next;\n    }\n    head = nullptr;\n\n    // Deep copy from rhs\n    listNode* temp = rhs.head;\n    listNode** ptr = &head;\n    while (temp) {\n      *ptr = new listNode(temp->key);\n      ptr = &((*ptr)->next);\n      temp = temp->next;\n    }\n    return *this;\n  }\n\n  // Insert at head\n  void insertKeyatHead(int k) {\n    listNode* node = new listNode(k);\n    node->next = head;\n    head = node;\n  }\n\n  // Insert at tail\n  void insertKeyatTail(int k) {\n    listNode* node = new listNode(k);\n    if (!head) {\n      head = node;\n      return;\n    }\n    listNode* temp = head;\n    while (temp->next) temp = temp->next;\n    temp->next = node;\n  }\n\n  // Delete head node\n  bool deleteHead(int& k) {\n    if (!head) return false;\n    listNode* temp = head;\n    k = temp->key;\n    head = head->next;\n    delete temp;\n    return true;\n  }\n\n  bool deleteTail(int& k) {\n    if (!head) return false;\n    if (!head->next) { // only one node\n      k = head->key;\n      delete head;\n      head = nullptr;\n      return true;\n    }\n    listNode* temp = head;\n    while (temp->next->next) temp = temp->next;\n    k = temp->next->key;\n    delete temp->next;\n    temp->next = nullptr;\n    return true;\n  }\n  \n  listNode* getHead() { return head; }\n  bool isEmpty() { return head == nullptr; }\n\n};\n\nclass myQueue {\n private:\n  linkedList data;  // linked list\n\n public:\n  myQueue() {}\n  // push_back from Part (1)\n  void push_back(int k) { \n    data.insertKeyatTail(k); \n    }\n\n  // front() from Part (2)\n  int front() {\n    int d;\n    bool deleted = data.deleteHead(d);\n    if (!deleted) return -1;\n    data.insertKeyatHead(d);\n    return d;\n  }\n\n  // isempty() from Part (3)\n  bool isempty(){\n    int d;\n    bool isDeleted = data.deleteHead(d);\n    if (isDeleted == false) {\n      return true;\n    } else {\n      data.insertKeyatHead(d);\n        return false;\n    }\n  }\n\n  int pop_front();\n\n  void printQueue() {\n    listNode* temp = data.getHead();\n    cout << \"Queue contents (front → back): \";\n    while (temp) {\n      cout << temp->key << \" \";\n      temp = temp->next;\n    }\n    cout << endl;\n  }\n\n};\n",
      "main-function": "\nint main() {\n    myQueue q;\n\n    string command;\n    while (cin >> command) {\n        if (command == \"Push\") {\n            int x;\n            cin >> x;\n            cout << \"Pushed: \" << x << endl;\n            q.push_back(x);\n        } else if (command == \"Pop\") {\n            int val = q.pop_front();\n            if (val == -1) cout << \"Queue is empty!\" << endl;\n            else cout << \"Popped: \" << val << endl;\n        } else if (command == \"Front\") {\n            int val = q.front();\n            if (val == -1) cout << \"Queue is empty!\" << endl;\n            else cout << \"Front: \" << val << endl;\n        } else if (command == \"Empty\") {\n            cout << \"Queue empty? \" << (q.isempty() ? \"Yes\" : \"No\") << endl;\n        }\n    }\n\n    cout << \"Final \";\n    q.printQueue();\n\n    return 0;\n}\n\n",
      "testcases": [
        {
          "input": [
            "Push 5\nPush 10\nPush 15\nFront\nPop\nEmpty\nPush 20\n"
          ],
          "output": [
            "Pushed: 5\nPushed: 10\nPushed: 15\nFront: 5\nPopped: 5\nQueue empty? No\nPushed: 20\nFinal Queue contents (front → back): 10 15 20 \n"
          ]
        },
        {
          "input": [
            "Push 0\nPush -7\nPush 999999999\nPop\nEmpty\nFront\n"
          ],
          "output": [
            "Pushed: 0\nPushed: -7\nPushed: 999999999\nPopped: 0\nQueue empty? No\nFront: -7\nFinal Queue contents (front → back): -7 999999999 \n"
          ]
        },
        {
          "input": [
            "Push 10\nPush 20\nFront\nPop\nFront\nPop\nFront\n"
          ],
          "output": [
            "Pushed: 10\nPushed: 20\nFront: 10\nPopped: 10\nFront: 20\nPopped: 20\nQueue is empty!\nFinal Queue contents (front → back): \n"
          ]
        },
        {
          "input": [
            "Push 1\nPush 2\nPush 3\nPop\nPop\nPop\nPop\n"
          ],
          "output": [
            "Pushed: 1\nPushed: 2\nPushed: 3\nPopped: 1\nPopped: 2\nPopped: 3\nQueue is empty!\nFinal Queue contents (front → back): \n"
          ]
        },
        {
          "input": [
            "Push 1\nPush 2\nPush 3\nPop\nPop\nPop\nPop\n"
          ],
          "output": [
            "Pushed: 1\nPushed: 2\nPushed: 3\nPopped: 1\nPopped: 2\nPopped: 3\nQueue is empty!\nFinal Queue contents (front → back): \n"
          ]
        },
        {
          "input": [
            "Push 5\nPop\nEmpty\n"
          ],
          "output": [
            "Pushed: 5\nPopped: 5\nQueue empty? Yes\nFinal Queue contents (front → back): \n"
          ]
        },
        {
          "input": [
            "Pop\nEmpty\n"
          ],
          "output": [
            "Queue is empty!\nQueue empty? Yes\nFinal Queue contents (front → back): \n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-07-Q10",
      "title": "Question 6 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "Circular linked lists are a variation on linked lists described in class. In a circular linked list, the next field in the last node in the list is not set to NULL (or nullptr). Rather, the field is made to point to the first node in the list, hence the name \"circular\". An example of a circular linked list is\nshown below.\n\nConsider the class `ListNode` shown below. It represents a node in a circular linked list. It is similar to the one described in class and that you implemented in the labs, but all members are public for simplicity. The declaration of a head pointer, which points to the head of the list, is also shown.\n\n```{code-block} cpp\nclass ListNode {\n public:\n  int id;\n  ListNode* next;\n};\nListNode* head;\n```\n\n\n```{figure} _images/circular-linked-list.png\n```\n\n(1) Write a non-member function traverse `ListNode* h` that traverses the linked list. The function is invoked as `traverse(head)` to start the traversal at the head of the list. In the traversal, visiting a node is simply printing its `id` field to `cout`.\n",
      "starter-code": "void traverse(ListNode* h) {\n\n}\n",
      "answer": "void traverse(ListNode* h) {\n  if (h == nullptr)\n    return;\n  ListNode* curr = h;\n  cout << curr->id << \" \";\n  curr = curr->next;\n  while (curr != h) {\n    cout << curr->id << \" \";\n    curr = curr->next;\n  }\n}\n",
      "append-before": "#include <iostream>\nusing namespace std;\n\nclass ListNode {\npublic:\n    int id;\n    ListNode* next;\n    ListNode(int _id) : id(_id), next(nullptr) {}\n};\nListNode* head;\n\n",
      "main-function": "int main() {\n    int id;\n    ListNode* prev = nullptr;\n    while (cin >> id) {\n        ListNode* node = new ListNode(id);\n        if (!head) head = node;\n        if (prev) prev->next = node;\n        prev = node;\n    }\n\n    if (prev) prev->next = head; // make circular if list not empty\n    \n    cout << \"traversing list\" << endl;\n    traverse(head);\n\n    return 0;\n}\n\n",
      "testcases": [
        {
          "input": [
            "10 20 30 40 50"
          ],
          "output": [
            "traversing list\n10 20 30 40 50 \n"
          ]
        },
        {
          "input": [
            "-1 0 999\n"
          ],
          "output": [
            "traversing list\n-1 0 999 \n"
          ]
        },
        {
          "input": [
            "1 2"
          ],
          "output": [
            "traversing list\n1 2 \n"
          ]
        },
        {
          "input": [
            "5 "
          ],
          "output": [
            "traversing list\n5 \n"
          ]
        },
        {
          "input": [
            "\n"
          ],
          "output": [
            "traversing list\n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-07-Q11",
      "title": "Question 6 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "(2) Write a non-member function `deleteNode(ListNode*& h, ListNode* p)` that deletes the node *after the one pointed to by p* from the circular list pointed to by h. The function is invoked as `deleteNode(head, ptr)`, where `ptr` is guaranteed to point to one of the nodes on the list.\n",
      "starter-code": "void deleteNode(ListNode*& h, ListNode* p) {\n\n}\n",
      "answer": "\nvoid deleteNode(ListNode*& h, ListNode* p) {\n  if (h == nullptr)\n    return;\n  if (h->next == h) {  // one element, guaranteed p == h\n    delete h;\n    h = nullptr;\n    return;\n  }\n  \n  if (p->next == h) {\n    h = h->next;\n  }\n  \n  ListNode* next = p->next;\n  p->next = next->next;\n  delete next;\n}\n",
      "append-before": "#include <iostream>\n#include <sstream>\nusing namespace std;\n\nclass ListNode {\npublic:\n    int id;\n    ListNode* next;\n    ListNode(int _id) : id(_id), next(nullptr) {}\n};\nListNode* head;\n\n// traverse from Part (1)\nvoid traverse(ListNode* h) {\n  if (h == nullptr)\n    return;\n  ListNode* curr = h;\n  cout << curr->id << \" \";\n  curr = curr->next;\n  while (curr != h) {\n    cout << curr->id << \" \";\n    curr = curr->next;\n  }\n}\n\n",
      "main-function": "int main() {\n    string line;\n    ListNode* tail = nullptr;\n\n    getline(cin, line);\n    stringstream ss(line);\n    string token;\n    int val;\n\n    // Read all node values until \"delete\"\n    while (ss >> token) {\n        if (token == \"delete\") break;\n        val = stoi(token);\n        ListNode* node = new ListNode(val);\n        if (!head) {\n            head = node;\n            tail = node;\n            tail->next = head; // circular\n        } else {\n            tail->next = node;\n            tail = node;\n            tail->next = head; // maintain circular\n        }\n    }\n\n    // Print list before deletion\n    cout << \"Traversing list:\" << endl;\n    traverse(head);\n    cout << endl;\n\n    // Read value after which to delete\n    if (ss >> val) {\n        ListNode* ptr = head;\n        while (ptr->id != val) ptr = ptr->next;  // assume val exists\n        deleteNode(head, ptr);\n\n        cout << \"After deletion:\" << endl;\n        traverse(head);\n        cout << endl;\n    }\n\n    return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "10 20 30 40 50 delete 20\n"
          ],
          "output": [
            "Traversing list:\n10 20 30 40 50\nAfter deletion:\n10 20 40 50\n"
          ]
        },
        {
          "input": [
            "-5 -3 -1 0 2 4 delete -3\n"
          ],
          "output": [
            "Traversing list:\n-5 -3 -1 0 2 4 \nAfter deletion:\n-5 -3 0 2 4 \n"
          ]
        },
        {
          "input": [
            "5 delete 5\n"
          ],
          "output": [
            "Traversing list:\n5 \nAfter deletion:\n"
          ]
        },
        {
          "input": [
            "delete"
          ],
          "output": [
            "Traversing list:\n"
          ]
        },
        {
          "input": [
            "1 2 delete 1\n"
          ],
          "output": [
            "Traversing list:\n1 2 \nAfter deletion:\n1 \n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-07-Q12",
      "title": "Question 6 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": true,
      "question": "(3) It is sometimes not known if the linked list pointed to by `head` is circular or just a regular linked list with the next field in the last node set to `NULL`. Write a non-member function `isCircular(ListNode* h)` that returns true if the list is circular and false otherwise. The function is invoked as `isCircular(head)`.\n",
      "starter-code": "bool isCircular(ListNode* h) {\n\n}\n",
      "answer": "bool isCircular(ListNode* h) {\n  if (h == nullptr) {  // is circular and regular at the same time\n    return true;\n  }\n  ListNode* p = h->next;\n  while (p != nullptr && p != h) {\n    p = p->next;\n  }\n  return p == h;\n}\n",
      "append-before": "#include <iostream>\n#include <sstream>\nusing namespace std;\n\nclass ListNode {\npublic:\n    int id;\n    ListNode* next;\n    ListNode(int _id) : id(_id), next(nullptr) {}\n};\nListNode* head;\n\n// Modified traverse from Part (1)\nvoid traverse(ListNode* h) {\n  if (!h) {\n      cout << \"(empty)\";\n      return;\n  }\n\n  ListNode* curr = h;\n  cout << curr->id << \" \";\n  curr = curr->next;\n\n  while (curr && curr != h) {\n      cout << curr->id << \" \";\n      curr = curr->next;\n  }\n}\n\n",
      "main-function": "int main() {\n    string token;\n    ListNode* head = nullptr;\n    ListNode* prev = nullptr;\n\n    while (cin >> token) {\n        if (token == \"C\") { // make circular\n            if (prev) prev->next = head;\n            break;\n        }\n        int val = stoi(token);\n        ListNode* node = new ListNode(val);\n        if (!head) head = node;\n        if (prev) prev->next = node;\n        prev = node;\n    }\n\n    cout << \"Traversing list: \";\n    traverse(head);\n    cout << endl;\n\n    cout << \"List is circular? \" << (isCircular(head) ? \"true\" : \"false\") << endl;\n\n    // Free memory safely if not circular\n    if (!isCircular(head)) {\n        ListNode* curr = head;\n        while (curr) {\n            ListNode* tmp = curr;\n            curr = curr->next;\n            delete tmp;\n        }\n    }\n\n    return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "10 20 30 40 50\n"
          ],
          "output": [
            "Traversing list: 10 20 30 40 50 \nList is circular? false"
          ]
        },
        {
          "input": [
            "1 2 3 4 C\n"
          ],
          "output": [
            "Traversing list: 1 2 3 4 \nList is circular? true\n"
          ]
        },
        {
          "input": [
            "10 C\n"
          ],
          "output": [
            "Traversing list: 10 \nList is circular? true\n"
          ]
        },
        {
          "input": [
            "10\n"
          ],
          "output": [
            "Traversing list: 10 \nList is circular? false\n"
          ]
        },
        {
          "input": [
            "-5 -2 -1 \n"
          ],
          "output": [
            "Traversing list: -5 -2 -1 \nList is circular? false\n"
          ]
        },
        {
          "input": [
            "-3 -1 0 2 5 C\n"
          ],
          "output": [
            "Traversing list: -3 -1 0 2 5 \nList is circular? true\n"
          ]
        }
      ]
    }
  ]
};