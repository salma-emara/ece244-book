let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "title": "Question 10 in Fall 2022 Final Exam",
      "difficulty": "Challenging",
      "type": "function programming",
      "table": false,
      "multipart": true,
      "question": "Thanks to your previous implementation of the VTuber, it became an instant modern classic. With great popularity comes greater responsibility. Now there are more than 300,000 VTubers streaming on the MeTube, and your engineering manager asks you to implement a data structure that allows users to quickly lookup whether a specific Vtuber is currently live-streaming. \n\nA native solution would be using an array of 300,000 entries, with each entry holding a boolean variable indicating whether the corresponding Vtuber is live-streaming or not. However, there are two major problems: \n\n1. Users can only query the database with Vtubers' names, not some internal ids.\n2. Only ~20% of total Vtubers are streaming at any given time, so most array enteries are inactive. However, you'd like to maintain a lookup time that is approximately $O(n)$.\n\nNow, you suddenly recall that in ECE 244 you learned the hash table, which resolves collisions with chaining. The hash table would suit your needs perfectly. Even better, you can use an existing linked list implementation written by your new colleague.\n\nThe following is the class declaration of the linked list. Assume that it works correctly and encapsulates all the operations your hash table may need. Read it carefully, as you will need it to build your VTubers hash table later. **Remember, it will not allocate any list node automatically, and only the destructor will deallocate list node memory.**\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass ListNode {\n public:\n  ListNode(const string& name_) {\n    name = name_;\n    next = NULL;\n  };\n  string name;\n  ListNode* next;\n};\n\nclass LinkedList {\n private:\n  ListNode* head;\n\n public:\n  // Default constructor: initialize the head to NULL.\n  LinkedList();\n\n  // Return true if and only if the list is empty,\n  bool is_empty();\n\n  // Insert the given node to the head of the list.\n  // Time complexity: 0(1)\n  void insert(ListNode* node);\n\n  // Traversing from the head. Remove the first node found with the given\n  // name from the list. The removed node is NOT deallocated.\n  // Returns this node (or NULL if the name is not found).\n  // Time complexity: 0(n)\n  ListNode* remove(const string& name);\n\n  // Return true if there exists at least one node with the given name.\n  // Time complexity: 0(n)\n  bool find(const string& name);\n\n  // Remove the current head node from the linked list,\n  // and return it.\n  // Move the head one node forward.\n  // Time complexity: 0(1)\n  ListNode* pop_head();\n\n  // Destructor: Properly deallocate all the nodes.\n  ~LinkedList();\n};\n```\n\nAlso, you are given a string hash function, which uses a secret algorithm to turn the given string into a non-negative integer value. You can safely assume that given the same string inputs, the output value is always the same. However, two different strings may be turned into the same number.\n\n```{code-block} cpp\nint string_hash(const string& name);\n```\n\nAnd finally, here is how the hash table is declared. It stores all the names of active VTubers at a given time, **using the name as a unique key**. The hash table **solves collisions by chaining** using the linked list.\n\n```{code-block} cpp\n#define INIT_CAPACITY 32\nclass HashTable {\n private:\n  // Array of Linked List: resolving collisions by chaining\n  LinkedList** table;\n  // The length of the table array,\n  int table_slot_size;\n  // Keep track of how many elements (names) are in the hash table\n  int num_elements;\n  int get_hash_index(const string& name) {\n    return string_hash(name) % table_slot_size;\n  }\n\n public:\n  // Constructors and destructors.\n  HashTable();\n  ~HashTable();\n  // Hash table method,\n  bool exist(const string& name);\n  bool insert(const string& name);\n  bool remove(const string& name);\n  bool change_name(const string& old_name, const string& new_name);\n};\n```\n\nEssentially, the hash table should be similar to what has been discussed during the lecture. The\nfollowing diagram should help you visualize what this hash table looks like:\n\n\n\n```{figure} _images/hashtable.png\n```\n\nWhen a VTuber goes online for streaming, `insert()` should be called to bring the name into the\nhash table. When the VTuber goes offline, `remove()` method should be called to remove the\nname from the hash table. The constructor and `exist()` methods are already implemented as\nshown below. They should help you clarify how the hash table works.\n\n\n```{code-block} cpp\nHashTable::HashTable() {\n  table = new LinkedList*[INIT_CAPACITY];\n  table_slot_size = INIT_CAPACITY;\n  num_elements = 0;\n  for (int i = 0; i < table_slot_size; ++i) {\n    table[i] = NULL;\n  }\n}\nbool HashTable::exist(const string& name) {\n  int idx = this->get_hash_index(name);\n  if (table[idx] == NULL) {\n    return false;\n  }\n  return table[idx]->find(name);\n}\n```\n\n(1) Implement the `insert()` method of the hash table. The insert should fulfill the following requirements:\n\na. You should maintain the unique name property. If the name already exists in the hash table, you should return false. Otherwise, allocate a list node for the string and insert it into the correct list, and return true.\n\nb. To address the collision, your hashtable should dynamically grow at run time. Specifically, when you try to insert a new name but the value of `num_elements` will\nbecome equal to or larger than `table_slot_size/2`, you should double\n`table_slot_size` and allocate a new table with the updated size. Then, you should\nmove all the existing names from the old table to the newly allocated table, and\ndeallocate the old table. Notice that the hash index is directly related to the `table_slot_size`, so the hash index of the same name can be changed when moving from one table to another.\n\nc. You can add additional member functions if you need to.\nd. Your code should not trigger any segmentation fault, and it should not leak memory.\nYou can define helper functions if you find them useful. You can make helpers as member functions if you think that would be necessary.\n\n",
      "starter-code": "Implement bool HashTable::insert(const string& name){\n\n  // Your code here\n\n}\n",
      "answer": "\nbool HashTable::insert(const string& name) {\n  if (this->exist(name)) {\n    return false;  // found!\n}\n\n  // not found!\n  if (num_elements + 1 >= table_slot_size / 2) {\n    table_slot_size = table_slot_size * 2;\n    LinkedList** newTable = new LinkedList*[table_slot_size];\n    for (int i = 0; i < table_slot_size; i++) {\n      newTable[i] = nullptr;\n    }\n\n    for (int i = 0; i < table_slot_size / 2; ++i) {\n      if (table[i] != NULL) {\n        ListNode* n = table[i]->pop_head();\n        while (n != NULL) {\n          int idx = get_hash_index(n->name);\n          if (newTable[idx] == NULL) {\n            newTable[idx] = new LinkedList;  // msh\n          }\n          newTable[idx]->insert(n);\n          n = table[i]->pop_head();\n        }\n        delete table[i];\n      }\n    }\n    delete[] table;\n    table = newTable;\n  }\n\n  int idx = this->get_hash_index(name);\n\n  if (table[idx] == NULL) {\n    table[idx] = new LinkedList;  // msh\n  }\n  ListNode* n = new ListNode(name);\n  table[idx]->insert(n);\n  num_elements++;\n  return true;\n}\n\n",
      "append-before": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass ListNode {\n public:\n  ListNode(const string& name_) {\n    name = name_;\n    next = NULL;\n  };\n  string name;\n  ListNode* next;\n};\n\nclass LinkedList {\n private:\n  ListNode* head;\n\n public:\n  LinkedList() { head = NULL; }\n\n  bool is_empty() { return head == NULL; }\n\n  void insert(ListNode* node) {\n    node->next = head;\n    head = node;\n  }\n\n  ListNode* remove(const string& name) {\n    ListNode* curr = head;\n    ListNode* prev = NULL;\n    while (curr != NULL) {\n      if (curr->name == name) {\n        if (prev == NULL) {\n          head = curr->next;\n        } else {\n          prev->next = curr->next;\n        }\n        curr->next = NULL;\n        return curr;\n      }\n      prev = curr;\n      curr = curr->next;\n    }\n    return NULL;\n  }\n\n  bool find(const string& name) {\n    ListNode* curr = head;\n    while (curr != NULL) {\n      if (curr->name == name) return true;\n      curr = curr->next;\n    }\n    return false;\n  }\n\n  ListNode* pop_head() {\n    if (head == NULL) return NULL;\n    ListNode* n = head;\n    head = head->next;\n    n->next = NULL;\n    return n;\n  }\n\n  ~LinkedList() {\n    while (head != NULL) {\n      ListNode* tmp = head;\n      head = head->next;\n      delete tmp;\n    }\n  }\n};\n\nint string_hash(const string& name) {\n  unsigned long hash = 5381;\n  for (char c : name) {\n    hash = ((hash << 5) + hash) + c;\n  }\n  return (int)(hash & 0x7fffffff);\n}\n\n#define INIT_CAPACITY 32\nclass HashTable {\n private:\n  LinkedList** table;\n  int table_slot_size;\n  int num_elements;\n  int get_hash_index(const string& name) {\n    return string_hash(name) % table_slot_size;\n  }\n\n public:\n  HashTable() {\n    table = new LinkedList*[INIT_CAPACITY];\n    table_slot_size = INIT_CAPACITY;\n    num_elements = 0;\n    for (int i = 0; i < table_slot_size; ++i) {\n      table[i] = NULL;\n    }\n  }\n\n  bool exist(const string& name) {\n    int idx = this->get_hash_index(name);\n    if (table[idx] == NULL) {\n      return false;\n    }\n    return table[idx]->find(name);\n  }\n\n  bool insert(const string& name);   // to be implemented\n  \n};\n\n\n",
      "main-function": "int main() {\n  HashTable ht;\n  string cmd;\n\n  while (cin >> cmd) {\n    if (cmd == \"Insert\") {\n      string name;\n      cin >> name;\n      bool ok = ht.insert(name);\n      cout << (ok ? \"Inserted \" : \"Failed to insert \") << name << \"\\n\";\n    }\n  }\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "Insert Salma\nInsert Emara\nInsert Salma\nInsert Nora \nInsert Liu"
          ],
          "output": [
            "Inserted Salma\nInserted Emara\nFailed to insert Salma\nInserted Nora\nInserted Liu\n"
          ]
        },
        {
          "input": [
            "Insert Burger\nInsert Pizza\nInsert Burger\nInsert Fries\nInsert fRies\nInsert Wings\nInsert wiNgs\nInsert burger\nInsert Burger\nInsert piZzA\nInsert wings\n"
          ],
          "output": [
            "Inserted Burger\nInserted Pizza\nFailed to insert Burger\nInserted Fries\nInserted fRies\nInserted Wings\nInserted wiNgs\nInserted burger\nFailed to insert Burger\nInserted piZzA\nInserted wings\n"
          ]
        },
        {
          "input": [
            "Insert rOSe1\nInsert Rose41\nInsert ROse1\nInsert 5125rOSe\nInsert Rose41\nInsert ROSE124\nInsert 510rosE"
          ],
          "output": [
            "Inserted rOSe1\nInserted Rose41\nInserted ROse1\nInserted 5125rOSe\nFailed to insert Rose41\nInserted ROSE124\nInserted 510rosE"
          ]
        }
      ]
    },
    {
      "title": "Question 10 in Fall 2022 Final Exam",
      "difficulty": "Challenging",
      "type": "function programming",
      "table": false,
      "multipart": true,
      "question": "\n(2) Implement the `remove` method. Return true if the given name exists and is successfully removed, otherwise, \nreturn false. Your code should not trigger any segmentation fault, and it should not leak memory.\n\n",
      "starter-code": "bool HashTable::remove(const string& name) {\n\n  // Your code here\n\n}  \n",
      "answer": "\nbool HashTable::remove(const string& name) {\n  if (this->exist(name)) {\n    int idx = this->get_hash_index(name);\n    ListNode* removeNode = table[idx]->remove(name);\n    delete removeNode;\n    num_elements--;\n    return true;\n  }\n  // not found!\n  return false;\n}    \n\n",
      "append-before": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass ListNode {\n public:\n  ListNode(const string& name_) {\n    name = name_;\n    next = NULL;\n  };\n  string name;\n  ListNode* next;\n};\n\nclass LinkedList {\n private:\n  ListNode* head;\n\n public:\n  LinkedList() { head = NULL; }\n\n  bool is_empty() { return head == NULL; }\n\n  void insert(ListNode* node) {\n    node->next = head;\n    head = node;\n  }\n\n  ListNode* remove(const string& name) {\n    ListNode* curr = head;\n    ListNode* prev = NULL;\n    while (curr != NULL) {\n      if (curr->name == name) {\n        if (prev == NULL) {\n          head = curr->next;\n        } else {\n          prev->next = curr->next;\n        }\n        curr->next = NULL;\n        return curr;\n      }\n      prev = curr;\n      curr = curr->next;\n    }\n    return NULL;\n  }\n\n  bool find(const string& name) {\n    ListNode* curr = head;\n    while (curr != NULL) {\n      if (curr->name == name) return true;\n      curr = curr->next;\n    }\n    return false;\n  }\n\n  ListNode* pop_head() {\n    if (head == NULL) return NULL;\n    ListNode* n = head;\n    head = head->next;\n    n->next = NULL;\n    return n;\n  }\n\n  ~LinkedList() {\n    while (head != NULL) {\n      ListNode* tmp = head;\n      head = head->next;\n      delete tmp;\n    }\n  }\n};\n\nint string_hash(const string& name) {\n  unsigned long hash = 5381;\n  for (char c : name) {\n    hash = ((hash << 5) + hash) + c;\n  }\n  return (int)(hash & 0x7fffffff);\n}\n\n#define INIT_CAPACITY 32\nclass HashTable {\n private:\n  LinkedList** table;\n  int table_slot_size;\n  int num_elements;\n  int get_hash_index(const string& name) {\n    return string_hash(name) % table_slot_size;\n  }\n\n public:\n  HashTable() {\n    table = new LinkedList*[INIT_CAPACITY];\n    table_slot_size = INIT_CAPACITY;\n    num_elements = 0;\n    for (int i = 0; i < table_slot_size; ++i) {\n      table[i] = NULL;\n    }\n  }\n\n  bool exist(const string& name) {\n    int idx = this->get_hash_index(name);\n    if (table[idx] == NULL) {\n      return false;\n    }\n    return table[idx]->find(name);\n  }\n\n  // insert function from part (1)\n  bool insert(const string& name) {\n    if (this->exist(name)) {\n      return false;  // found!\n  }\n\n  if (num_elements + 1 >= table_slot_size / 2) {\n    table_slot_size = table_slot_size * 2;\n    LinkedList** newTable = new LinkedList*[table_slot_size];\n    for (int i = 0; i < table_slot_size; i++) {\n      newTable[i] = nullptr;\n    }\n\n    for (int i = 0; i < table_slot_size / 2; ++i) {\n      if (table[i] != NULL) {\n        ListNode* n = table[i]->pop_head();\n        while (n != NULL) {\n          int idx = get_hash_index(n->name);\n          if (newTable[idx] == NULL) {\n            newTable[idx] = new LinkedList;  // msh\n          }\n          newTable[idx]->insert(n);\n          n = table[i]->pop_head();\n        }\n        delete table[i];\n      }\n    }\n    delete[] table;\n    table = newTable;\n    }\n\n    int idx = this->get_hash_index(name);\n\n    if (table[idx] == NULL) {\n      table[idx] = new LinkedList;  // msh\n    }\n    ListNode* n = new ListNode(name);\n    table[idx]->insert(n);\n    num_elements++;\n    return true;\n  }\n\n  bool remove(const string& name);\n\n};\n",
      "main-function": "int main() {\n  HashTable ht;\n  string cmd;\n\n  while (cin >> cmd) {\n    if (cmd == \"Insert\") {\n      string name;\n      cin >> name;\n      bool ok = ht.insert(name);\n      cout << (ok ? \"Inserted \" : \"Failed to insert \") << name << \"\\n\";\n    } else if (cmd == \"Remove\") {\n      string name;\n      cin >> name;\n      bool ok = ht.remove(name);\n      cout << (ok ? \"Removed \" : \"Did not find \") << name << \"\\n\";\n    }\n  }\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "Insert Salma\nInsert Emara\nInsert Nora \nInsert Liu\nRemove Salma\nInsert Salma\nRemove Emara\nRemove ECE\nRemove Nora\nRemove Salma\n"
          ],
          "output": [
            "Inserted Salma\nInserted Emara\nInserted Nora\nInserted Liu\nRemoved Salma\nInserted Salma\nRemoved Emara\nDid not find ECE\nRemoved Nora\nRemoved Salma\n"
          ]
        },
        {
          "input": [
            "Insert Burger\nInsert Pizza\nInsert Fries\nInsert fRies\nInsert Wings\nInsert wiNgs\nInsert piZzA\nInsert wings\nRemove Burger\nRemove piZzA\nInsert bUrger\nRemove Burger\nInsert piZza\nRemove piZza\nRemove wingS"
          ],
          "output": [
            "Inserted Burger\nInserted Pizza\nInserted Fries\nInserted fRies\nInserted Wings\nInserted wiNgs\nInserted piZzA\nInserted wings\nRemoved Burger\nRemoved piZzA\nInserted bUrger\nDid not find Burger\nInserted piZza\nRemoved piZza\nDid not find wingS"
          ]
        },
        {
          "input": [
            "Insert rOSe1\nRemove rOSe1\nInsert rOSe1\nRemove rOSe1\nInsert Rose41\nInsert ROse1\nInsert 5125rOSe\nInsert ROSE124\nInsert 510rosE\nRemove Rose41\nRemove ROsE124619284\nRemove 5125rOSe\nRemove ROSE124\nInsert ROSE124\nRemove ROSE124\nRemove 510rosE"
          ],
          "output": [
            "Inserted rOSe1\nRemoved rOSe1\nInserted rOSe1\nRemoved rOSe1\nInserted Rose41\nInserted ROse1\nInserted 5125rOSe\nInserted ROSE124\nInserted 510rosE\nRemoved Rose41\nDid not find ROsE124619284\nRemoved 5125rOSe\nRemoved ROSE124\nInserted ROSE124\nRemoved ROSE124\nRemoved 510rosE\n"
          ]
        },
        {
          "input": [
            "Insert $$\nRemove $\nInsert 124\nRemove 124\nRemove %125\nInsert %125\nRemove %125"
          ],
          "output": [
            "Inserted $$\nDid not find $\nInserted 124\nRemoved 124\nDid not find %125\nInserted %125\nRemoved %125\n"
          ]
        }
      ]
    },
    {
      "title": "Question 10 in Fall 2022 Final Exam",
      "difficulty": "Challenging",
      "type": "function programming",
      "table": false,
      "multipart": true,
      "question": "\n(3) Implement the `change_name` method. It removes the `old_name` and inserts the\n`new_name`. Return true if successful. Otherwise, it returns false either when the `old_name`\ndoesn’t exist, or the `new_name` is the same as any existing name. Your code should not trigger\nany segmentation fault, and it should not leak memory. Hint: you can use the function you\nimplemented in the previous questions.\n",
      "starter-code": "bool HashTable::change_name(const string& old_name, const string& new_name) {\n\n  // Your code here\n\n}  \n",
      "answer": "bool HashTable::change_name(const string& old_name, const string& new_name) {\n  if (this->exist(old_name) && !this->exist(new_name)) {\n    // change name!\n    this->remove(old_name);\n    this->insert(new_name);\n    return true;\n  } else if (this->exist(old_name) && this->exist(new_name)) {\n    // don't change name\n    return false;\n  } else if (!this->exist(old_name)) {\n    // din't find\n    return false;\n  } else {\n    // not needed!\n    return false;\n  }\n}\n",
      "append-before": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass ListNode {\n public:\n  ListNode(const string& name_) {\n    name = name_;\n    next = NULL;\n  };\n  string name;\n  ListNode* next;\n};\n\nclass LinkedList {\n private:\n  ListNode* head;\n\n public:\n  LinkedList() { head = NULL; }\n\n  bool is_empty() { return head == NULL; }\n\n  void insert(ListNode* node) {\n    node->next = head;\n    head = node;\n  }\n\n  ListNode* remove(const string& name) {\n    ListNode* curr = head;\n    ListNode* prev = NULL;\n    while (curr != NULL) {\n      if (curr->name == name) {\n        if (prev == NULL) {\n          head = curr->next;\n        } else {\n          prev->next = curr->next;\n        }\n        curr->next = NULL;\n        return curr;\n      }\n      prev = curr;\n      curr = curr->next;\n    }\n    return NULL;\n  }\n\n  bool find(const string& name) {\n    ListNode* curr = head;\n    while (curr != NULL) {\n      if (curr->name == name) return true;\n      curr = curr->next;\n    }\n    return false;\n  }\n\n  ListNode* pop_head() {\n    if (head == NULL) return NULL;\n    ListNode* n = head;\n    head = head->next;\n    n->next = NULL;\n    return n;\n  }\n\n  ~LinkedList() {\n    while (head != NULL) {\n      ListNode* tmp = head;\n      head = head->next;\n      delete tmp;\n    }\n  }\n};\n\nint string_hash(const string& name) {\n  unsigned long hash = 5381;\n  for (char c : name) {\n    hash = ((hash << 5) + hash) + c;\n  }\n  return (int)(hash & 0x7fffffff);\n}\n\n#define INIT_CAPACITY 32\nclass HashTable {\n private:\n  LinkedList** table;\n  int table_slot_size;\n  int num_elements;\n  int get_hash_index(const string& name) {\n    return string_hash(name) % table_slot_size;\n  }\n\n public:\n  HashTable() {\n    table = new LinkedList*[INIT_CAPACITY];\n    table_slot_size = INIT_CAPACITY;\n    num_elements = 0;\n    for (int i = 0; i < table_slot_size; ++i) {\n      table[i] = NULL;\n    }\n  }\n\n  bool exist(const string& name) {\n    int idx = this->get_hash_index(name);\n    if (table[idx] == NULL) {\n      return false;\n    }\n    return table[idx]->find(name);\n  }\n\n  // insert function from part (1)\n  bool insert(const string& name) {\n    if (this->exist(name)) {\n      return false;  // found!\n  }\n\n  if (num_elements + 1 >= table_slot_size / 2) {\n    table_slot_size = table_slot_size * 2;\n    LinkedList** newTable = new LinkedList*[table_slot_size];\n    for (int i = 0; i < table_slot_size; i++) {\n      newTable[i] = nullptr;\n    }\n\n    for (int i = 0; i < table_slot_size / 2; ++i) {\n      if (table[i] != NULL) {\n        ListNode* n = table[i]->pop_head();\n        while (n != NULL) {\n          int idx = get_hash_index(n->name);\n          if (newTable[idx] == NULL) {\n            newTable[idx] = new LinkedList;  // msh\n          }\n          newTable[idx]->insert(n);\n          n = table[i]->pop_head();\n        }\n        delete table[i];\n      }\n    }\n    delete[] table;\n    table = newTable;\n    }\n\n    int idx = this->get_hash_index(name);\n\n    if (table[idx] == NULL) {\n      table[idx] = new LinkedList;  // msh\n    }\n    ListNode* n = new ListNode(name);\n    table[idx]->insert(n);\n    num_elements++;\n    return true;\n  }\n\n  // insert function from part (2)\n  bool remove(const string& name){\n    if (this->exist(name)) {\n      int idx = this->get_hash_index(name);\n      ListNode* removeNode = table[idx]->remove(name);\n      delete removeNode;\n      num_elements--;\n      return true;\n    }\n    // not found!\n    return false;\n  }\n\n  bool change_name(const string& old_name, const string& new_name);\n\n};\n",
      "main-function": "int main() {\n  HashTable ht;\n  string cmd;\n\n  while (cin >> cmd) {\n    if (cmd == \"Insert\") {\n      string name;\n      cin >> name;\n      bool ok = ht.insert(name);\n      cout << (ok ? \"Inserted \" : \"Failed to insert \") << name << \"\\n\";\n    } else if (cmd == \"Remove\") {\n      string name;\n      cin >> name;\n      bool ok = ht.remove(name);\n      cout << (ok ? \"Removed \" : \"Did not find \") << name << \"\\n\";\n    } else if (cmd == \"ChangeName\") {\n      string oldn, newn;\n      cin >> oldn >> newn;\n      bool ok = ht.change_name(oldn, newn);\n      cout << (ok ? \"Changed \" : \"Failed to change \") << oldn << \"->\" << newn << \"\\n\";\n    }\n  }\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "Insert Salma\nInsert Emara\nInsert Salma\nInsert Nora \nInsert Liu\nChangeName Batman Man\nChangeName Salma Prof\nChangeName Liu nora\nChangeName nora Nora"
          ],
          "output": [
            "Inserted Salma\nInserted Emara\nFailed to insert Salma\nInserted Nora\nInserted Liu\nFailed to change Batman->Man\nChanged Salma Prof\nChanged Liu nora\nFailed to change nora->Nora"
          ]
        },
        {
          "input": [
            "Insert brgr\nInsert Pizza\nChangeName brgr Burger\nInsert fRies\nChangeName fRies Fries\nChangeName wings Wings\nInsert Wings\nInsert piZzA\nChangeName piZza Pizza\nInsert wings\nChangeName wings Wings\n"
          ],
          "output": [
            "Inserted brgr\nInserted Pizza\nChanged brgr->Burger\nInserted fRies\nChanged fRies->Fries\nFailed to change wings->Wings\nInserted Wings\nInserted piZzA\nFailed to change piZza->Pizza\nInserted wings\nFailed to change wings->Wings\n"
          ]
        },
        {
          "input": [
            "Insert user1\nInsert user2\nChangeName user2 user3\nInsert user2\nChangeName user3 user1\nChangeName user3 124user\nChangeName 124user user1\nInsert $%saf \nChangeName $%saf user\nChangeName $%saf helloworld\n"
          ],
          "output": [
            "Inserted user1\nInserted user2\nChanged user2->user3\nInserted user2\nFailed to change user3->user1\nChanged user3->124user\nFailed to change 124user->user1\nInserted $%saf \nChanged $%saf->user\nFailed to change $%saf->helloworld\n"
          ]
        }
      ]
    },
    {
      "title": "Question 10 in Fall 2022 Final Exam",
      "difficulty": "Challenging",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "\n(4) Implement the destructor of `HashTable`. It should deallocate the table array and all\nthe lists. Your code should not trigger any segmentation fault, and it should not leak memory.\n",
      "answer": "<code>\nHashTable::~HashTable() {\n\nfor (int i = 0; i < table_slot_size; i++) {\n\ndelete table[i];\n\n}\n\ndelete[] table;\n\n}\n</code>\n"
    }
  ]
};