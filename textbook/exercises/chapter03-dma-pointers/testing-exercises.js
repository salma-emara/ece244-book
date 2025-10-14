let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "question-id": "chapter-03-Q1",
      "title": "Question 9 in Fall 2022 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "tracing",
      "multipart": false,
      "question": "Write down the standard output of the following program. Remember to write two \"Check Point\", since partial marks are given based on these \"stop points\". You might find it helpful to write down the memory layout.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nint i[5] = {0, 2, 4, 6, 8};\nint* p;\n\nvoid foo() {\n  cout << *p << endl;\n  ++(*p);\n  ++p;\n}\n\nvoid bar() {\n  for (int i = 0; i < 3; ++i) {\n    foo();\n  }\n}\n\nint main() {\n  p = i;\n  bar();\n  cout << \"Check Point 1\" << endl;\n  p = i;\n  foo();\n  cout << \"Check Point 2\" << endl;\n  return 0;\n}\n```\n",
      "answer": "0\n2\n4\nCheck Point 1\n1\nCheck Point 2\n"
    },
    {
      "question-id": "chapter-03-Q2",
      "title": "Question 3 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": false,
      "question": "\nConsider the following code snippet that manipulates pointers in a main function of a C++ program. \n\n```{code-block} cpp\nint* p = nullptr;\nint* q = nullptr;\nint* r = nullptr;\nint** t = &p;\nint** s = &q;\nr = p;\np = new int;\nq = new int;\n*p = 5;\n*q = 2;\n**s = *p + **t;\n```\n\nWhich of the following statements (that come after the above snippets executes) prints 5 to the standard output? You may assume `iostream` is included and the `std` namespace is used. Choose all correct answers.\n\n",
      "answer": [
        3,
        4,
        7
      ],
      "choices": [
        "(1) `cout << r;`",
        "(2) `cout << *t;`",
        "(3) `cout << *q;`",
        "(4) `cout << *p;`",
        "(5) `cout << **t;`",
        "(6) `cout << *r;`",
        "(7) `cout << *s;`",
        "(8) `cout << (**s) / 2;`"
      ],
      "explanation": "(4) `cout << *p;`\n\n(5) `cout << **t;`\n\n(8) `cout << (**s) / 2;` "
    },
    {
      "question-id": "chapter-03-Q3",
      "title": "Question 4 in Fall 2018 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "tracing",
      "multipart": true,
      "LLM": "Consider the following `main` function. The line numbers to the left are for reference and are not part of the code.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int* first_ptr;\n  int* second_ptr;\n  int** p_ptr;\n  first_ptr = new int;\n  second_ptr = new int;\n  p_ptr = &first_ptr;\n  *first_ptr = 4;\n  *second_ptr = 8;\n  second_ptr = *p_ptr;\n  cout << *first_ptr << \" \" << *second_ptr << endl;\n  delete first_ptr;\n  delete second_ptr;\n  delete *p_ptr;\n  return (0);\n}\n```\n\n(1) What is the output produced by `cout` on line 14 of the code\n\n",
      "question": "Consider the following `main` function. The line numbers to the left are for reference and are not part of the code.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int* first_ptr;\n  int* second_ptr;\n  int** p_ptr;\n  first_ptr = new int;\n  second_ptr = new int;\n  p_ptr = &first_ptr;\n  *first_ptr = 4;\n  *second_ptr = 8;\n  second_ptr = *p_ptr;\n  cout << *first_ptr << \" \" << *second_ptr << endl;\n  delete first_ptr;\n  delete second_ptr;\n  delete *p_ptr;\n  return (0);\n}\n```\n\n(1) What is the output produced by `cout` on line 14 of the code\n\n",
      "answer": "4 4\n"
    },
    {
      "question-id": "chapter-03-Q4",
      "title": "Question 4 in Fall 2018 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "LLM": "Consider the following `main` function. The line numbers to the left are for reference and are not part of the code.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int* first_ptr;\n  int* second_ptr;\n  int** p_ptr;\n  first_ptr = new int;\n  second_ptr = new int;\n  p_ptr = &first_ptr;\n  *first_ptr = 4;\n  *second_ptr = 8;\n  second_ptr = *p_ptr;\n  cout << *first_ptr << \" \" << *second_ptr << endl;\n  delete first_ptr;\n  delete second_ptr;\n  delete *p_ptr;\n  return (0);\n}\n```\n\n(2) The program may have a problem with it. What is the problem, if any? Circle only one answer.\n\n",
      "question": "(2) The program may have a problem with it. What is the problem, if any? Circle only one answer.\n",
      "answer": [
        5
      ],
      "choices": [
        "(1) The program has no problem with it",
        "(2) The program has a memory leak.",
        "(3) The delete on line 17 should not dereference p_ptr, but use it directly.",
        "(4) The program deletes the same region of memory more than once.",
        "(5) 2 and 3.",
        "(6) 2 and 4.",
        "(7) 2, 3 and 4."
      ],
      "explanation": "The program has a memory leak because in line 13, it changes what `second_ptr` is pointing \nto without freeing up the memory space it was pointing to.`second_ptr`, `first_ptr`, and `*p_ptr` \nare all pointing to an `int` with 4, while there are three deletes for the same memory space."
    },
    {
      "question-id": "chapter-03-Q5",
      "title": "Question 2 in Fall 2017 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "tracing",
      "multipart": false,
      "question": "Consider the following program. \n\n```{code-block} cpp\nclass Point {\n  int x;\n  int y;\n\n public:\n  Point(int i, int j);\n  Point increment_x();\n  Point increment_y();\n  void print() const;\n};\nPoint::Point(int i, int j) {\n  x = i;\n  y = j;\n}\nPoint Point::increment_x() {\n  ++x;\n  return *this;\n}\nPoint Point::increment_y() {\n  ++y;\n  return *this;\n}\nvoid Point::print() const {\n  cout << \"(\" << x << \",\" << y << \")\" << endl;\n}\nint main() {\n  Point a(2, 3);\n  // Evaluation is done left to right\n  a.increment_x().increment_y().print();\n  a.print();\n  return 0;\n}\n```\n\nAssuming the C++ compiler does not optimize away copying of objects. Write the output produced by the program.\n",
      "answer": "(3,4)\n(3,3)\n",
      "explanation": "<pre>\n(3,4)\n</pre>\nRecall, `this` is a pointer to the object itself. \n\n\n`a.increment_x()` is evaluated first, and would increment the `x` of object `a` making `x` of `a` equal to 3. This would return a new object with `x = 3` and `y = 3`. On this new object, you would call `increment_y()`, which would increment `y` to 4 and return a new object with `x = 3` and `y = 4`. Printing this new object would produce `(3,4)`.\n<pre>\n(3,3)\n</pre>\nPrinting object `a` would output `(3,3)` due to the previous `a.increment_x()` call. \n"
    },
    {
      "question-id": "chapter-03-Q6",
      "title": "Question 3 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": false,
      "question": "\nConsider the following C++ function:\n\n```{code-block} cpp\nvoid AvadaKedavra(int n) {\n  int size = n + 1;\n  int* q = NULL;\n  for (int i = 0; i < 3; ++i) {\n    q = new int[size];\n  }\n}\n```\n\nIf somewhere in your main function you call `AvadaKedavra(1)`. Based on the memory layout discussed during the lecture, answer this question: from the time this function starts to execute to the time right before it returns, how many bytes are newly allocated on the stack and the heap, respectively?\n\nYou may assume:\n1. all variables are put in the main memory.\n2. an `int` takes 4 bytes\n3. we have a 32-bit machine\n\n",
      "answer": "\n**Stack**\n\n`n`: 4 bytes\n\n`size`: 4 bytes\n\n`q`: 4 bytes\n\n`i`: 4 bytes\n\nTotal: 16 bytes\n\n----------------\n**Heap**\n\n`n` is 1, `size` is 2\n\nThe loop iterates 3 times, each time it allocates 2 integers. \n\nTotal is 3 * 2 * 4 bytes = 24 bytes.\n"
    },
    {
      "question-id": "chapter-03-Q7",
      "title": "Question 9 in Fall 2021 Midterm Exam",
      "difficulty": "Intermediate",
      "type": "explaination",
      "table": true,
      "question": "Consider the code shown below. You can assume it compiles with no errors and runs. \n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nint a = 0;\nint* b = &a;\nint** c = &b;\n\nint* foo(int** d) {\n  (**d)++;\n  b = *d;\n  int* e = new int;\n  *e = 10;\n  return e;\n}\n\nint main() {\n  int* g = nullptr;\n  int* f = new int;\n  *f = 5;\n  a++;\n\n  // Point 1\n\n  g = foo(&f);\n  a++;\n  (*g)++;\n\n  // Point 2\n\n  return 0;\n}\n\n```\n\nIn the table below, give the values of the variables indicated in the table columns when program execution reaches each of the two points, Point 1 and Point 2. If a value cannot be obtained due to dereferencing a `nullptr` pointer, write `nullptr` (but assume the program does not stop).\n\n",
      "headers": [
        "Point",
        "a",
        "*b",
        "**c",
        "*g",
        "*f"
      ],
      "rows": [
        [
          "Point 1",
          "",
          "",
          "",
          "",
          ""
        ],
        [
          "Point 2",
          "",
          "",
          "",
          "",
          ""
        ]
      ],
      "answer": [
        [
          "Point 1",
          "1",
          "1",
          "1",
          "nullptr",
          "5"
        ],
        [
          "Point 2",
          "2",
          "6",
          "6",
          "11",
          "6"
        ]
      ]
    },
    {
      "question-id": "chapter-03-Q8",
      "title": "Question 10 in Fall 2022 Midterm Exam",
      "difficulty": "Challenging",
      "type": "function programming",
      "table": false,
      "multipart": true,
      "LLM": "A Vtuber is an online entertainer who posts videos on Vtube. A Vtuber will have followers on Vtube. As a programmer from Vtube, you are asked to implement a class for Vtuber. The class definition and description are described below.\n\n```{code-block} cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Follower {\n private:\n  string name;\n  int age;\n\n public:\n  Follower(const string& _name, int _age) {\n    name = _name;\n    age = _age;\n  }\n  string get_name() const { return name; }\n  int get_age() const { return age; }\n};\nclass Vtuber {\n private:\n  // Vtuber Name\n  string name;\n  // Follower array with a variable size, each element should be a dynamically\n  // allocated object of class Follower.\n  Follower** followers;\n  // The size of follower array.\n  int follower_max;\n  // Number of followers\n  int follower_num;\n\n public:\n  Vtuber(const string& _name);\n  ~Vtuber();\n  void insert_follower(const string& follower_name, int follower_age);\n  void remove_follower(const string& follower_name);\n};\n\n```\n\nSpecifically, Vtuber's followers member variable is an array of pointers, each pointer pointing to a `Follower` object. The following graph illustrates it.\n\n```{figure} _images/followers.png\n```\n\n(1) Implement the constructor for `Vtuber`. Vtuber `name` should be initialized by `_name`, and `follower_max` should be initialized to 2. In addition, you should allocate an array called `followers` using `new`, with an initial size of 2 (the value of `follower_max`). Every element in this array should be a pointer to an object of class `Follower` and initialize all these pointers to `NULL`.\n\nVtuber::Vtuber (const string& _name) {\n  \n  // Your code here\n\n}\n\n",
      "question": "\nA Vtuber is an online entertainer who posts videos on Vtube. A Vtuber will have followers on Vtube. As a programmer from Vtube, you are asked to implement a class for Vtuber. The class definition and description are described below.\n\n```{code-block} cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Follower {\n private:\n  string name;\n  int age;\n\n public:\n  Follower(const string& _name, int _age) {\n    name = _name;\n    age = _age;\n  }\n  string get_name() const { return name; }\n  int get_age() const { return age; }\n};\nclass Vtuber {\n private:\n  // Vtuber Name\n  string name;\n  // Follower array with a variable size, each element should be a dynamically\n  // allocated object of class Follower.\n  Follower** followers;\n  // The size of follower array.\n  int follower_max;\n  // Number of followers\n  int follower_num;\n\n public:\n  Vtuber(const string& _name);\n  ~Vtuber();\n  void insert_follower(const string& follower_name, int follower_age);\n  void remove_follower(const string& follower_name);\n};\n\n```\n\nSpecifically, Vtuber's followers member variable is an array of pointers, each pointer pointing to a `Follower` object. The following graph illustrates it.\n\n```{figure} _images/followers.png\n```\n\n(1) Implement the constructor for `Vtuber`. Vtuber `name` should be initialized by `_name`, and `follower_max` should be initialized to 2. In addition, you should allocate an array called `followers` using `new`, with an initial size of 2 (the value of `follower_max`). Every element in this array should be a pointer to an object of class `Follower` and initialize all these pointers to `NULL`.\n",
      "starter-code": "\nVtuber::Vtuber (const string& _name) {\n  \n  // Your code here\n\n}\n\n",
      "answer": "\nVtuber::Vtuber(const string& _name) {\n  name = _name;\n  follower_max = 2;\n  follower_num = 0;\n  followers = new Follower*[follower_max];\n  for (int i = 0; i < follower_max; i++) {\n    followers[i] = NULL;\n  }\n}\n\n",
      "append-before": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Follower {\n private:\n  string name;\n  int age;\n\n public:\n  Follower(const string& _name, int _age) {\n    name = _name;\n    age = _age;\n  }\n  string get_name() const { return name; }\n  int get_age() const { return age; }\n  \n};\nclass Vtuber {\n private:\n  string name;\n  Follower** followers;\n  int follower_max;\n  int follower_num;\n\n public:\n  Vtuber(const string& _name);\n\n  // getters for testing\n  string get_name() const { return name; }\n  int get_follower_max() const { return follower_max; }\n  int get_follower_num() const { return follower_num; }\n  bool followers_all_null() const {\n    for (int i = 0; i < follower_max; i++) {\n      if (followers[i] != NULL) return false;\n    }\n    return true;\n  }\n\n};\n",
      "main-function": "int main() {\n  string vtuber_name;\n  getline(cin, vtuber_name);\n\n  Vtuber v(vtuber_name);\n\n  cout << \"Vtuber created: \" << v.get_name() << endl;\n  cout << \"Max followers allowed: \" << v.get_follower_max() << endl;\n  cout << \"Current number of followers: \" << v.get_follower_num() << endl;\n  cout << \"All followers initialized to NULL: \"\n       << (v.followers_all_null() ? \"Yes\" : \"No\") << endl;\n\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "Salma Emara"
          ],
          "output": [
            "Vtuber created: Salma Emara\nMax followers allowed: 2\nCurrent number of followers: 0\nAll followers initialized to NULL: Yes\n"
          ]
        },
        {
          "input": [
            "Burger AI"
          ],
          "output": [
            "Vtuber created: Burger AI\nMax followers allowed: 2\nCurrent number of followers: 0\nAll followers initialized to NULL: Yes\n"
          ]
        },
        {
          "input": [
            "ECE244 (Fall 2025)"
          ],
          "output": [
            "Vtuber created: ECE244 (Fall 2025)\nMax followers allowed: 2\nCurrent number of followers: 0\nAll followers initialized to NULL: Yes\n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-03-Q9",
      "title": "Question 10 in Fall 2022 Midterm Exam",
      "difficulty": "Challenging",
      "type": "function programming",
      "table": false,
      "multipart": true,
      "LLM": "A Vtuber is an online entertainer who posts videos on Vtube. A Vtuber will have followers on Vtube. As a programmer from Vtube, you are asked to implement a class for Vtuber. The class definition and description are described below.\n\n```{code-block} cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Follower {\n private:\n  string name;\n  int age;\n\n public:\n  Follower(const string& _name, int _age) {\n    name = _name;\n    age = _age;\n  }\n  string get_name() const { return name; }\n  int get_age() const { return age; }\n};\nclass Vtuber {\n private:\n  // Vtuber Name\n  string name;\n  // Follower array with a variable size, each element should be a dynamically\n  // allocated object of class Follower.\n  Follower** followers;\n  // The size of follower array.\n  int follower_max;\n  // Number of followers\n  int follower_num;\n\n public:\n  Vtuber(const string& _name);\n  ~Vtuber();\n  void insert_follower(const string& follower_name, int follower_age);\n  void remove_follower(const string& follower_name);\n};\n\n```\n\nSpecifically, Vtuber's followers member variable is an array of pointers, each pointer pointing to a `Follower` object. \n\n\n(2) Every Vtuber in `Vtube` can get new followers or lose their current followers. This is implemented by two methods: `insert_follower` and `remove_follower`. Now you are asked to implement these two methods:\n\na. For insert_follower, a follower name and follower age are given. You need to create a dynamically allocated object of `Follower` and insert it into the followers array (in the first available location), using `new` operator. If the array is full, you should double `follower_max`, allocate a new follower array, and move all the data into this `new` array, and insert the `new` follower. Write the code below.\n\nvoid Vtuber::insert_follower(const string& follower_name, \n                            int follower_age) {\n\n  // Your code here\n\n}\n\n",
      "question": "\n(2) Every Vtuber in `Vtube` can get new followers or lose their current followers. This is implemented by two methods: `insert_follower` and `remove_follower`. Now you are asked to implement these two methods:\n\na. For insert_follower, a follower name and follower age are given. You need to create a dynamically allocated object of `Follower` and insert it into the followers array (in the first available location), using `new` operator. If the array is full, you should double `follower_max`, allocate a new follower array, and move all the data into this `new` array, and insert the `new` follower. Write the code below.\n",
      "starter-code": "void Vtuber::insert_follower(const string& follower_name, \n                            int follower_age) {\n\n  // Your code here\n\n}\n",
      "answer": "void Vtuber::insert_follower(const string& follower_name, int follower_age) {\n  follower_num++;\n  for (int i = 0; i < follower_max; i++) {\n    if (followers[i] == NULL) {\n      followers[i] = new Follower(follower_name, follower_age);\n      return;\n    }\n  }\n  Follower** new_followers = new Follower*[2 * follower_max];\n  for (int i = 0; i < follower_max; i++) {\n    new_followers[i] = followers[i];\n    new_followers[i + follower_max] = NULL;\n  }\n  new_followers[follower_max] = new Follower(follower_name, follower_age);\n  delete[] followers;\n  followers = new_followers;\n  follower_max *= 2;\n  return;\n}\n",
      "append-before": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Follower {\n private:\n  string name;\n  int age;\n\n public:\n  Follower(const string& _name, int _age) {\n    name = _name;\n    age = _age;\n  }\n  string get_name() const { return name; }\n  int get_age() const { return age; }\n};\n\nclass Vtuber {\n private:\n  string name;\n  Follower** followers;\n  int follower_max;\n  int follower_num;\n\n public:\n  Vtuber(const string& _name);\n  void insert_follower(const string& follower_name, int follower_age);\n\n  // Extra helper for testcases\n  void print_followers() const {\n    cout << \"Vtuber: \" << name << \" has \" << follower_num << \" followers:\" << endl;\n    for (int i = 0; i < follower_max; i++) {\n      if (followers[i] != NULL) {\n        cout << \"- \" << followers[i]->get_name()\n             << \" (age \" << followers[i]->get_age() << \")\" << endl;\n      }\n    }\n  }\n};\n\n// Constructor from part (1)\nVtuber::Vtuber(const string& _name) {\n  name = _name;\n  follower_max = 2;\n  follower_num = 0;\n  followers = new Follower*[follower_max];\n  for (int i = 0; i < follower_max; i++) {\n    followers[i] = NULL;\n  }\n}\n  \n",
      "main-function": "\nint main() {\n  string vtuber_name;\n  getline(cin, vtuber_name);  // full Vtuber name\n  Vtuber v(vtuber_name);\n\n  string command;\n  while (cin >> command) {\n    if (command == \"Insert\") {\n      int n;\n      cin >> n;\n      for (int i = 0; i < n; i++) {\n        string name;\n        int age;\n        cin >> name >> age;\n        v.insert_follower(name, age);\n      }\n    } else {\n      cerr << \"Unknown command: \" << command << endl;\n      break;\n    }\n  }\n\n  v.print_followers();\n  return 0;\n}\n\n",
      "testcases": [
        {
          "input": [
            "Salma Emara\nInsert 2\nNora 2\nnora12495 5\n"
          ],
          "output": [
            "Vtuber: Salma Emara has 2 followers:\n- Nora (age 2)\n- nora12495 (age 5)\n"
          ]
        },
        {
          "input": [
            "Burger AI\nInsert 4\nEllie 20\nKatie 19\nAlex 4\nNora 20"
          ],
          "output": [
            "Vtuber: Burger AI has 4 followers:\n- Ellie (age 20)\n- Katie (age 19)\n- Alex (age 4)\n- Nora (age 20)\n"
          ]
        },
        {
          "input": [
            "ECE244 (Fall 2025)\nInsert 5\nStudent1 20\nStudent2 19\nStudent10124 22\nStudent124 18\nStudent128047 21"
          ],
          "output": [
            "Vtuber: ECE244 (Fall 2025) has 5 followers:\n- Student1 (age 20)\n- Student2 (age 19)\n- Student10124 (age 22)\n- Student124 (age 18)\n- Student 128047 (age 21)"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-03-Q10",
      "title": "Question 10 in Fall 2022 Midterm Exam",
      "difficulty": "Challenging",
      "type": "function programming",
      "table": false,
      "multipart": true,
      "LLM": "A Vtuber is an online entertainer who posts videos on Vtube. A Vtuber will have followers on Vtube. As a programmer from Vtube, you are asked to implement a class for Vtuber. The class definition and description are described below.\n\n```{code-block} cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Follower {\n private:\n  string name;\n  int age;\n\n public:\n  Follower(const string& _name, int _age) {\n    name = _name;\n    age = _age;\n  }\n  string get_name() const { return name; }\n  int get_age() const { return age; }\n};\nclass Vtuber {\n private:\n  // Vtuber Name\n  string name;\n  // Follower array with a variable size, each element should be a dynamically\n  // allocated object of class Follower.\n  Follower** followers;\n  // The size of follower array.\n  int follower_max;\n  // Number of followers\n  int follower_num;\n\n public:\n  Vtuber(const string& _name);\n  ~Vtuber();\n  void insert_follower(const string& follower_name, int follower_age);\n  void remove_follower(const string& follower_name);\n};\n\n```\n\nSpecifically, Vtuber's followers member variable is an array of pointers, each pointer pointing to a `Follower` object. \n\n\n(2) Every Vtuber in `Vtube` can get new followers or lose their current followers. This is implemented by two methods: `insert_follower` and `remove_follower`. Now you are asked to implement these two methods:\n\nb. For `remove_follower`, a follower name is given. If there is any follower in the array matching the name, you should remove it and free its memory using `delete`. You can assume the follower names are all unique.\n\nvoid Vtuber::remove_follower(const string& follower_name) {\n  \n  // Your code here\n\n}\n\n",
      "question": "b. For `remove_follower`, a follower name is given. If there is any follower in the array matching the name, you should remove it and free its memory using `delete`. You can assume the follower names are all unique.\n",
      "starter-code": "void Vtuber::remove_follower(const string& follower_name) {\n  \n  // Your code here\n\n}\n",
      "answer": "void Vtuber::remove_follower(const string& follower_name) {\n  for (int i = 0; i < follower_max; i++) {\n    if (followers[i] == NULL)  // 3 marks on skipping NULL members\n      continue;\n    if (followers[i]->get_name() == follower_name) {  // 1 mark\n      follower_num--;                                 // 1 mark\n      delete followers[i];                            // 2 mark\n      followers[i] = NULL;                            // 1 mark\n      break;\n    }\n  }\n  return;\n}\n",
      "append-before": "#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Follower {\n private:\n  string name;\n  int age;\n\n public:\n  Follower(const string& _name, int _age) {\n    name = _name;\n    age = _age;\n  }\n  string get_name() const { return name; }\n  int get_age() const { return age; }\n};\n\nclass Vtuber {\n private:\n  string name;\n  Follower** followers;\n  int follower_max;\n  int follower_num;\n\n public:\n  Vtuber(const string& _name);\n  void insert_follower(const string& follower_name, int follower_age);\n  void remove_follower(const string& follower_name);\n\n  // Extra helper for testcases\n  void print_followers() const {\n    cout << \"Vtuber: \" << name << \" has \" << follower_num << \" followers:\" << endl;\n    for (int i = 0; i < follower_max; i++) {\n      if (followers[i] != NULL) {\n        cout << \"- \" << followers[i]->get_name()\n             << \" (age \" << followers[i]->get_age() << \")\" << endl;\n      }\n    }\n  }\n};\n\n// Constructor from part (1)\nVtuber::Vtuber(const string& _name) {\n  name = _name;\n  follower_max = 2;\n  follower_num = 0;\n  followers = new Follower*[follower_max];\n  for (int i = 0; i < follower_max; i++) {\n    followers[i] = NULL;\n  }\n}\n\n// insert_follower from part (2a)\nvoid Vtuber::insert_follower(const string& follower_name, int follower_age) {\n  follower_num++;\n  for (int i = 0; i < follower_max; i++) {\n    if (followers[i] == NULL) {\n      followers[i] = new Follower(follower_name, follower_age);\n      return;\n    }\n  }\n  Follower** new_followers = new Follower*[2 * follower_max];\n  for (int i = 0; i < follower_max; i++) {\n    new_followers[i] = followers[i];\n    new_followers[i + follower_max] = NULL;\n  }\n  new_followers[follower_max] = new Follower(follower_name, follower_age);\n  delete[] followers;\n  followers = new_followers;\n  follower_max *= 2;\n  return;\n}\n",
      "main-function": "int main() {\n  string vtuber_name;\n  getline(cin, vtuber_name);\n  Vtuber v(vtuber_name);\n\n  string command;\n  while (cin >> command) {\n    if (command == \"Insert\") {\n      int n;\n      cin >> n;\n      for (int i = 0; i < n; i++) {\n        string name;\n        int age;\n        cin >> name >> age;\n        cout << \"Inserting follower: \" << name << \" (age \" << age << \")\" << endl;\n        v.insert_follower(name, age);\n      }\n    } else if (command == \"Remove\") {\n      int n;\n      cin >> n;\n      for (int i = 0; i < n; i++) {\n        string name;\n        cin >> name;\n        cout << \"Removing follower: \" << name << endl;\n        v.remove_follower(name);\n      }\n    } else {\n      cout << \"Unknown command: \" << command << endl;\n    }\n  }\n\n  v.print_followers();\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "Salma Emara\nInsert 2\nNora 2\nnora12495 5\nRemove 1\nnora12495"
          ],
          "output": [
            "Inserting follower: Nora (age 2)\nInserting follower: nora12495 (age 5)\nRemoving follower: nora12495\nVtuber: Salma Emara has 1 followers:\n- Nora (age 2)\n\n"
          ]
        },
        {
          "input": [
            "Burger AI\nInsert 4\nEllie 20\nKatie 19\nAlex 4\nNora 20\nRemove 2\nKatie\nAlex"
          ],
          "output": [
            "Inserting follower: Ellie (age 20)\nInserting follower: Katie (age 19)\nInserting follower: Alex (age 4)\nInserting follower: Nora (age 20)\nRemoving follower: Katie\nRemoving follower: Alex\nVtuber: Burger AI has 2 followers:\n- Ellie (age 20)\n- Nora (age 20)\n"
          ]
        },
        {
          "input": [
            "ECE244 (Fall 2025)\nInsert 5\nStudent1 20\nStudent2 19\nStudent10124 22\nStudent124 18\nStudent128047 21\nRemove 4\nStudent10124 \nStudent1 \nStudent128047 \nStudent124 \n\n"
          ],
          "output": [
            "Inserting follower: Student1 (age 20)\nInserting follower: Student2 (age 19)\nInserting follower: Student10124 (age 22)\nInserting follower: Student124 (age 18)\nInserting follower: Student128047 (age 21)\nRemoving follower: Student10124\nRemoving follower: Student1\nRemoving follower: Student128047\nRemoving follower: Student124\nVtuber: ECE244 (Fall 2025) has 1 followers:\n- Student2 (age 19)\n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-03-Q11",
      "title": "Question 10 in Fall 2022 Midterm Exam",
      "difficulty": "Challenging",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "LLM": "A Vtuber is an online entertainer who posts videos on Vtube. A Vtuber will have followers on Vtube. As a programmer from Vtube, you are asked to implement a class for Vtuber. The class definition and description are described below.\n\n```{code-block} cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Follower {\n private:\n  string name;\n  int age;\n\n public:\n  Follower(const string& _name, int _age) {\n    name = _name;\n    age = _age;\n  }\n  string get_name() const { return name; }\n  int get_age() const { return age; }\n};\nclass Vtuber {\n private:\n  // Vtuber Name\n  string name;\n  // Follower array with a variable size, each element should be a dynamically\n  // allocated object of class Follower.\n  Follower** followers;\n  // The size of follower array.\n  int follower_max;\n  // Number of followers\n  int follower_num;\n\n public:\n  Vtuber(const string& _name);\n  ~Vtuber();\n  void insert_follower(const string& follower_name, int follower_age);\n  void remove_follower(const string& follower_name);\n};\n\n```\n\nSpecifically, Vtuber's followers member variable is an array of pointers, each pointer pointing to a `Follower` object. \n\n\n(3) Implement the destructor for the `Vtuber` class. You should free all the dynamically allocated objects using `delete`. Remember to be consistent with your previous implementation, as the entire program should not trigger any segmentation fault.\n\nVtuber::~Vtuber() {\n  \n  // Your code here\n\n}\n\n",
      "question": "\n(3) Implement the destructor for the `Vtuber` class. You should free all the dynamically allocated objects using `delete`. Remember to be consistent with your previous implementation, as the entire program should not trigger any segmentation fault.\n\n",
      "answer": "<code>\nVtuber::~Vtuber() {\n\nfor (int i = 0; i < follower_max; i++) {\n\ndelete followers[i];  // delete NULL is safe;\n\n}\n\ndelete[] followers;\n\n}\n</code>\n"
    }
  ]
};