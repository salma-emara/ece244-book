let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "title": "Question 9 in Fall 2022 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "tracing",
      "multipart": false,
      "question": "Write down the standard output of the following program. Remember to write two \"Check Point\", since partial marks are given based on these \"stop points\". You might find it helpful to write down the memory layout.\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nint i[5] = {0, 2, 4, 6, 8};\nint* p;\n\nvoid foo() {\n  cout << *p << endl;\n  ++(*p);\n  ++p;\n}\n\nvoid bar() {\n  for (int i = 0; i < 3; ++i) {\n    foo();\n  }\n}\n\nint main() {\n  p = i;\n  bar();\n  cout << \"Check Point 1\" << endl;\n  p = i;\n  foo();\n  cout << \"Check Point 2\" << endl;\n  return 0;\n}\n```\n",
      "answer": " \n0\n2\n4\nCheck Point 1\n1\nCheck Point 2\n"
    },
    {
      "title": "Question 3 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "question": "\nConsider the following code snippet that manipulates pointers in a main function of a C++ program. \n\n```{code-block} cpp\nint* p = nullptr;\nint* q = nullptr;\nint* r = nullptr;\nint** t = &p;\nint** s = &q;\nr = p;\np = new int;\nq = new int;\n*p = 5;\n*q = 2;\n**s = *p + **t;\n```\n\nWhich of the following statements (that come after the above snippets executes) prints 5 to the standard output? You may assume `iostream` is included and the `std` namespace is used. Choose all correct answers.\n\n",
      "answer": [
        3,
        4,
        7
      ],
      "choices": [
        "1. `cout << r;`",
        "2. `cout << *t;`",
        "3. `cout << *q;`",
        "4. `cout << *p;`",
        "5. `cout << **t;`",
        "6. `cout << *r;`",
        "7. `cout << *s;`",
        "8. `cout << (**s) / 2;`"
      ],
      "explanations": [
        "4. `cout << *p;`",
        "5. `cout << **t;`",
        "8. `cout << (**s) / 2;"
      ]
    },
    {
      "title": "Question 4 in Fall 2018 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "tracing",
      "multipart": true,
      "question": "Consider the following `main` function. The line numbers to the left are for reference and are not part of the code.\n\n```{code-block} cpp\n:linenos:\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int* first_ptr;\n  int* second_ptr;\n  int** p_ptr;\n  first_ptr = new int;\n  second_ptr = new int;\n  p_ptr = &first_ptr;\n  *first_ptr = 4;\n  *second_ptr = 8;\n  second_ptr = *p_ptr;\n  cout << *first_ptr << \" \" << *second_ptr << endl;\n  delete first_ptr;\n  delete second_ptr;\n  delete *p_ptr;\n  return (0);\n}\n```\n\n1. What is the output produced by `cout` on line 14 of the code\n\n",
      "answer": " \n4 4\n"
    },
    {
      "title": "Question 4 in Fall 2018 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "question": "2. The program may have a problem with it. What is the problem, if any? Circle only one answer.\n",
      "answer": [
        5
      ],
      "choices": [
        "A. The program has no problem with it",
        "B. The program has a memory leak.",
        "C. The delete on line 17 should not dereference p_ptr, but use it directly.",
        "D. The program deletes the same region of memory more than once.",
        "E. B and C.",
        "F. B and D.",
        "G. B, C and D."
      ],
      "explanations": [
        "The program has a memory leak because in line 13, it changes what `second_ptr` is pointing to without freeing up the memory space it was pointing to.`second_ptr`, `first_ptr`, and `*p_ptr` are all pointing to an `int` with 4, while there are three deletes for the same memory space. "
      ]
    },
    {
      "title": "Question 2 in Fall 2017 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "tracing",
      "multipart": false,
      "question": "Consider the following program. \n\n```{code-block} cpp\nclass Point {\n  int x;\n  int y;\n\n public:\n  Point(int i, int j);\n  Point increment_x();\n  Point increment_y();\n  void print() const;\n};\nPoint::Point(int i, int j) {\n  x = i;\n  y = j;\n}\nPoint Point::increment_x() {\n  ++x;\n  return *this;\n}\nPoint Point::increment_y() {\n  ++y;\n  return *this;\n}\nvoid Point::print() const {\n  cout << \"(\" << x << \",\" << y << \")\" << endl;\n}\nint main() {\n  Point a(2, 3);\n  // Evaluation is done left to right\n  a.increment_x().increment_y().print();\n  a.print();\n  return 0;\n}\n```\n\nAssuming the C++ compiler does not optimize away copying of objects. Write the output produced by the program.\n",
      "answer": " \n(3,4)\n"
    }
  ]
};