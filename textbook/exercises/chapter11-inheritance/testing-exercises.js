let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "title": "Question 11 in Fall 2018 Final Exam",
      "difficulty": "Easy",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "question": "\nConsider the following class definitions and implementations, as well as a `main` function that uses them. All the code appears in one file and it compiles with no errors. \n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nclass firstOne {\n private:\n  int x;\n  char* first;\n\n public:\n  firstOne();\n  firstOne(const char* s);\n};\n\nclass secondOne : public firstOne {\n private:\n  int y;\n  char* second;\n\n public:\n  secondOne(const char* s);\n  secondOne(int v);\n};\n\nfirstOne::firstOne() {\n  x = 0;\n  first = new char[1];\n  *first = '\\0';\n  cout << \"Constructor 1 of firstOne done\" << endl;\n}\n\nfirstOne::firstOne(const char* s) {\n  x = 0;\n  int size = strlen(s);\n  first = new char[size + 1];\n  strcpy(first, s);\n  cout << \"Constructor 2 of firstOne done\" << endl;\n}\n\nsecondOne::secondOne(const char* s) {\n  y = 0;\n  int size = strlen(s);\n  second = new char[size + 1];\n  strcpy(second, s);\n  cout << \"Constructor 1 of secondOne done\" << endl;\n}\n\nsecondOne::secondOne(int v) : firstOne(\"X\") {\n  y = v;\n  second = new char[1];\n  *second = '\\0';\n  cout << \"Constructor 2 of secondOne done\" << endl;\n}\n\nint main() {\n  firstOne a;\n  firstOne b(\"G\");\n  secondOne c(\"N\");\n  secondOne d(8);\n  return 0;\n}\n```\n\nIndicate what each statement in the above `main` function prints, using the table below. If no output is produced, write \"NONE\".\n\n(1) Statement: `firstOne a;`\n\n",
      "answer": "Constructor 1 of firstOne done"
    },
    {
      "title": "Question 11 in Fall 2018 Final Exam",
      "difficulty": "Easy",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "question": "(2) Statement: `firstOne b(\"G\");`\n",
      "answer": "Constructor 2 of firstOne done "
    },
    {
      "title": "Question 11 in Fall 2018 Final Exam",
      "difficulty": "Easy",
      "type": "tracing",
      "table": false,
      "multipart": false,
      "question": "(3) Statement: `secondOne c ( \"N\");`\n",
      "answer": "Constructor 1 of firstOne done<br>Constructor 1 of secondOne done\n"
    },
    {
      "title": "Question 11 in Fall 2018 Final Exam",
      "difficulty": "Easy",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "question": "(4) Statement: `secondOne d(8);`\n",
      "answer": "Constructor 2 of firstOne done<br>Constructor 2 of secondOne done\n"
    },
    {
      "title": "Question 14 in Fall 2019 Final Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": true,
      "multipart": true,
      "question": "Consider the following class definitions and implementations of classes, `Shape` and `Circle`. They are followed by a main function that utilizes these classes. \n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\nclass Shape {\n protected:\n  int shapeID;\n\n public:\n  int getID() { return shapeID; }\n  void setID(int k) { shapeID = k; }\n  virtual void draw() = 0;\n  virtual void print() = 0;\n};\nclass Circle : public Shape {\n protected:\n  float radius;\n\n public:\n  float getRadius() { return radius; }\n  void setRadius(float r) { radius = r; }\n  virtual void draw() {\n    // code to draw\n  }\n};\nclass Rectangle : public Shape {\n protected:\n  float length;\n  float width;\n\n public:\n  float getLength() { return length; }\n  void setLength(float x) { length = x; }\n  float getWidth() { return width; }\n  void setWidth(float x) { width = x; }\n  virtual void draw() {\n    // Code to draw\n  }\n  virtual void print() {\n    // Code to print\n  }\n};\n\nint main() {\n  // Statements in the main function return 0;\n}\n```\n\nIndicate which of the following statements that appear in the main function compile with no errors or produce a compile time error. \n\nIndicate also the reason in the table below. \n",
      "headers": [
        "Code Snippet",
        "Compiles?",
        "Reason"
      ],
      "rows": [
        [
          "Shape s;",
          "",
          ""
        ],
        [
          "Circle c;",
          "",
          ""
        ],
        [
          "Rectangle r;` <br> `r.setID(9)",
          "",
          ""
        ],
        [
          "Rectangle d;` <br> `d.length = 3.0;",
          "",
          ""
        ]
      ],
      "answer": [
        [
          "Shape s;",
          "No",
          "An object of an abstract class cannot be created"
        ],
        [
          "Circle c;",
          "No",
          "Circle is an abstract class too as it doesn't implement print"
        ],
        [
          "Rectangle r;` <br> `r.setID(9)",
          "Yes",
          "Compiles!"
        ],
        [
          "Rectangle d;` <br> `d.length = 3.0;",
          "No",
          "Rectangle::length is a protected data member that cannot be accessed outside"
        ]
      ]
    },
    {
      "title": "Question 12 in Fall 2018 Final Exam",
      "difficulty": "Intermediate",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "\nConsider the following base and derived classes. They compile with no errors.\n\n```{code-block} cpp\n#include <iostream>\n#include <string>\nusing namespace std;\n\nclass Dessert {\n protected:\n  int price = 0;\n\n public:\n  Dessert() { cout << \"we have dessert\n\"; }\n  ~Dessert() { cout << \"no more dessert\n\"; }\n  void print() { cout << \"dessert unknown\n\"; }\n  virtual int cost() = 0;\n};\n\nclass Candy : public Dessert {\n protected:\n  int weight_in_grams;\n\n public:\n  Candy(int grams, int per_gram) {\n    weight_in_grams = grams;\n    price = per_gram;\n    cout << \"we have candy\n\";\n  }\n  ~Candy() { cout << \"no more candy\n\"; }\n  void print() {\n    cout << \"Candy: \" << weight_in_grams << \" grams, at \" << price\n         << \" cents per gram\n\";\n  }\n  virtual int cost() { return weight_in_grams * price; }\n};\n\nclass Cookies : public Dessert {\n protected:\n  int num_dozens;\n\n public:\n  Cookies(int dozens, int per_dozen) {\n    num_dozens = dozens;\n    price = per_dozen;\n    cout << \"We have cookies\n\";\n  }\n  ~Cookies() { cout << \"no more cookies\n\"; }\n  void print() {\n    cout << \"Cookies: \" << num_dozens << \"dozens, at \" << price\n         << \" cents per dozen\n\";\n  }\n  virtual int cost() { return num_dozens * price; }\n};\n\nclass IceCream : public Dessert {\n protected:\n  string flavor = \"vanilla\";\n  int scoops;\n\n public:\n  IceCream(string fly, int scps, int per_scoop) {\n    flavor = fly;\n    scoops = scps;\n    price = per_scoop;\n    cout << \"we have \" << flavor << \" Ice Cream\n\";\n  }\n  ~IceCream() { cout << \"no more ice cream\n\"; }\n  void print() {\n    cout << \"Ice Cream: \" << scoops << \" scoops, at \" << price\n         << \" cents per scoop\n \";\n  }\n  virtual int cost() { return scoops * price; }\n};\n\nclass Sundae : public IceCream {\n protected:\n  int topings_cost;\n\n public:\n  Sundae(string flv, int scps, int per_scoop, int tps)\n      : IceCream(flv, scps, per_scoop) {\n    topings_cost = tps;\n    cout << \" with topings\n\";\n  }\n  ~Sundae() { cout << \"no more sundae\n\"; }\n  void print() {\n    IceCream::print();\n    cout << \" topings cost is: \" << topings_cost << endl;\n  }\n  virtual int cost() { return scoops * price + topings_cost; }\n};\n```\n\nConsider each of the following `main` functions that use the above classes. You may assume that each `main` function includes the code of the classes above, including the `#include`'s and the `using namespace std;`\n\nFor each `main` function, indicate if the function compiles with no errors or not (ignore warnings). If the function compiles with no errors, then indicate the output produced by the function?\n\n(1) Does the program compile with no errors? If it does compile with no errors, what is the output produced by the execution?\n```{code-block} cpp\nint main() {\n  Dessert a;\n  Cookies b(2, 300);\n  IceCream c(\"Vanilla\", 2, 350);\n  return 0;\n}\n```\n",
      "answer": "No, it doesn't compile.\n\nWe cannot create objects of abstract classes. \n"
    },
    {
      "title": "Question 12 in Fall 2018 Final Exam",
      "difficulty": "Intermediate",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "\n(2) Does the program compile with no errors? If it does compile with no errors, what is the output produced by the execution?\n\n```{code-block} cpp\nint main() {\n  Dessert* pc;\n  IceCream* pi;\n  pc = new Cookies(2, 250);\n  pi = new IceCream(\"mint\", 1, 250);\n  delete pc;\n  delete pi;\n  return 0;\n}\n```\n",
      "answer": "Yes, the program compiles.\n\n**Output:** <pre>\nwe have dessert\nWe have cookies\nwe have dessert\nwe have mint Ice Cream\nno more dessert\nno more ice cream\nno more dessert\n</pre>\n\n\n`delete pc` calls the destructor of `Desert` only as `pc` is a pointer of type `Desert`. We cannot access the destructor of `Cookies` through `pc`.\n\n`delete pi` calls the destructor of `IceCream` first, then the destructor of `Desert`. `pi` is of type `IceCream`, and through it we can access both destructors.\n\n"
    },
    {
      "title": "Question 12 in Fall 2018 Final Exam",
      "difficulty": "Intermediate",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(3) Does the program compile with no errors? If it does compile with no errors, what is the output produced by the execution?\n\n```{code-block} cpp\nint main() {\n  Sundae* ps;\n  IceCream* pi;\n  pi = new IceCream(\"mint\", 1, 250);\n  ps = pi;\n  delete ps;\n}\n```\n",
      "answer": "No, the program doesn't compile.\n\n`ps = pi;` is not valid. `Sundae` is derived from `IceCream`. `ps` cannot point to an object `IceCream`, as it cannot access its members that don't exist. \n"
    },
    {
      "title": "Question 12 in Fall 2018 Final Exam",
      "difficulty": "Intermediate",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(4) Does the program compile with no errors? If it does compile with no errors, what is the output produced by the execution?\n\n```{code-block} cpp\nint main() {\n  Dessert* ps = new IceCream(\"vanilla\", 2, 350);\n  cout << ps->cost() << endl;\n  return 0;\n}\n```\n",
      "answer": "Yes, the program compiles.\n\n**Output** <pre>\nwe have dessert\nwe have vanilla Ice Cream\n700\n</pre> \n\n`ps->cost()` will call the `cost()` of `IceCream` as `cost()` is a virtual function, hence `ps` will call the function according to the type of the object, not the pointer.\n"
    },
    {
      "title": "Question 15 in Fall 2019 Final Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": false,
      "question": "\nConsider the following class definitions.\n\n```{code-block} cpp\nclass BaseC {\n private:\n  int a;\n  void help();\n\n protected:\n  int b;\n\n public:\n  int c;\n  int d;\n  void print();\n};\n\nclass DerivedC : public BaseC {\n private:\n  int x;\n  void nohelp();\n\n public:\n  int w;\n  int z;\n  void noprint();\n};\n```\n\nThe following declaration appears in the `nohelp` member function of the class `DerivedC`. \n\n```{code-block} cpp\nDerivedC derived;\n```\n\nIndicate whether the following statements is correct code (i.e., compiles with no errors), or incorrect code (i.e., generates a compile time\nerror). Assume the statements in the rows of the table also appear in the `nohelp` member function of the class `DerivedC`.\n\n",
      "headers": [
        "Statement",
        "Correct/incorrect?",
        "Reason"
      ],
      "rows": [
        [
          "derived.a = 8;",
          "",
          ""
        ],
        [
          "derived.b = 10;",
          "",
          ""
        ],
        [
          "derived.x = 12;",
          "",
          ""
        ],
        [
          "derived.w = 4;",
          "",
          ""
        ]
      ],
      "answer": [
        [
          "derived.a = 8;",
          "Incorrect",
          "`a` is a private member of the `Base` class"
        ],
        [
          "derived.b = 10;",
          "Correct",
          "`b` is protected in `Base` and can be access in `DerivedC`"
        ],
        [
          "derived.x = 12;",
          "Correct",
          "`x` is private member of the `DerivedC` class and can be accessed in `DerivedC`"
        ],
        [
          "derived.w = 4;",
          "Correct",
          "`w` is a public member of `DerivedC`"
        ]
      ]
    },
    {
      "title": "Question 16 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "question": "Consider the following base and derived classes. They compile with no errors.\n\n```{code-block} cpp\n#include <iostream>\n#include <string>\n\nusing namespace std;\n\nclass CircuitElement {\n protected:\n  int code;\n\n public:\n  CircuitElement() { cout << \"circuit element\n\"; }\n  CircuitElement(int c) {\n    code = c;\n    cout << \"circuit element with code\n\";\n  }\n  ~CircuitElement() { cout << \"no circuit element\n\"; }\n  float getPower() { return 0.0; }\n  virtual void print() { cout << \"error\n\"; }\n};\n\nclass Resistor : public CircuitElement {\n protected:\n  int resistance;\n\n public:\n  Resistor(int r) {\n    code = 1;\n    resistance = r;\n    cout << \"resistor\n\";\n  }\n  ~Resistor() { cout << \"no resistor\n\"; }\n  float getPower() { return 0.0; }\n  void print() { cout << \"Resistor: \" << resistance << endl; }\n};\n\nclass Capacitor : public CircuitElement {\n protected:\n  int capacitance;\n\n public:\n  Capacitor(int c) : CircuitElement(2) {\n    capacitance = c;\n    cout << \"capacitor\n\";\n  }\n  float getPower() { return 0.0; }\n  ~Capacitor() { cout << \"no capacitor\n\"; }\n  void print() { cout << \"Capacitor: \" << capacitance << endl; }\n};\n\nclass PowerResistor : public Resistor {\n protected:\n  float power;\n\n public:\n  PowerResistor(int r, float p) : Resistor(r) {\n    power = p;\n    cout << \"power resistor\n\";\n  }\n  ~PowerResistor() { cout << \"no power resistor\n\"; }\n  float getPower() { return power; }\n  virtual float powerResistance() { return (power * resistance); }\n  void print() {\n    Resistor::print();\n    cout << \"Power resistor: \" << power << endl;\n  }\n};\n\nclass PowerCapacitor : public Capacitor {\n protected:\n  float power;\n\n public:\n  PowerCapacitor(int c, float p) : Capacitor(c) {\n    power = p;\n    cout << \"power capacitor\n\";\n  }\n  ~PowerCapacitor() { cout << \"no power capacitor\n\"; }\n  float getPower() { return power; }\n  virtual float powerCapacitance() { return (power * capacitance); }\n  void print() {\n    Capacitor::print();\n    cout << \"Power capacitor: \" << power << endl;\n  }\n};\n```\n\nConsider each of the following main functions that use the above classes. You may assume that each main function includes the code of the classes above, including the `#include`'s and the `using namespace std;`.\n\nFor each main function, if the function compiles with no errors (ignore warnings), then write the output produced by the function. If the function compiles with errors, then write: \"compile errors\". \n\n(1)\n```{code-block} cpp\n  int main() {\n    Capacitor c(150);\n    PowerResistor p(180, 350);\n    return 0;\n  }\n```\n",
      "answer": "circuit element with code\ncapacitor\ncircuit element\nresistor\npower resistor\nno power resistor\nno resistor\nno circuit element\nno capacitor\nno circuit element\n"
    },
    {
      "title": "Question 16 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "question": "(2)\n```{code-block} cpp\nint main() {\n  CircuitElement* pr;\n  pr = new PowerResistor(200, 250);\n  delete pr;\n  return 0;\n}\n```\n",
      "answer": "circuit element\nresistor\npower resistor\nno circuit element\n"
    },
    {
      "title": "Question 16 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(3)\n```{code-block} cpp\nint main() {\n  Capacitor* c;\n  c = new CircuitElement(5);\n  delete c;\n  return 0;\n}\n```\n",
      "answer": "compile errors\n\nline `c = new CircuitElement(5);`, you cannot make a pointer to a derived object `c` point to a base object `CircuitElement`.\n"
    },
    {
      "title": "Question 16 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(4)\n```{code-block} cpp\nint main() {\n  PowerResistor* pr;\n  Resistor* r;\n  r = new Resistor(450);\n  pr = r;\n  delete pr;\n  return 0;\n}\n```\n",
      "answer": "compile errors\n\nline `pr = r;`, as `pr` is a pointer of derived object that cannot point to a base object.\n"
    },
    {
      "title": "Question 16 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "question": "(5)\n```{code-block} cpp\nint main() {\n  PowerResistor r(250, 1000);\n  CircuitElement e;\n  e = r;\n  return 0;\n}\n```\n",
      "answer": "circuit element\nresistor\npower resistor\ncircuit element\nno circuit element\nno power resistor\nno resistor\nno circuit element\n"
    },
    {
      "title": "Question 16 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "question": "(6)\n```{code-block} cpp\nint main() {\n  CircuitElement* e = new PowerCapacitor(500, 1000);\n  e->print();\n  return 0;\n} \n```\n",
      "answer": "circuit element with code\ncapacitor\npower capacitor\nCapacitor: 500\nPower capacitor: 1000\n"
    },
    {
      "title": "Question 16 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "question": "(7)\n```{code-block} cpp\nint main() {\n  Capacitor* c = new PowerCapacitor(300, 100);\n  cout << c->getPower() << endl;\n  return 0;\n}\n```\n",
      "answer": "circuit element with code\ncapacitor\npower capacitor\n0\n"
    },
    {
      "title": "Question 16 in Fall 2019 Final Exam",
      "difficulty": "Intermediate",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(8)\n```{code-block} cpp\nint main() {\n  PowerResistor pr(20, 100);\n  Resistor* r = &pr;\n  cout << r->powerResistance() << endl;\n  return 0;\n  }\n```\n",
      "answer": "compile errors\n\nThe error exists at `r->powerResistance()`. `powerResistance()` is not a virtual function, hence when `r->powerResistance()` is executed, `powerResistance()` of `Resistor` is called. There is no member named `powerResistance` in `Resistor` class. \n"
    },
    {
      "title": "Question 5 in Fall 2022 Final Exam",
      "difficulty": "Intermediate",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "\nThe University of Toronto wants to manage students from different departments using a C++ program. Students from all departments will share the following base class:\n\n```{code-block} cpp\nclass student {\n protected:\n  string name;\n  int id;\n\n public:\n  student(const string& name_, int id_) : name(name_), id(id_) {\n    cout << \"student\" << endl;\n  };\n  virtual void print_server() = 0;\n  virtual void print_department() = 0;\n  string get_name() { return name; }\n  int get_id() { return id; }\n};\n```\n\nDerived from student class, the programmers then write another class for engineering students. All engineering students have access to the ECF server:\n\n```{code-block} cpp\nclass eng_student : public student {\n protected:\n  int ecf_id;\n\n public:\n  eng_student(const string& name_, int id_, int ecf_id_)\n      : student(name_, id_), ecf_id(ecf_id_) {\n    cout << \"eng student\" << endl;\n  };\n  virtual void print_server() { cout << name << \" logs into ecf.\" << endl; }\n  int get_ecf_id() { return ecf_id; }\n};\n```\n\nDerived from `eng_student`, programmers then write two classes for ECE students and MIE\nstudents. Unlike MIE students, ECE students have their designated server called UG server:\n\n```{code-block} cpp\nclass mie_student : public eng_student {\n public:\n  mie_student(const string& name_, int id_, int ecf_id_)\n      : eng_student(name_, id_, ecf_id_) {\n    cout << \"mie student\" << endl;\n  };\n  virtual void print_department() {\n    cout << name << \" is a mie student.\" << endl;\n  }\n};\n\nclass ece_student : public eng_student {\n private:\n  int ug_id;\n\n public:\n  ece_student(const string& name_, int id_, int ecf_id_, int ug_id_)\n      : eng_student(name_, id_, ecf_id_), ug_id(ug_id_) {\n    cout << \"ece student\" << endl;\n  };\n  virtual void print_server() { cout << name << \" logs into ug.\" << endl; }\n  virtual void print_department() {\n    cout << name << \" is an ece student.\" << endl;\n  }\n  int get_ug_id() { return ug_id; }\n};\n```\n\nIn addition, programmers write a new derived class for Computer Science (CS) students. Unlike engineering students, they use Markus servers instead of ECF servers:\n\n```{code-block} cpp\nclass cs_student : public student {\n protected:\n  int markus_id;\n\n public:\n  cs_student(const string& name_, int id_, int markus_id_)\n      : student(name_, id_), markus_id(markus_id_) {\n    cout << \"cs student\" << endl;\n  }\n  virtual void print_server() { cout << name << \" logs into markus.\" << endl; }\n  virtual void print_department() {\n    cout << name << \" is an cs student.\" << endl;\n  }\n  int get_markus_id() { return markus_id; }\n};\n```\n\nRead the implementations of these five classes carefully and answer the following questions.\n\n(1) You write the following piece of code to declare four students. However, you get a compile-time error. \nWhy doesn't it compile? (Note: you don’t need to fix anything in the class declarations and implementations given above.)\n\n```{code-block} cpp\ncs_student A(\"A\", 0, 10);\nece_student B(\"B\", 1, 11, 0);\neng_student H(\"H\", 3, 13);\n```\n````{admonition} Answer\n:class: dropdown\n\n",
      "answer": "`student` class is an abstract function. `eng_student` inherits from `student` class; however, it is an \nabstract class too as it did not implement `print_department` pure virtual function that was in `student` class. \n"
    },
    {
      "title": "Question 5 in Fall 2022 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "question": "(2) Now, an array named `student_list` is declared and initialized as follows. Write the output generated by `std::cout`. \n```{code-block} cpp\nstudent* student_list[4] = {\n  new cs_student(\"Leo\", 0, 10), \n  new ece_student(\"Bill\", 1, 11, 0),\n  new mie_student(\"Ellie\", 2, 12), \n  new ece_student(\"Haley\", 3, 13, 1)\n  };\n```\n",
      "answer": "student\ncs student\nstudent\neng student\nece student\nstudent\neng student\nmie student\nstudent\neng student\nece student\n"
    },
    {
      "title": "Question 5 in Fall 2022 Final Exam",
      "difficulty": "Intermediate",
      "type": "tracing",
      "table": false,
      "multipart": true,
      "question": "(3) After the `student_list` initialized in question 2, the following `for` loops will be executed. What will be the output generated by these two loops? \n```{code-block} cpp\ncout << \"Department: \" << endl;\nfor (int i = 0; i < 4; ++i) {\n  student_list[i]->print_department();\n}\ncout << \"Server: \" << endl;\nfor (int i = 0; i < 4; ++i) {\n  student_list[i]->print_server();\n}\n```\n",
      "answer": "Department: \nLeo is an cs student.\nBill is an ece student.\nEllie is a mie student.\nHaley is an ece student.\nServer: \nLeo logs into markus.\nBill logs into ug.\nEllie logs into ecf.\nHaley logs into ug.\n"
    }
  ]
};