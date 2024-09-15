# Program Organization and Separate Compilation

So far, you have been writing code in a single file. However, as the code grows, it becomes challenging to read, harder to reuse, and more difficult update and debug. In the previous section, we discussed how to use functions to divide programs into smaller parts. Each function had a specific responsibility, and the main function called these functions to solve the problem. By the same token, we want to split code across multiple files. This is with the goal of making the code easier to debug, reusable, and easier to collaborate on with many team members. We will also learn how splitting code into multiple files can make the compilation process faster. 

## How do we split code into separate files?

### Compilation of a single file

For example, the following code is written in one file named `main.cpp`.

**Code in `main.cpp`**
```{code-block} cpp
#include <iostream>
using namespace std;

void printNum(int x);
int userInputNum();

int main(void) {
  int num = userInputNum();
  printNum(num);
  return 0;
}

void printNum(int x) {
  cout << "The number is: " << x << endl;
}

int userInputNum() {
  int x;
  cout << "Enter a number: ";
  cin >> x;
  return x;
}
```

If we want to run the program, we need to compile the code. **Compilation** is the process of translating the human-readable code into binary instructions that the computer can execute directly or *machine code*. The compiler reads the code and translates it into machine code stored in a file called the **executable** file. The executable file is then executed by the computer.

To compile the code above, we will use the C++ compiler named `g++`. We will run the following command in the terminal:

```bash
g++ main.cpp -o main
```

`g++` is the compiler that will read the source code file `main.cpp`. We use the flag `-o` to specify the name of the executable file `main` that will be created after the compilation process. The executable file is the file that contains the machine code that the computer can execute. We can run the executable file by running the following command:

```bash
./main
```

The program will ask you to enter a number, and then it will print the number you entered.

### Split code into multiple files

Generally, we separate the interface, which is the function declarations, from the implementation, which is the function definitions. The interface is stored in a header file with the extension `.h`, and the implementation is stored in a source file with the extension `.cpp`.

We can indeed have all function declarations in a header file `.h` and all function definitions in a source file `.cpp`. However, to further split the code, we will have multiple header files and multiple source files.

For example, we can split the code above into two header files: `print.h` and `input.h`, and three source files: `print.cpp`, `input.cpp` and `main.cpp`. The 
- `print.h`: contains the function declaration for the `printNum` function.
- `input.h`: contains the function declaration for the `userInputNum` function.
- `print.cpp`: contains the function definition for the `printNum` function.
- `input.cpp`: contains the function definition for the `userInputNum` function.
- `main.cpp`: contains the `main` function.

The code in the header files will look like the following:






