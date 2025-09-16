let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "question-id": "chapter-02-Q1",
      "title": "Question 7 in Fall 2021 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "tracing",
      "multipart": false,
      "question": "Consider the class definition shown below. Assume that `iostream` and `string` are included, and that the `std namespace` is used. Also assume that the class is correctly implemented.\n\n```{code-block} cpp\nclass Book {\n public:\n  Book() { cout << \"A new book is added.\" << endl; }\n  Book(string s) {\n    cout << \"Book \" << s << \" is added.\" << endl;\n    name = s;\n  }\n  ~Book() { cout << \"Book \" << name << \" is removed.\" << endl; }\n\n private:\n  string name = \"ECE244\";\n};\n\n```\n\nWhat is the output of the following main function?\n\n```{code-block} cpp\nBook* b1;\n\nint main() {\n  Book b2;\n  Book* b3 = new Book(\"Pride and Prejudice\");\n\n  if (true) {\n    b1 = new Book();\n    Book b4(\"Wuthering heights\");\n    delete b3;\n    Book* b5 = new Book[2];\n  }\n\n  delete b1;\n  return 0;\n}\n\n```\n",
      "answer": "A new book is added.\nBook Pride and Prejudice is added.\nA new book is added.\nBook Wuthering heights is added.\nBook Pride and Prejudice is removed.\nA new book is added.\nA new book is added.\nBook Wuthering heights is removed.\nBook ECE244 is removed.\nBook ECE244 is removed.\n",
      "explanation": "<pre>\nA new book is added. \n</pre>\ndeclaring `b2` calls the default constructor\n<pre>\nBook Pride and Prejudice is added.\n</pre>\n`new` calls the second constructor\n<pre>\nA new book is added.\n</pre>\n`new` calls default constructor for `b1`\n<pre>\nBook Wuthering heights is added.\n</pre>\n`b4` declaration calls the second constructor\n<pre>\nBook Pride and Prejudice is removed.\n</pre>\n`delete b3` would call the destructor for what `b3` is pointing at.\n<pre>\nA new book is added.\nA new book is added.\n</pre>\n`new Book[2]` calls the default constructor twice.\n<pre>\nBook Wuthering heights is removed.\n</pre>\n`b4` goes out of scope and destructor is called.\n<pre>\nBook ECE244 is removed.\n</pre>\n`delete b1` would call the default destructor. \n<pre>\nBook ECE244 is removed.\n</pre>\nDefault destructor for `b2` is called as we return from `main`, and `b2` goes out of scope.\n\nWe don't have `delete b5`, and hence the destructor is not called for the two-element array. \n"
    },
    {
      "question-id": "chapter-02-Q2",
      "title": "Question 1 in Fall 2022 Midterm Exam ",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": false,
      "question": "Consider the following C++ program. There are three statements in the main function: A, B, and C. Which of these three statements will trigger compile-time errors?\n\n```{code-block} cpp\nclass ECE244 {\n private:\n  int num_student;\n  int num_TA;\n  int get_num_instructor();\n\n public:\n  int num_instructor;\n  int get_num_student();\n  int get_num_TA();\n};\n\nint main() {\n  ECE244 year2022;\n  int num_student = year2022.num_student;              // Statement A\n  int num_TA = year2022.get_num_TA();                  // Statement B\n  int num_instructor = year2022.get_num_instructor();  // Statement C\n  return 0;\n}\n```\n",
      "answer": " \nA, C\n\nIn statement A, `num_student` is a private data member and cannot be accessed outside the class. \nIn statement C, `get_num_instructor()` is a private function member, and cannot be accessed outside the class. \n\n"
    },
    {
      "question-id": "chapter-02-Q3",
      "title": "Question 7 in Fall 2021 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "tracing",
      "multipart": false,
      "question": "Consider the following definition/implementation of a class called `Shape` that appears in the file: `Shape.h`.\n\n**Shape.h**\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\nclass Shape {\n private:\n  int ID;\n\n public:\n  Shape() {\n    ID = 0;\n    cout << \"Constructor 1 \" << ID << endl;\n  }\n  Shape(int id) {\n    ID = id;\n    cout << \"Constructor 2 \" << ID << endl;\n  }\n\n  ~Shape() { cout << \"Destructor \" << endl; }\n\n  int getID() const { return ID; }\n  void setID(int id) { ID = id; }\n};\n```\n\nThe following is a main program that uses the above class.\n\n**main.cpp**\n```{code-block} cpp\n#include <iostream>\n#include \"Shape.h\"\nusing namespace std;\n\nint getShapeID(Shape& s) {\n  return s.getID();\n}\nint main() {\n  Shape circle(5);\n  Shape line2[2];\n\n  cout << circle.getID() << endl;\n  cout << getShapeID(line2[1]) << endl;\n  return 0;\n}\n```\n\nWhat is the output of the program? \n",
      "answer": " \nConstructor 2 5\nConstructor 1 0\nConstructor 1 0\n5\n0\nDestructor \nDestructor \nDestructor \n"
    }
  ]
};