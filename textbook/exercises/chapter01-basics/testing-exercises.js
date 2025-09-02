let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "question-id": "chapter-01-Q1",
      "title": "Question 2 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": false,
      "question": "When you compile the following program, what happens? If there is an error, explain what the error is (one sentence max).\n\n```{code-block} cpp \n#include <iostream>\nusing namespace std;\n\nint main() {\n  hello(1);\n  return 0;\n}\nvoid hello(int i) {\n  cout << \"Hello !\" << i << endl;\n  return;\n}\n```\n",
      "answer": " \nThere will be a compilation error because hello() is called before it's declared.\n"
    },
    {
      "question-id": "chapter-01-Q2",
      "title": "Question 4 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "tracing",
      "multipart": false,
      "question": "Consider the following program. Write down the output\n\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\n\nvoid increment(int& a) {\n  a = a + 1;\n}\nvoid decrement(int a) {\n  a = a - 1;\n}\nvoid doubling(int* a) {\n  *a = (*a) * 2;\n}\n\nint main() {\n  int a = 3;\n  increment(a);\n  cout << a << endl;\n  decrement(a);\n  cout << a << endl;\n  doubling(&a);\n  cout << a << endl;\n  return 0;\n}\n```\n",
      "answer": "4\n4\n8\n"
    },
    {
      "question-id": "chapter-01-Q3",
      "title": "Question 6 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "type": "function programming",
      "table": false,
      "multipart": true,
      "question": "Compared to C, passing by reference is introduced in C++. Both of the following two functions can be used to swap the value of two integers:\n\n```{code-block} cpp\nvoid swap_by_p(int* a, int* b); // swap version 1\nvoid swap_by_r(int& a, int& b); // swap version 2\n```\n\n(1) Write the implementations for these two functions (no more than 4 lines of code for each function)\n\na. Version 1\n",
      "starter-code": "void swap_by_p(int* a, int* b) {\n  \n  // Your code here\n\n}\n",
      "answer": "void swap_by_p(int* a, int* b) {\n  int temp = *a;\n  *a = *b;\n  *b = temp;\n}\n",
      "main-function": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a, b;\n  while (cin >> a >> b) {\n    cout << \"Before: \" << a << \" \" << b << endl;\n    swap_by_p(&a, &b);\n    cout << \"After: \" << a << \" \" << b << endl;\n  }\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "1 2\n5 5\n-10 20\n100 -100\n"
          ],
          "output": [
            "Before: 1 2\nAfter: 2 1\nBefore: 5 5\nAfter: 5 5\nBefore: -10 20\nAfter: 20 -10\nBefore: 100 -100\nAfter: -100 100\n"
          ]
        },
        {
          "input": [
            "0 0\n0 10\n-1 -1\n999999999 -999999999\n"
          ],
          "output": [
            "Before: 0 0\nAfter: 0 0\nBefore: 0 10\nAfter: 10 0\nBefore: -1 -1\nAfter: -1 -1\nBefore: 999999999 -999999999\nAfter: -999999999 999999999\n"
          ]
        },
        {
          "input": [
            "42 42\n0 -42\n-999999999 -999999999\n2147483647 -2147483648\n7 0\n123456789 987654321\n"
          ],
          "output": [
            "Before: 42 42\nAfter: 42 42\nBefore: 0 -42\nAfter: -42 0\nBefore: -999999999 -999999999\nAfter: -999999999 -999999999\nBefore: 2147483647 -2147483648\nAfter: -2147483648 2147483647\nBefore: 7 0\nAfter: 0 7\nBefore: 123456789 987654321\nAfter: 987654321 123456789\n"
          ]
        },
        {
          "input": [
            "1 -1\n-100 0\n0 100\n500 -500\n-2147483648 -2147483648\n2147483647 2147483647\n"
          ],
          "output": [
            "Before: 1 -1\nAfter: -1 1\nBefore: -100 0\nAfter: 0 -100\nBefore: 0 100\nAfter: 100 0\nBefore: 500 -500\nAfter: -500 500\nBefore: -2147483648 -2147483648\nAfter: -2147483648 -2147483648\nBefore: 2147483647 2147483647\nAfter: 2147483647 2147483647\n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-01-Q4",
      "title": "Question 6 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "type": "function programming",
      "table": false,
      "multipart": true,
      "question": "b. Version 2\n",
      "starter-code": "void swap_by_r(int& a, int& b) {\n\n  // Your code here\n\n}\n",
      "answer": "void swap_by_r(int& a, int& b) {\n  int temp = a;\n  a = b;\n  b = temp;\n}\n",
      "main-function": "#include <iostream>\nusing namespace std;\n\nint main() {\n  int a, b;\n  while (cin >> a >> b) {\n    cout << \"Before: \" << a << \" \" << b << endl;\n    swap_by_r(a, b);\n    cout << \"After: \" << a << \" \" << b << endl;\n  }\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "1 2\n5 5\n-10 20\n100 -100\n"
          ],
          "output": [
            "Before: 1 2\nAfter: 2 1\nBefore: 5 5\nAfter: 5 5\nBefore: -10 20\nAfter: 20 -10\nBefore: 100 -100\nAfter: -100 100\n"
          ]
        },
        {
          "input": [
            "0 0\n0 10\n-1 -1\n999999999 -999999999\n"
          ],
          "output": [
            "Before: 0 0\nAfter: 0 0\nBefore: 0 10\nAfter: 10 0\nBefore: -1 -1\nAfter: -1 -1\nBefore: 999999999 -999999999\nAfter: -999999999 999999999\n"
          ]
        },
        {
          "input": [
            "42 42\n0 -42\n-999999999 -999999999\n2147483647 -2147483648\n7 0\n123456789 987654321\n"
          ],
          "output": [
            "Before: 42 42\nAfter: 42 42\nBefore: 0 -42\nAfter: -42 0\nBefore: -999999999 -999999999\nAfter: -999999999 -999999999\nBefore: 2147483647 -2147483648\nAfter: -2147483648 2147483647\nBefore: 7 0\nAfter: 0 7\nBefore: 123456789 987654321\nAfter: 987654321 123456789\n"
          ]
        },
        {
          "input": [
            "1 -1\n-100 0\n0 100\n500 -500\n-2147483648 -2147483648\n2147483647 2147483647\n"
          ],
          "output": [
            "Before: 1 -1\nAfter: -1 1\nBefore: -100 0\nAfter: 0 -100\nBefore: 0 100\nAfter: 100 0\nBefore: 500 -500\nAfter: -500 500\nBefore: -2147483648 -2147483648\nAfter: -2147483648 -2147483648\nBefore: 2147483647 2147483647\nAfter: 2147483647 2147483647\n"
          ]
        }
      ]
    },
    {
      "question-id": "chapter-01-Q5",
      "title": "Question 6 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(2) If given two int variables `x` and `y`, write a function call that swaps the value of `x` and `y`, using `swap_by_p`.\n",
      "answer": "swap_by_p (&x, &y);\n"
    },
    {
      "question-id": "chapter-01-Q6",
      "title": "Question 6 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(3) If given two int variables `x` and `y`, write a function call that swaps the value of `x` and `y`, using `swap_by_r`. \n",
      "answer": "swap_by_r (x, y);\n"
    },
    {
      "question-id": "chapter-01-Q7",
      "title": "Question 7 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "Ellie writes a program to make a simple database for ECE students who like drinking soy milk from 2T2 to 2T6. She designs two classes: `student` and `ECE`, and puts them into different files below. The main function is in the `main.cpp`.\n\n**ECE.h**\n```{code-block} cpp\n#ifndefine ECE\n#define ECE\n\n#include \"student.h\"\n\nclass ECE{\n  ...\n};\n#endif\n```\n\n**ECE.cpp**\n```{code-block} cpp\n#include \"ECE.h\"\n\nECE::ECE(){\n  ...\n}\n```\n\n**student.h**\n```{code-block} cpp\n#include <string>\n\nclass Student{\n  ...\n};\n```\n\n**student.cpp**\n```{code-block} cpp\n#include \"student.h\"\n\nStudent::Student(){\n  ...     \n}\n```\n\n**main.cpp**\n```{code-block} cpp\n#include \"ECE.h\"\n#include \"student.h\"\nint main(){\n     ...\n}\n```\n\n(1) Ellie tries to compile this program with g++. What's the Unix (i.e., terminal) command that compiles the entire program using one command, which generates an executable called `small_database`?\n\n",
      "answer": "g++ ECE.cpp student.cpp main.cpp -o small_database\n"
    },
    {
      "question-id": "chapter-01-Q8",
      "title": "Question 7 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(2) However, it fails to compile. Can you point out the compile-time error and fix this error for her? \n",
      "answer": "No header guard in student.h\n"
    },
    {
      "question-id": "chapter-01-Q9",
      "title": "Question 7 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(3) With your help, Ellie has fixed the compile-time error. Now, Ellie wants to use separate compilation learned from ECE244 to compile her project. Write down all the Unix commands necessary to separately compile the above files and generate an executable `small_database`.\n",
      "answer": "g++ -c student.cpp -o student.o\n\ng++ -c ECE.cpp -o ECE.o\n\ng++ -c main.cpp -o main.o\n\ng++ student.o ECE.o main.o -o small_database\n"
    },
    {
      "question-id": "chapter-01-Q10",
      "title": "Question 7 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(4) Ellie then changes some code in `ECE.cpp`. Write down the Unix commands necessary to regenerate the executable by compiling the smallest number of files needed. Assume the generated executable is called `small_database`.\n",
      "answer": "g++ -c ECE.cpp -o ECE.o\n\ng++ student.o ECE.o main.o -o small_database\n"
    },
    {
      "question-id": "chapter-01-Q11",
      "title": "Question 2 Fall 2018 Midterm Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "You are given a program that has a main function and 3 classes: First, Second and Third. For each of these classes, you have a definition file and an implementation file. Thus, you have seven\nfiles in total: First.h, First.cpp, Second.h, Second.cpp, Third.h, Third.cpp and main.cpp. All the files exist in the same directory. \n\nThe first few lines of each file are shown below.\nThe rest of the contents of each file is irrelevant to the question and is shown as `...`. You may assume the definition/implementation files are error-free.\n\n**First.h**\n```{code-block} cpp\n#ifndef FIRST_H\n#define FIRST_H\nclass First {\n  ...\n};\n#endif\n```\n\n**First.cpp**\n```{code-block} cpp\n#include “First.h”\nFirst::First() {\n  ...\n}\n```\n\n**Second.h**\n```{code-block} cpp\n#ifndef SECOND_H\n#define SECOND_H\nclass Second {\n  ...\n};\n#endif\n```\n\n**Second.cpp**\n```{code-block} cpp\n#include “First.h”\n#include “Second.h”\nSecond::Second() {\n  ...\n}\n```\n\n**Third.h**\n```{code-block} cpp\n#ifndef THIRD_H\n#define THIRD_H\nclass Third {\n  ...\n};\n#endif\n```\n\n**Third.cpp**\n```{code-block} cpp\n#include “Second.h”\nThird::Third() {\n  ...\n}\n```\n\n**main.cpp**\n```{code-block} cpp\n#include “First.h”\n#include “Second.h”\n#include “Third.h”\nint main() {\n  ...\n}\n```\n\nThe files are to be separately compiled and then linked into a single executable called `main`.\n\n(1) Write down the Unix commands necessary to separately compile the above files and generate the executable.\n",
      "answer": "g++ -c First.cpp -o First.o\n\ng++ -c Second.cpp -o Second.o\n\ng++ -c Third.cpp -o Third.o\n\ng++ -c main.cpp -o main.o\n\ng++ First.o Second.o Third.o main.o -o main\n"
    },
    {
      "question-id": "chapter-01-Q12",
      "title": "Question 2 Fall 2018 Midterm Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(2) You modify the file `Second.cpp`. Write down the Unix commands necessary to regenerate the executable by compiling the smallest number of files possible.\n",
      "answer": "g++ -c Second.cpp -o Second.o\n\ng++ First.o Second.o Third.o main.o -o main\n"
    },
    {
      "question-id": "chapter-01-Q13",
      "title": "Question 2 Fall 2018 Midterm Exam",
      "difficulty": "Easy",
      "type": "explaination",
      "table": false,
      "multipart": true,
      "question": "(3) You modify the file `First.h`. Write down the Unix commands necessary to regenerate the executable by compiling the smallest number of files possible.\n",
      "answer": "g++ -c First.cpp -o First.o\n\ng++ -c Second.cpp -o Second.o\n\ng++ -c main.cpp -o main.o\n\ng++ First.o Second.o Third.o main.o -o main\n"
    }
  ]
};