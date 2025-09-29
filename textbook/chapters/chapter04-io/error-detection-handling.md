## What if something goes wrong?

When working with inputs, there are multiple things that can go wrong: wrong input format or input file that we are supposed to read from does not exist. 

### Wrong input format

When reading input from the keyboard, the input will be written in the buffer till the user presses on `<enter>` or `<return>`. This is when `cin` will start processing the input. 

If we have, two integers to read using

```cpp
int x, y;
cin >> x >> y;
```

and the input buffer has the following: 

```{figure} ./images/cin-input-buffer-ints.png
:alt: cin-input-buffer-ints
:class: with-shadow
:width: 600px
:align: center
:name: cin-input-buffer-ints
```

`cin` processes the input character by character. It ignores the first two white spaces, then reads `1`, then `3`, then a space, hence it stores `13` in the integer `x`. 

`cin` continues to process the input as it has to read an integer into `y`. Then, `cin` reads `4`, and finally a newline character (when the user presses `<enter>` or `<return>`). Finally, `cin` stores `4` into `y`.

Now, what if the user enters something like this:

```{figure} ./images/cin-input-buffer-wrong-format.png
:alt: cin-input-buffer-wrong-format
:class: with-shadow

:width: 600px
:align: center
:name: cin-input-buffer-wrong-format
```

`cin` ignores the first two white spaces, then reads `1`, then `3`, then a dot `'.'`, which is not part of the integer, so it stops processing further for `x`. It stores `13` in the integer `x`.

Now, `cin` has to read an integer into `y`. It tries reading the dot `'.'`, which is not expected as it not part of an integer. Three main things happen at this moment:

1. `cin` will fail silently,
2. the buffer remains unchanged with `'.'` still unprocessed, and
3. `y` will be zeroed out

This situation is called a **fail state**. A fail state occurs when `cin` encounters an unexpected input format. A boolean flag called `failbit` is set to indicate that `cin` is in a fail state. You can check if `cin` is in a fail state using the `fail()` method, which returns `true` if `cin` is in a fail state and `false` otherwise. For example:

```cpp
if (cin.fail()) {
    cout << "cin is in a fail state" << endl;
}
```

When `cin` is in a fail state, it will not process any further input until the fail state is cleared. This means that if we try to read more input using `cin`, it will not work until we clear the fail state.


Before we can read more input, we need to do two main things:

1. clear the fail state using the `clear()` method. `cin.clear();` will set the fail flag to `false`, and 
2. ignore the characters in the input buffer that have wrong format using the `ignore()` method. `cin.ignore(<int n>, <char c>);` will ignore up to `n` characters in the input buffer or until the character `c` is encountered, whichever comes first. 

For example, after the `cin.fail()` is true in the previous example, we need to clear the flag and ignore everything in the input buffer until a newline character is encountered. We will use the following code:

```cpp
cin.clear(); // clear the fail state
cin.ignore(1000, '\n'); 
// ignores the rest of the line till \n or 1000 characters, whichever comes first. Since we expect the buffer to be small, we use 1000 as a large number to ignore till \n.
```

````{admonition} Note
`cin.ignore()` can be used even if `cin` is not in a fail state. It is useful when we want to ignore parts of the input buffer that we do not need.

For example, if we want to read ignore everything enetered before a white space, and only read one integer after that, we can use the following code:

```cpp
int x;
cin.ignore(1000, ' '); // ignore everything till a white space or 1000 characters, whichever comes first
cin >> x; // read one integer
```

````

### Input file does not exist

When reading input from a file, we need to check if the file exists and if it was opened successfully. We can do this by checking the `fail()` method of the `ifstream` object. For example:

```cpp
ifstream inFile("File.txt");
if (inFile.fail()) {
    cerr << "Error opening file" << endl;
    return 1; // exit the program with an error code
}
```

`cerr` is used to print error messages to the standard error stream. It is similar to `cout`, but it is used for error messages. It is unbuffered, which means that it gets printed immediately to the terminal.

`return 1;` if it's in the `main` function, is used to exit the program with an error code. The value `1` indicates that the program exited with an error. A value of `0` indicates that the program exited successfully.

### End-of-file (EOF)

When reading from a file, we may reach the end of the file. We can check if we have reached the end of the file using the `eof()` method of the `ifstream` object. For example, in the following code snippet, we read integers from a file until we reach the end of the file:

```cpp
ifstream inFile("File.txt");
if (inFile.fail()) {
    cerr << "Error opening file" << endl;
    return 1; // exit the program with an error code
}
int num;
while (!inFile.eof()) {
    // read data from the file
    inFile >> num;
    cout << num << endl;
}
```

In the above code snippet, we use a `while` loop to read integers from the file until we reach the end of the file. The `eof()` method returns `true` if we have reached the end of the file and `false` otherwise.

A user can raise the `eof` flag from the terminal by pressing `ctrl + D` on Linux or `ctrl + Z` on Windows too. 

## Exercise

Write a program that reads integers from a file named `numbers.txt` that has inputs on separate lines and calculates their sum. The program should handle the following errors:
1. The file `numbers.txt` does not exist.
2. The file contains non-integer inputs.

**Code**
```cpp
#include <fstream>
#include <iostream>
using namespace std;

int main(void) {
  ifstream inFile("numbers.txt");
  if (inFile.fail()) {
    cerr << "Error opening file" << endl;
    return 1;  // exit the program with an error code
  }
  int num;
  int sum = 0;
  inFile >> num;
  while (!inFile.eof()) {
    if (inFile.fail()) {
      cerr << "Non-integer input encountered. Ignoring the rest of the line."
           << endl;
      inFile.clear();             // clear the fail state
      inFile.ignore(1000, '\n');  // ignore the rest of the line
    } else {
      sum += num;
    }
    inFile >> num;
  }
  cout << "The sum of the integers in the file is: " << sum << endl;
  inFile.close();
  return 0;
}
```



