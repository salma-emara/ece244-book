# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 5 in Fall 2022 Midterm Exam [Easy]**

Consider the following program.

```{code-block} cpp
#include <fstream>
#include <iostream>
using namespace std;

int main() {
  int a;
  ifstream inFile;
  inFile.open("input.txt");
  if (inFile.fail()) {
    return 1;
  }
  while (1) {
    inFile >> a;
    if (inFile.fail()) {
      cout << "failed.." << endl;
      inFile.clear();
      inFile.ignore(100, '\n');
      continue;
    }
    cout << "a = " << a << endl;
    break;
  }
  return 0;
}
```

Given the following contents of `"input.txt"`, write the output.

1. `"input.txt"`
    <pre>
     1
     2
     3
    </pre>

    ```{admonition} Answer
    :class: dropdown
    <pre>
    a = 1
    </pre>
    ```

2. `"input.txt"`
    <pre>
    a32
    b86
    3
    </pre>

    ```{admonition} Answer
    :class: dropdown
    <pre>
    failed..
    failed..
    a = 3
    </pre>
    ```

3. `"input.txt"`
    <pre>
    a32
    b86 3
    </pre>

    ```{admonition} Answer
    :class: dropdown
    <pre>
    failed..
    failed..
    failed..
    And it keeps repeating
    </pre>

    ```

Now you remove the `infile.clear()` from the code, so the program becomes:

```{code-block} cpp
:emphasize-lines: 15
#include <fstream>
#include <iostream>
using namespace std;
int main() {
  int a;
  ifstream inFile;
  inFile.open("input.txt");
  if (inFile.fail()) {
    return 1;
  }
  while (1) {
    inFile >> a;
    if (inFile.fail()) {
      cout << "failed.." << endl;
      // inFile.clear(); COMMENTED OUT
      inFile.ignore(100, '\n');
      continue;
    }
    cout << "a = " << a << endl;
    break;
  }
  return 0;
}
```

1. `"input.txt"`
    <pre>
    1
    2
    3
    </pre>

    ```{admonition} Answer
    :class: dropdown
    <pre>
    a = 1
    </pre>
    ```
2. `"input.txt"`
    <pre>
    a32
    b86
    3
    </pre>

    ```{admonition} Answer
    :class: dropdown
    <pre>
    failed..
    failed..
    failed..
    And it keeps repeating
    </pre>
    ```
3. `"input.txt"`
    <pre>
    a32
    b86 3
    </pre>



    ```{admonition} Answer
    :class: dropdown
    <pre>
    failed..
    failed..
    failed..
    And it keeps repeating
    </pre>
    ```

**Question 2 in Fall 2021 Final Exam [Intermediate]**

Write a C++ function `void readInts()` that repeatedly reads integers from the standard input (using `cin`) and then immediately outputs the input integer (using `cout`), one integer per line. When a `'.'` character is encountered, the function prints the message `Done` on a line by itself and returns. If the user enters any characters other than integer digits or the `'.'`, the function prints the message `Error` on a line by itself and returns. You may assume the user will never enter `eof`.

Thus, for example, if the user enters `51 16 700 .`, the function prints:
<pre>
51
16
700
Done
</pre>

However, if the user enters `101 21 13 abc 444`, the function prints:
<pre>
101
21
13
Error
</pre>

```{code-block} cpp
void readInts() {
```

````{admonition} Answer
:class: dropdown

```{code-block} cpp
void readInts() {
  int num = 0;
  string dot;
  cin >> num;
  while (!cin.fail()) {  // received a number
    cout << num << endl;
    cin >> num;
  }
  // then read a non-integer number
  string c;
  // need to clear fail flag before doing cin
  cin.clear();
  // Read in a string
  cin >> c;
  if (c == ".") {
    cout << "Done" << endl;
  } else {
    cout << "Error" << endl;
  }
}
```

````

**Question 3 in Fall 2018 Midterm Exam [Intermediate]**

Consider the following program that uses `stringstreams` to read a command. The command has the following format:
<pre>
count intArg
</pre>

The command word is `count` and `intArg` is an integer argument. The command must have only one integer argument, e.g `count 3`.

The function `handle_count` performs the reading of the integer value. If the integer is valid, it returns `true` and updates the value of `intArg`. Otherwise, it returns `false`.

