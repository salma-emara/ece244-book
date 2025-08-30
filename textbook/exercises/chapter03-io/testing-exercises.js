let parsedObject; 
  parsedObject = {
  "exercises": [
    {
      "title": "Question 5 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "tracing",
      "multipart": true,
      "question": "Consider the following program.\n\n```{code-block} cpp\n#include <fstream>\n#include <iostream>\nusing namespace std;\n\nint main() {\n  int a;\n  ifstream inFile;\n  inFile.open(\"input.txt\");\n  if (inFile.fail()) {\n    return 1;\n  }\n  while (1) {\n    inFile >> a;\n    if (inFile.fail()) {\n      cout << \"failed..\" << endl;\n      inFile.clear();\n      inFile.ignore(100, '\\n');\n      continue;\n    }\n    cout << \"a = \" << a << endl;\n    break;\n  }\n  return 0;\n}\n```\n\nGiven the following contents of `\"input.txt\"`, write the output.\n\n(1) `\"input.txt\"`\n<pre>\n  1\n  2\n  3\n</pre>\n",
      "answer": "a = 1\n"
    },
    {
      "title": "Question 5 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "tracing",
      "multipart": true,
      "question": "(2) `\"input.txt\"`\n<pre>\n  a32\n  b86\n  3\n</pre>\n",
      "answer": "failed..\n\nfailed..\n\na = 3\n"
    },
    {
      "title": "Question 5 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "question": "(3) `\"input.txt\"`\n<pre>\na32\nb86 3\n</pre>\n",
      "answer": "failed..\n\nfailed..\n\nfailed..\n\nAnd it keeps repeating\n"
    },
    {
      "title": "Question 5 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "tracing",
      "multipart": true,
      "question": "Now you remove the `infile.clear()` from the code, so the program becomes:\n\n```{code-block} cpp\n#include <fstream>\n#include <iostream>\nusing namespace std;\nint main() {\n  int a;\n  ifstream inFile;\n  inFile.open(\"input.txt\");\n  if (inFile.fail()) {\n    return 1;\n  }\n  while (1) {\n    inFile >> a;\n    if (inFile.fail()) {\n      cout << \"failed..\" << endl;\n      // inFile.clear(); COMMENTED OUT\n      inFile.ignore(100, '\\n');\n      continue;\n    }\n    cout << \"a = \" << a << endl;\n    break;\n  }\n  return 0;\n}\n```\n\n(1) `\"input.txt\"`\n<pre>\n1\n2\n3\n</pre>\n",
      "answer": "a = 1\n"
    },
    {
      "title": "Question 5 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "question": "(2) `\"input.txt\"`\n<pre>\na32\nb86\n3\n</pre>\n",
      "answer": "failed..\n\nfailed..\n\nfailed..\n\nAnd it keeps repeating\n"
    },
    {
      "title": "Question 5 in Fall 2022 Midterm Exam",
      "difficulty": "Easy",
      "table": false,
      "type": "explaination",
      "multipart": true,
      "question": "(3) `\"input.txt\"`\n<pre>\na32\nb86 3\n</pre>\n",
      "answer": "failed..\n\nfailed..\n\nfailed..\n\nAnd it keeps repeating\n"
    },
    {
      "title": "Question 2 in Fall 2021 Final Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": false,
      "question": "Write a C++ function `void readInts()` that repeatedly reads integers from the standard input (using `cin`) and then immediately outputs the input integer (using `cout`), one integer per line. When a `'.'` character is encountered, the function prints the message `Done` on a line by itself and returns. If the user enters any characters other than integer digits or the `'.'`, the function prints the message `Error` on a line by itself and returns. You may assume the user will never enter `eof`.\n\nThus, for example, if the user enters `51 16 700 .`, the function prints:\n<pre>\n51\n16\n700\nDone\n</pre>\n\nHowever, if the user enters `101 21 13 abc 444`, the function prints:\n<pre>\n101\n21\n13\nError\n</pre>\n",
      "starter-code": "void readInts() {\n\n  // Your code here\n\n}\n",
      "answer": "void readInts() {\n  int num = 0;\n  string dot;\n  cin >> num;\n  while (!cin.fail()) {  // received a number\n    cout << num << endl;\n    cin >> num;\n  }\n  // then read a non-integer number\n  string c;\n  // need to clear fail flag before doing cin\n  cin.clear();\n  // Read in a string\n  cin >> c;\n  if (c == \".\") {\n    cout << \"Done\" << endl;\n  } else {\n    cout << \"Error\" << endl;\n  }\n} \n",
      "main-function": "#include <iostream>\n#include <string>\nusing namespace std;\n\nint main() {\n  readInts();\n  return 0;\n}\n\n",
      "testcases": [
        {
          "input": [
            "51 16 700 .\n"
          ],
          "output": [
            "51\n16\n700\nDone"
          ]
        },
        {
          "input": [
            "101 21 13 abc 444\n"
          ],
          "output": [
            "101\n21\n13\nError\n"
          ]
        },
        {
          "input": [
            ".\n"
          ],
          "output": [
            "Done"
          ]
        }
      ]
    },
    {
      "title": "Question 3 in Fall 2018 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "programming",
      "multipart": false,
      "question": "\nConsider the following program that uses `stringstreams` to read a command. The command has the following format:\n<pre>\ncount intArg\n</pre>\n\nThe command word is `count` and `intArg` is an integer argument. The command must have only one integer argument, e.g `count 3`.\n\nThe function `handle_count` performs the reading of the integer value. If the integer is valid, it returns `true` and \nupdates the value of `intArg`. Otherwise, it returns `false`.\n\n(1) Determine the number of arguments and the type of each argument and indicate them in the code above in the \nprototype of the function, `handle_count`. Further, indicate what parameters are passed to the function when it \nis invoked. \n   \nYou may not modify main by adding or removing line, other than by indicating the formal arguments \nin the function prototype and actual arguments of the function invocation. \n\n(2) Write the header and body of the `handle_count` function below so it performs as indicated above. \n",
      "starter-code": "#include <iostream>\nusing namespace std;\n#include <sstream>\n#include <string>\n\n// function prototype\nbool handle_count( < TO DO: fill in the blank > ){\n\n  // TO DO: write the body of handle_count\n\n}\n\nint main() {\n  string line;\n  string command;\n  int intArg;\n  getline(cin, line);\n  stringstream lineStream(line);\n  lineStream >> command;\n  if (command == \"count\") {\n    if (handle_count( <TO DO: ill in the blank> )) {\n      cout << \"Integer argument is \" << intArg << endl;\n      return (0);\n    } else {\n      cout << \"Invalid arguments\" << endl;\n      return (-1);\n    }\n  } else {\n    cout << \"Invalid command\" << endl;\n    return (-1);\n  }\n}\n\n",
      "answer": "#include <iostream>\nusing namespace std;\n#include <sstream>\n#include <string>\n\nbool handle_count(stringstream& line, int& intArg) {\n  line >> intArg;\n  if (line.fail()) {\n    return false;\n  } \n  string dummy;\n  line >> dummy; \n  if (line.fail()) {\n    return true;\n  } else {\n    return false;\n  }\n}\n\nint main() {\n  string line;\n  string command;\n  int intArg;\n  getline(cin, line);\n  stringstream lineStream(line);\n  lineStream >> command;\n  if (command == \"count\") {\n    if (handle_count(lineStream, intArg)) {\n      cout << \"Integer argument is \" << intArg << endl;\n      return (0);\n    } else {\n      cout << \"Invalid arguments\" << endl;\n      return (-1);\n    }\n  } else {\n    cout << \"Invalid command\" << endl;\n    return (-1);\n  }\n}\n\n",
      "testcases": [
        {
          "input": [
            "count 5"
          ],
          "output": [
            "Integer argument is 5"
          ]
        },
        {
          "input": [
            "count 10"
          ],
          "output": [
            "Integer argument is 10"
          ]
        },
        {
          "input": [
            "count "
          ],
          "output": [
            "Invalid arguments"
          ]
        }
      ]
    },
    {
      "title": "Question 6 in Fall 2019 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "question": "\nFor each of the following main functions, indicate the output produced in response to the user entering `1 2 3 4 five` on the keyboard followed by the `Enter` key. Choose only one answer.\n\n(1)\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\nint main() {\n  int num = 0;\n  int sum = 0;\n  while (!cin.fail()) {\n    cin >> num;\n    sum = sum + num;\n  }\n  cout << sum << endl;\n  return (0);\n}\n```\n\nChoose one the following choices:\n\n",
      "answer": [
        2
      ],
      "choices": [
        "6",
        "10",
        "14",
        "None; the program runs in an infinite loop"
      ],
      "explanation": "**14**, The last loop when `five` is entered, `num` is unchanged and 4 will be added to `sum` again. \nHowever, in some compilers, `sum` may be printed to be 10, as the complier will set `num` to 0 when `cin.fail()` \nis raised. This means, **10** is considered correct too."
    },
    {
      "title": "Question 6 in Fall 2019 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "multiple-choice",
      "multipart": true,
      "question": "\n(2)\n```{code-block} cpp\n#include <iostream>\nusing namespace std;\nint main() {\n  int num = 0;\n  int sum = 0;\n  bool more = true;\n  while (more) {\n    cin >> num;\n    if (cin.fail())\n      more = false;\n    else\n      sum = sum + num;\n  }\n  cout << sum << endl;\n  return (0);\n}\n```\n\nChoose one the following choices:\n\n",
      "answer": [
        1
      ],
      "choices": [
        "6",
        "10",
        "14",
        "None; the program runs in an infinite loop"
      ],
      "explanation": "10"
    },
    {
      "title": "Question 7 in Fall 2019 Midterm Exam",
      "difficulty": "Intermediate",
      "table": false,
      "type": "function programming",
      "multipart": false,
      "question": "Write a C++ function `void readInts()` that repeatedly reads integers from the standard input (using cin) and then immediately outputs the input integer (using cout), one integer per line.\n\nWhen the end-of-file is reached, the function prints the message `\"End of File Reached\"` on a line by itself before returning. If a non-integer is input the function should print the message\n`\"Invalid Input\"` on a line by itself, should discard the rest of the stream and should continue reading integers again until the end-of-file is reached. \n",
      "starter-code": "void readInts() {\n\n  // Your code here\n\n}\n",
      "answer": "void readInts() {\n  int num = 0;\n  cin >> num;\n  while (!cin.eof()) {  // received a number\n    if (cin.fail()) {\n      cin.clear();\n      cin.ignore(1000, '\\n');\n      cout << \"Invalid Input\" << endl;\n      cin >> num;\n    } else {\n      cout << num << endl;\n      cin >> num;\n    }\n  }\n  cout << \"End of File Reached\" << endl;\n}\n",
      "append-before": "#include <iostream>\nusing namespace std;\n",
      "main-function": "int main() {\n  readInts();\n  return 0;\n}\n",
      "testcases": [
        {
          "input": [
            "1 \n2 \n3 \n4 \n5\n"
          ],
          "output": [
            "1\n2\n3\n4\n5\nEnd of File Reached\n"
          ]
        },
        {
          "input": [
            "10 \n20 \nabc \n30\n"
          ],
          "output": [
            "10\n20\nInvalid Input\n30\nEnd of File Reached\n"
          ]
        },
        {
          "input": [
            "xyz \n5 \n6\n"
          ],
          "output": [
            "Invalid Input\n5\n6\nEnd of File Reached\n"
          ]
        },
        {
          "input": [
            "\n"
          ],
          "output": [
            "End of File Reached\n"
          ]
        }
      ]
    }
  ]
};