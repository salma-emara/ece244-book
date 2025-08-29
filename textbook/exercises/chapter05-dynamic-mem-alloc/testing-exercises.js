let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "title": "Question 3 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": false,
      "question": "\nConsider the following C++ function:\n\n```{code-block} cpp\nvoid AvadaKedavra(int n) {\n  int size = n + 1;\n  int* q = NULL;\n  for (int i = 0; i < 3; ++i) {\n    q = new int[size];\n  }\n}\n```\n\nIf somewhere in your main function you call `AvadaKedavra(1)`. Based on the memory layout discussed during the lecture, answer this question: from the time this function starts to execute to the time right before it returns, how many bytes are newly allocated on the stack and the heap, respectively?\n\nYou may assume:\n1. all variables are put in the main memory.\n2. an `int` takes 4 bytes\n3. we have a 32-bit machine\n\n",
      "answer": "\nStack\n\n`n`: 4 bytes\n\n`size`: 4 bytes\n\n`q`: 4 bytes\n\n`i`: 4 bytes\n\nTotal: 16 bytes\n\nHeap\n`n` is 1, `size` is 2\n\nThe loop iterates 3 times, each time it allocates 2 integers. \n\nTotal is 3 * 2 * 4 bytes = 24 bytes.\n\n"
    },
    {
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
      "title": "Question 10 in Fall 2022 Midterm Exam",
      "difficulty": "Challenging",
      "type": "function programming",
      "table": false,
      "multipart": true,
      "question": "\nA Vtuber is an online entertainer who posts videos on Vtube. A Vtuber will have followers on Vtube. As a programmer from Vtube, you are asked to implement a class for Vtuber. The class definition and description are described below.\n\n```{code-block} cpp\n#include <string>\nusing namespace std;\nclass Follower {\n private:\n  string name;\n  int age;\n\n public:\n  Follower(const string& _name, int _age) {\n    name = name_;\n    age = age_;\n  }\n  string get_name() const { return name; }\n  int get_age() const { return age; }\n};\nclass Vtuber {\n private:\n  // Vtuber Name\n  string name;\n  // Follower array with a variable size, each element should be a dynamically\n  // allocated object of class Follower.\n  Follower** followers;\n  // The size of follower array.\n  int follower_max;\n  // Number of followers\n  int follower_num;\n\n public:\n  Vtuber(const string& _name);\n  ~Vtuber();\n  void insert_follower(const string& follower_name, int follower_age);\n  void remove_follower(const string& follower_name);\n};\n\n```\n\nSpecifically, Vtuber's followers member variable is an array of pointers, each pointer pointing to a `Follower` object. The following graph illustrates it.\n\n```{figure} ../../../_images/followers.png\n```\n\n1. Implement the constructor for `Vtuber`. Vtuber `name` should be initialized by `_name`, and `follower_max` should be initialized to 2. In addition, you should allocate an array called `followers` using `new`, with an initial size of 2 (the value of `follower_max`). Every element in this array should be a pointer to an object of class `Follower` and initialize all these pointers to `NULL`.\n\n    ```{code-block} cpp \n    Vtuber::Vtuber (const string& _name) {\n\n    }\n    ```\n\n    ````{admonition} Answer\n    :class: dropdown\n\n    ```{code-block} cpp\n    Vtuber::Vtuber(const string& _name) {\n      name = _name;\n      follower_max = 2;\n      follower_num = 0;\n      followers = new Follower*[follower_max];\n      for (int i = 0; i < follower_max; i++) {\n        followers[i] = NULL;\n      }\n    }\n    ```\n    ````\n\n"
    }
  ]
};