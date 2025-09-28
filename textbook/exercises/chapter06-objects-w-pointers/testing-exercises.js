let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "question-id": "chapter-06-Q1",
      "title": "Question 5 in Fall 2019 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "LLM": "\nConsider a (non-member) function called `doIt`, which takes a single object of type `DayOfYear` and returns a single object also of type `DayOfYear`. You may assume that the class `DayOfYear` is correctly implemented and that `DayOfYear.h` is included. Which of the\nfollowing implementations of this function is problem-free? \n\n(1)\n```{code-block} cpp\nDayOfYear doIt(DayOfYear& arg) {\n  DayOfYear temp;\n  temp = arg;\n  return (arg);\n}\n```\n",
      "question": "\nConsider a (non-member) function called `doIt`, which takes a single object of type `DayOfYear` and returns a single object also of type `DayOfYear`. You may assume that the class `DayOfYear` is correctly implemented and that `DayOfYear.h` is included. Which of the\nfollowing implementations of this function is problem-free? \n\n(1)\n```{code-block} cpp\nDayOfYear doIt(DayOfYear& arg) {\n  DayOfYear temp;\n  temp = arg;\n  return (arg);\n}\n```\n",
      "answer": "Has no problem. We return `arg` by value and we create a copy of `arg` using copy constructor.\n"
    },
    {
      "question-id": "chapter-06-Q2",
      "title": "Question 5 in Fall 2019 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "LLM": "\nConsider a (non-member) function called `doIt`, which takes a single object of type `DayOfYear` and returns a single object also of type `DayOfYear`. You may assume that the class `DayOfYear` is correctly implemented and that `DayOfYear.h` is included. Which of the\nfollowing implementations of this function is problem-free? \n\n(2)\n```{code-block} cpp\nDayOfYear doIt(DayOfYear& arg) {\n  DayOfYear temp;\n  temp = arg;\n  return (temp);\n}\n```\n",
      "question": "(2)\n```{code-block} cpp\nDayOfYear doIt(DayOfYear& arg) {\n  DayOfYear temp;\n  temp = arg;\n  return (temp);\n}\n```\n",
      "answer": "Has no problem. We return `temp` by value and we create a copy of `temp` using copy constructor.\n"
    },
    {
      "question-id": "chapter-06-Q3",
      "title": "Question 5 in Fall 2019 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "LLM": "\nConsider a (non-member) function called `doIt`, which takes a single object of type `DayOfYear` and returns a single object also of type `DayOfYear`. You may assume that the class `DayOfYear` is correctly implemented and that `DayOfYear.h` is included. Which of the\nfollowing implementations of this function is problem-free? \n\n(3)\n```{code-block} cpp\nDayOfYear& doIt(DayOfYear& arg) {\n  DayOfYear temp;\n  temp = arg;\n  return (*this);\n}\n```\n",
      "question": "(3)\n```{code-block} cpp\nDayOfYear& doIt(DayOfYear& arg) {\n  DayOfYear temp;\n  temp = arg;\n  return (*this);\n}\n```\n",
      "answer": "Has a problem, because in the question it says `doIt` is a non-member function. Since this is a pointer to an \nobject on which the member function is invoked, it can only be accessed in a member function. In short, we \ncannot access `this` in `doIt` function.\n"
    },
    {
      "question-id": "chapter-06-Q4",
      "title": "Question 5 in Fall 2019 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "LLM": "\nConsider a (non-member) function called `doIt`, which takes a single object of type `DayOfYear` and returns a single object also of type `DayOfYear`. You may assume that the class `DayOfYear` is correctly implemented and that `DayOfYear.h` is included. Which of the\nfollowing implementations of this function is problem-free? \n\n(4)\n```{code-block} cpp\nDayOfYear& doIt(DayOfYear& arg) {\n  DayOfYear temp;\n  temp = arg;\n  return (temp);\n}\n```\n",
      "question": "(4)\n```{code-block} cpp\nDayOfYear& doIt(DayOfYear& arg) {\n  DayOfYear temp;\n  temp = arg;\n  return (temp);\n}\n```\n",
      "answer": "Has a problem, but it is quite tricky. `temp` is a local only to the function `doIt` since it was defined only\ninside the function. `temp` will go out of scope or disappear from the memory the moment we return from `doIt`\nfunction. If we return `temp` by reference, and `temp` actually is non-existing after the function call, the \nbehavior is undefined if we try accessing whatever `doIt` returns.\n"
    },
    {
      "question-id": "chapter-06-Q5",
      "title": "Modified Version of Question 5 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "LLM": "Consider the following class definition and implementation.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass Duo {\n private:\n  int* p;\n  int* q;\n\n public:\n  Duo(int a, int b) {\n    p = new int;\n    *p = a;\n    q = new int;\n    *q = b;\n  }\n  int get_a() { return *p; }\n  int get_b() { return *q; }\n  void set_a(int a) { *p = a; }\n  void set_b(int b) { *q = b; }\n  Duo funnyMultiply(Duo& rhs) {\n    Duo temp(0, 0);\n    *(temp.p) = (*p) * *(rhs.p);\n    *(temp.q) = (*q) * *(rhs.q);\n    *(rhs.p) = *(rhs.p) - 1;\n    *(rhs.q) = *(rhs.q) - 1;\n    return (temp);\n  }\n  Duo print() {\n    cout << *p << \" \" << *q << endl;\n    return (*this);\n  }\n};\n```\n\nThe following `main` program uses class `Duo`.\n\n```{code-block} cpp\nint main() {\n  Duo X(3, 5);\n  Duo Y(8, 9);\n  Duo Z(2, 4);\n  Z = X.funnyMultiply(Y);\n  Z.print();  // Statement 1\n  Z.set_a(1);\n  Z.set_b(2);\n  Z.print();  // Statement 2\n  X.print();  // Statement 3\n  Y.print();  // Statement 4\n  Duo W(6, 12);\n  Duo V(2, 3);\n  W.print().funnyMultiply(V).print();  // Statement 5\n  W.print();                           // Statement 6\n  // Point A\n  cout << \"Program is done\" << endl;\n  return (0);\n}\n```\n\nWrite the output produced by Statement 1\n",
      "question": "Consider the following class definition and implementation.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass Duo {\n private:\n  int* p;\n  int* q;\n\n public:\n  Duo(int a, int b) {\n    p = new int;\n    *p = a;\n    q = new int;\n    *q = b;\n  }\n  int get_a() { return *p; }\n  int get_b() { return *q; }\n  void set_a(int a) { *p = a; }\n  void set_b(int b) { *q = b; }\n  Duo funnyMultiply(Duo& rhs) {\n    Duo temp(0, 0);\n    *(temp.p) = (*p) * *(rhs.p);\n    *(temp.q) = (*q) * *(rhs.q);\n    *(rhs.p) = *(rhs.p) - 1;\n    *(rhs.q) = *(rhs.q) - 1;\n    return (temp);\n  }\n  Duo print() {\n    cout << *p << \" \" << *q << endl;\n    return (*this);\n  }\n};\n```\n\nThe following `main` program uses class `Duo`.\n\n```{code-block} cpp\nint main() {\n  Duo X(3, 5);\n  Duo Y(8, 9);\n  Duo Z(2, 4);\n  Z = X.funnyMultiply(Y);\n  Z.print();  // Statement 1\n  Z.set_a(1);\n  Z.set_b(2);\n  Z.print();  // Statement 2\n  X.print();  // Statement 3\n  Y.print();  // Statement 4\n  Duo W(6, 12);\n  Duo V(2, 3);\n  W.print().funnyMultiply(V).print();  // Statement 5\n  W.print();                           // Statement 6\n  // Point A\n  cout << \"Program is done\" << endl;\n  return (0);\n}\n```\n\n(1) Write the output produced by each of the labeled statement (Statement 1 to\nStatement 6) in main. Write your answer in the textboxes below.\n\na. Statement 1:\n",
      "answer": "24 45"
    },
    {
      "question-id": "chapter-06-Q6",
      "title": "Modified Version of Question 5 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "LLM": "Consider the following class definition and implementation.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass Duo {\n private:\n  int* p;\n  int* q;\n\n public:\n  Duo(int a, int b) {\n    p = new int;\n    *p = a;\n    q = new int;\n    *q = b;\n  }\n  int get_a() { return *p; }\n  int get_b() { return *q; }\n  void set_a(int a) { *p = a; }\n  void set_b(int b) { *q = b; }\n  Duo funnyMultiply(Duo& rhs) {\n    Duo temp(0, 0);\n    *(temp.p) = (*p) * *(rhs.p);\n    *(temp.q) = (*q) * *(rhs.q);\n    *(rhs.p) = *(rhs.p) - 1;\n    *(rhs.q) = *(rhs.q) - 1;\n    return (temp);\n  }\n  Duo print() {\n    cout << *p << \" \" << *q << endl;\n    return (*this);\n  }\n};\n```\n\nThe following `main` program uses class `Duo`.\n\n```{code-block} cpp\nint main() {\n  Duo X(3, 5);\n  Duo Y(8, 9);\n  Duo Z(2, 4);\n  Z = X.funnyMultiply(Y);\n  Z.print();  // Statement 1\n  Z.set_a(1);\n  Z.set_b(2);\n  Z.print();  // Statement 2\n  X.print();  // Statement 3\n  Y.print();  // Statement 4\n  Duo W(6, 12);\n  Duo V(2, 3);\n  W.print().funnyMultiply(V).print();  // Statement 5\n  W.print();                           // Statement 6\n  // Point A\n  cout << \"Program is done\" << endl;\n  return (0);\n}\n```\n\nWrite the output produced by Statement 2\n",
      "question": "b. Statement 2:\n",
      "answer": "1 2\n"
    },
    {
      "question-id": "chapter-06-Q7",
      "title": "Modified Version of Question 5 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "LLM": "Consider the following class definition and implementation.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass Duo {\n private:\n  int* p;\n  int* q;\n\n public:\n  Duo(int a, int b) {\n    p = new int;\n    *p = a;\n    q = new int;\n    *q = b;\n  }\n  int get_a() { return *p; }\n  int get_b() { return *q; }\n  void set_a(int a) { *p = a; }\n  void set_b(int b) { *q = b; }\n  Duo funnyMultiply(Duo& rhs) {\n    Duo temp(0, 0);\n    *(temp.p) = (*p) * *(rhs.p);\n    *(temp.q) = (*q) * *(rhs.q);\n    *(rhs.p) = *(rhs.p) - 1;\n    *(rhs.q) = *(rhs.q) - 1;\n    return (temp);\n  }\n  Duo print() {\n    cout << *p << \" \" << *q << endl;\n    return (*this);\n  }\n};\n```\n\nThe following `main` program uses class `Duo`.\n\n```{code-block} cpp\nint main() {\n  Duo X(3, 5);\n  Duo Y(8, 9);\n  Duo Z(2, 4);\n  Z = X.funnyMultiply(Y);\n  Z.print();  // Statement 1\n  Z.set_a(1);\n  Z.set_b(2);\n  Z.print();  // Statement 2\n  X.print();  // Statement 3\n  Y.print();  // Statement 4\n  Duo W(6, 12);\n  Duo V(2, 3);\n  W.print().funnyMultiply(V).print();  // Statement 5\n  W.print();                           // Statement 6\n  // Point A\n  cout << \"Program is done\" << endl;\n  return (0);\n}\n```\n\nWrite the output produced by Statement 3\n",
      "question": "c. Statement 3:\n",
      "answer": "3 5\n"
    },
    {
      "question-id": "chapter-06-Q8",
      "title": "Modified Version of Question 5 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "LLM": "Consider the following class definition and implementation.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass Duo {\n private:\n  int* p;\n  int* q;\n\n public:\n  Duo(int a, int b) {\n    p = new int;\n    *p = a;\n    q = new int;\n    *q = b;\n  }\n  int get_a() { return *p; }\n  int get_b() { return *q; }\n  void set_a(int a) { *p = a; }\n  void set_b(int b) { *q = b; }\n  Duo funnyMultiply(Duo& rhs) {\n    Duo temp(0, 0);\n    *(temp.p) = (*p) * *(rhs.p);\n    *(temp.q) = (*q) * *(rhs.q);\n    *(rhs.p) = *(rhs.p) - 1;\n    *(rhs.q) = *(rhs.q) - 1;\n    return (temp);\n  }\n  Duo print() {\n    cout << *p << \" \" << *q << endl;\n    return (*this);\n  }\n};\n```\n\nThe following `main` program uses class `Duo`.\n\n```{code-block} cpp\nint main() {\n  Duo X(3, 5);\n  Duo Y(8, 9);\n  Duo Z(2, 4);\n  Z = X.funnyMultiply(Y);\n  Z.print();  // Statement 1\n  Z.set_a(1);\n  Z.set_b(2);\n  Z.print();  // Statement 2\n  X.print();  // Statement 3\n  Y.print();  // Statement 4\n  Duo W(6, 12);\n  Duo V(2, 3);\n  W.print().funnyMultiply(V).print();  // Statement 5\n  W.print();                           // Statement 6\n  // Point A\n  cout << \"Program is done\" << endl;\n  return (0);\n}\n```\n\nWrite the output produced by Statement 4\n",
      "question": "d. Statement 4:\n",
      "answer": "7 8\n"
    },
    {
      "question-id": "chapter-06-Q9",
      "title": "Modified Version of Question 5 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "LLM": "Consider the following class definition and implementation.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass Duo {\n private:\n  int* p;\n  int* q;\n\n public:\n  Duo(int a, int b) {\n    p = new int;\n    *p = a;\n    q = new int;\n    *q = b;\n  }\n  int get_a() { return *p; }\n  int get_b() { return *q; }\n  void set_a(int a) { *p = a; }\n  void set_b(int b) { *q = b; }\n  Duo funnyMultiply(Duo& rhs) {\n    Duo temp(0, 0);\n    *(temp.p) = (*p) * *(rhs.p);\n    *(temp.q) = (*q) * *(rhs.q);\n    *(rhs.p) = *(rhs.p) - 1;\n    *(rhs.q) = *(rhs.q) - 1;\n    return (temp);\n  }\n  Duo print() {\n    cout << *p << \" \" << *q << endl;\n    return (*this);\n  }\n};\n```\n\nThe following `main` program uses class `Duo`.\n\n```{code-block} cpp\nint main() {\n  Duo X(3, 5);\n  Duo Y(8, 9);\n  Duo Z(2, 4);\n  Z = X.funnyMultiply(Y);\n  Z.print();  // Statement 1\n  Z.set_a(1);\n  Z.set_b(2);\n  Z.print();  // Statement 2\n  X.print();  // Statement 3\n  Y.print();  // Statement 4\n  Duo W(6, 12);\n  Duo V(2, 3);\n  W.print().funnyMultiply(V).print();  // Statement 5\n  W.print();                           // Statement 6\n  // Point A\n  cout << \"Program is done\" << endl;\n  return (0);\n}\n```\n\nWrite the output produced by Statement 5\n",
      "question": "e. Statement 5:\n",
      "answer": "6 12 \n12 36\n"
    },
    {
      "question-id": "chapter-06-Q10",
      "title": "Modified Version of Question 5 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "LLM": "Consider the following class definition and implementation.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass Duo {\n private:\n  int* p;\n  int* q;\n\n public:\n  Duo(int a, int b) {\n    p = new int;\n    *p = a;\n    q = new int;\n    *q = b;\n  }\n  int get_a() { return *p; }\n  int get_b() { return *q; }\n  void set_a(int a) { *p = a; }\n  void set_b(int b) { *q = b; }\n  Duo funnyMultiply(Duo& rhs) {\n    Duo temp(0, 0);\n    *(temp.p) = (*p) * *(rhs.p);\n    *(temp.q) = (*q) * *(rhs.q);\n    *(rhs.p) = *(rhs.p) - 1;\n    *(rhs.q) = *(rhs.q) - 1;\n    return (temp);\n  }\n  Duo print() {\n    cout << *p << \" \" << *q << endl;\n    return (*this);\n  }\n};\n```\n\nThe following `main` program uses class `Duo`.\n\n```{code-block} cpp\nint main() {\n  Duo X(3, 5);\n  Duo Y(8, 9);\n  Duo Z(2, 4);\n  Z = X.funnyMultiply(Y);\n  Z.print();  // Statement 1\n  Z.set_a(1);\n  Z.set_b(2);\n  Z.print();  // Statement 2\n  X.print();  // Statement 3\n  Y.print();  // Statement 4\n  Duo W(6, 12);\n  Duo V(2, 3);\n  W.print().funnyMultiply(V).print();  // Statement 5\n  W.print();                           // Statement 6\n  // Point A\n  cout << \"Program is done\" << endl;\n  return (0);\n}\n```\n\nWrite the output produced by Statement 6\n",
      "question": "f. Statement 6:\n",
      "answer": "6 12 \n"
    },
    {
      "question-id": "chapter-06-Q11",
      "title": "Modified Version of Question 5 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "LLM": "Consider the following class definition and implementation.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass Duo {\n private:\n  int* p;\n  int* q;\n\n public:\n  Duo(int a, int b) {\n    p = new int;\n    *p = a;\n    q = new int;\n    *q = b;\n  }\n  int get_a() { return *p; }\n  int get_b() { return *q; }\n  void set_a(int a) { *p = a; }\n  void set_b(int b) { *q = b; }\n  Duo funnyMultiply(Duo& rhs) {\n    Duo temp(0, 0);\n    *(temp.p) = (*p) * *(rhs.p);\n    *(temp.q) = (*q) * *(rhs.q);\n    *(rhs.p) = *(rhs.p) - 1;\n    *(rhs.q) = *(rhs.q) - 1;\n    return (temp);\n  }\n  Duo print() {\n    cout << *p << \" \" << *q << endl;\n    return (*this);\n  }\n};\n```\n\nThe following `main` program uses class `Duo`.\n\n```{code-block} cpp\nint main() {\n  Duo X(3, 5);\n  Duo Y(8, 9);\n  Duo Z(2, 4);\n  Z = X.funnyMultiply(Y);\n  Z.print();  // Statement 1\n  Z.set_a(1);\n  Z.set_b(2);\n  Z.print();  // Statement 2\n  X.print();  // Statement 3\n  Y.print();  // Statement 4\n  Duo W(6, 12);\n  Duo V(2, 3);\n  W.print().funnyMultiply(V).print();  // Statement 5\n  W.print();                           // Statement 6\n  // Point A\n  cout << \"Program is done\" << endl;\n  return (0);\n}\n```\n\nHow many integers exist in memory in the form of a memory leak when execution\nreaches Point A in the main function above? Write your answer in the box below.\n",
      "question": "(2) How many integers exist in memory in the form of a memory leak when execution\nreaches Point A in the main function above? Write your answer in the box below.\n",
      "answer": "Z initially had p and q pointing to two integers, and we lost access to them when we pointed to p and q from the object \nreturned by value in `Z = X.funnyMultiply(Y);`.\n\nAnother two integers were lost in `W.print().funnyMultiply(V).print();` after returning from `funnyMultiply` function. \n\nTotal, we have 4 integers in the memory exist in the form of a memory leak. \n"
    }
  ]
};