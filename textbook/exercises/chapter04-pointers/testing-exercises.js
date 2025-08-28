let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "title": "Question 9 in Fall 2022 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "tracing",
      "multipart": true,
      "question": "Consider the class definition shown below. Assume that `iostream` and `string` are included, and that \nthe `std namespace` is used. Also assume that the class is correctly implemented. What is the output of \nthe following main function?\n",
      "question-code": "class Book {\n public:\n  Book() { cout << \"A new book is added.\" << endl; }\n  Book(string s) {\n    cout << \"Book \" << s << \" is added.\" << endl;\n    name = s;\n  }\n  ~Book() { cout << \"Book \" << name << \" is removed.\" << endl; }\n\n private:\n  string name = \"ECE244\";\n};\n\nBook* b1;\n\nint main() {\n  Book b2;\n  Book* b3 = new Book(\"Pride and Prejudice\");\n\n  if (true) {\n    b1 = new Book();\n    Book b4(\"Wuthering heights\");\n    delete b3;\n    Book* b5 = new Book[2];\n  }\n\n  delete b1;\n  return 0;\n}\n",
      "answer": " \nA new book is added.\nBook Pride and Prejudice is added.\nA new book is added.\nBook Wuthering heights is added.\nBook Pride and Prejudice is removed.\nA new book is added.\nA new book is added.\nBook Wuthering heights is removed.\nBook ECE244 is removed.\nBook ECE244 is removed.\n"
    },
    {
      "title": "Question 1 in Fall 2022 Midterm Exam ",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": false,
      "question": "Consider the following C++ program. There are three statements in the main function: A, B, and C. Which of these three statements will trigger compile-time errors?\n",
      "question-code": "class ECE244 {\n private:\n  int num_student;\n  int num_TA;\n  int get_num_instructor();\n\n public:\n  int num_instructor;\n  int get_num_student();\n  int get_num_TA();\n};\n\nint main() {\n  ECE244 year2022;\n  int num_student = year2022.num_student;              // Statement A\n  int num_TA = year2022.get_num_TA();                  // Statement B\n  int num_instructor = year2022.get_num_instructor();  // Statement C\n  return 0;\n}\n",
      "answer": " \nA, C\n\nIn statement A, `num_student` is a private data member and cannot be accessed outside the class. \nIn statement C, `get_num_instructor()` is a private function member, and cannot be accessed outside the class. \n\n"
    },
    {
      "title": "Question 7 in Fall 2021 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "tracing",
      "multipart": false,
      "question": "Consider the following definition/implementation of a class called `Shape` that appears in the file: `Shape.h`.\nWhat is the output of the following main function?\n",
      "question-code": "// Shape.h\n#include <iostream>\nusing namespace std;\nclass Shape {\n private:\n  int ID;\n\n public:\n  Shape() {\n    ID = 0;\n    cout << \"Constructor 1 \" << ID << endl;\n  }\n  Shape(int id) {\n    ID = id;\n    cout << \"Constructor 2 \" << ID << endl;\n  }\n\n  ~Shape() { cout << \"Destructor \" << endl; }\n\n  int getID() const { return ID; }\n  void setID(int id) { ID = id; }\n};\n\n// main.cpp\n\n#include <iostream>\n#include \"Shape.h\"\nusing namespace std;\n\nint getShapeID(Shape& s) {\n  return s.getID();\n}\nint main() {\n  Shape circle(5);\n  Shape line2[2];\n\n  cout << circle.getID() << endl;\n  cout << getShapeID(line2[1]) << endl;\n  return 0;\n}\n",
      "answer": " \nConstructor 2 5\nConstructor 1 0\nConstructor 1 0\n5\n0\nDestructor \nDestructor \nDestructor \n"
    }
  ]
};