```{code-block} cpp
:emphasize-lines: 6, 16
#include <iostream>
using namespace std;
#include <sstream>
#include <string>
// function prototype
bool handle_count( <fill in the blank> );

int main() {
  string line;
  string command;
  int intArg;
  getline(cin, line);
  stringstream lineStream(line);
  lineStream >> command;
  if (command == "count") {
    if (handle_count( <fill in the blank> )) {
      cout << "Integer argument is " << intArg << endl;
      return (0);
    } else {
      cout << "Invalid arguments" << endl;
      return (-1);
    }
  } else {
    cout << "Invalid command" << endl;
    return (-1);
  }
}
```

1. Determine the number of arguments and the type of each argument and indicate them in the code above in the prototype of the function, `handle_count`. Further, indicate what parameters are passed to the function when it is invoked. Write your answers where indicated in the code above.
   
    You may not modify main by adding or removing line, other than by indicating the formal arguments in the function prototype and actual arguments of the function invocation. 

    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    :emphasize-lines: 6, 16
    :linenos:
    #include <iostream>
    using namespace std;
    #include <sstream>
    #include <string>
    // function prototype
    bool handle_count(stringstream&, int&);

    int main() {
      string line;
      string command;
      int intArg;
      getline(cin, line);
      stringstream lineStream(line);
      lineStream >> command;
      if (command == "count") {
        if (handle_count(lineStream, intArg)) {
          cout << "Integer argument is " << intArg << endl;
          return (0);
        } else {
          cout << "Invalid arguments" << endl;
          return (-1);
        }
      } else {
        cout << "Invalid command" << endl;
        return (-1);
      }
    }
    ```
    ````

2. Write the header and body of the `handle_count` function below so it performs as indicated above. 

    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    bool handle_count(stringstream& line, int& intArg) {
      line >> intArg;
      if (line.fail()) {
        return false;
      } 
      string dummy;
      line >> dummy; 
      if (line.fail()) {
        return false;
      } else {
        return true;
      }
    }
    ```
    ````

**Question 6 in Fall 2019 Midterm Exam [Intermediate]**

For each of the following main functions, indicate the output produced in response to the user entering `1 2 3 4 five` on the keyboard followed by the `Enter` key. Choose only one answer.

```{code-block} cpp
#include <iostream>
using namespace std;
int main() {
  int num = 0;
  int sum = 0;
  while (!cin.fail()) {
    cin >> num;
    sum = sum + num;
  }
  cout << sum << endl;
  return (0);
}
```

Choose one the following choices:
1. 6
2. 10
3. 14
4. None; the program runs in an infinite loop

````{admonition} Answer
:class: dropdown
**3. 14**
The last loop when `five` is entered, `num` is unchanged and 4 will be added to `sum` again.

However, in some compilers, `sum` may be printed to be 10, as the complier will set `num` to 0 when `cin.fail()` is raised. This means, **2. 10** is considered correct too.
````

```{code-block} cpp
#include <iostream>
using namespace std;
int main() {
  int num = 0;
  int sum = 0;
  bool more = true;
  while (more) {
    cin >> num;
    if (cin.fail())
      more = false;
    else
      sum = sum + num;
  }
  cout << sum << endl;
  return (0);
}
```

Choose one the following choices:
1. 6
2. 10
3. 14
4. None; the program runs in an infinite loop

```{admonition} Answer
:class: dropdown
**2. 10**
```

**Question 7 in Fall 2019 Midterm Exam [Intermediate]**

Write a C++ function `void readInts()` that repeatedly reads integers from the standard input (using cin) and then immediately outputs the input integer (using cout), one integer per line.

When the end-of-file is reached, the function prints the message `"End of File Reached"` on a line by itself before returning. If a non-integer is input the function should print the message
`"Invalid Input"` on a line by itself, should discard the rest of the stream and should continue reading integers again until the end-of-file is reached. 

```{code-block} cpp
void readInts() {
```

````{admonition} Answer
:class: dropdown
```{code-block} cpp
void readInts() {
  int num = 0;
  cin >> num;
  while (!cin.eof()) {  // received a number
    if (cin.fail()) {
      cin.clear();
      cin.ignore(1000, '\n');
      cout << "Invalid Input" << endl;
    } else {
      cout << num << endl;
      cin >> num;
    }
  }
  cout << "End of File Reached" << endl;
}
```
````