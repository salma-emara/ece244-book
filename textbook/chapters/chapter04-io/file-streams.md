# Input/Output Streams

A stream is a sequence of characters that flow from a source to a destination. The source or destination can be a *file*, the *keyboard*, the *console/terminal*, or a *string* in memory. 

## Standard Input and Output Streams

The **standard input and output** streams for reading (taking input) from the keyboard and writing (producing output) to the console/terminal. The standard input stream is represented by the `cin` **object**, while the standard output stream is represented by the `cout` **object**. `cin` is an object of `istream` class, or input stream, and `cout` is part of the `ostream` class, or output stream. The `istream` and `ostream` are part of the `iostream` library, which is included in C++ programs using `#include <iostream>` directive.

## File Input and Output Streams

We can also read from and write to files using file input and output streams. The file input stream is represented by the `ifstream` class, while the file output stream is represented by the `ofstream` class. Both `ifstream` and `ofstream` are part of the `fstream` library, which is included in C++ programs using `#include <fstream>` directive.

### Writing/Outputting to a File

To write output to a file, we use an `ofstream` object. In the following code snippet, we create an `ofstream` object named **`outFile`** and open a file named `File.txt` for writing. 

```cpp
ofstream outFile("File.txt");
```

We can open a file in two ways: by passing the file name as a parameter to the constructor of `ofstream` class as we do in the above example, or by calling the `open` method of the `ofstream` object on `outFile` after creating the object as shown below.

```cpp
ofstream outFile;
outFile.open("File.txt");
```

**Where is the file created?**

If a file does not exist, it will be created when we open it for writing using `ofstream`. The file `File.txt` will be created in the current working directory of your program. The current working directory is usually the directory where your source code file is located or the directory from which you run your program. 

If you want to specify a different location for the file, you can provide an absolute or relative path in the file name when opening the file. For example, to create the file in a folder named `data` located in the current working directory, you can use:

```cpp
ofstream outFile("data/File.txt");
```

If you want to create the file in a specific directory, you can provide the absolute path to that directory. For example, on a Unix-like system, you can use:

```cpp
ofstream outFile("/home/user/data/File.txt");
```

We can then use `outFile` object as we use `cout` to write the string `"Hello, World!"` to the file using the `<<` operator. For example, the following line writes the string to the file followed by a newline character.

```cpp
outFile << "Hello, World!" << endl;
```

````{admonition} File Exists?

If the file already exists, opening it for writing will overwrite the existing content of the file. If we want to append data to an existing file instead of overwriting it, we can open the file in append mode by passing an additional parameter `ios::app` to the `open` method or the constructor of `ofstream` class.

**Opening a file in append mode using `open` method**
```cpp
ofstream outFile;
outFile.open("File.txt", ios::app);
// or just ostream outFile("File.txt", ios::app);
```
````

Finally, we close the file using the `close` method of the `ofstream` object. Writing `outFile.close();` is important because it ensures that all data is properly written to the file. If we do not close the file, some data may remain in the **"buffer"** and not be written to the file.

**Code Example**

In this example, we create an `ofstream` object named `outFile`, open a file named `File.txt` for writing, write the string `"Hello, World!"` to the file, and then close the file.

```{code-block} cpp
:linenos:
#include <fstream>
using namespace std;

int main(void){
    ofstream outFile("File.txt");
    outFile << "Hello, World!" << endl;
    outFile.close();
    return 0;
}
```

**What is a buffer?**

When we write data to a file using an `ofstream` object or to the terminal using `cin`, the data is first stored in a buffer in memory. The buffer is a temporary storage area that holds the data before it is written to the file. The data in the buffer is written to the file or terminal when:

(i) the output has a newline character (`\n`) or an end-of-line manipulator like `endl`,
(ii) we explicitly call the `flush` method of the `ofstream` object using `outFile.flush()` or `cin.flush()`, or 
(iii) we close the file using the `close` method.

For example, `outFile << "Hello, World!";` writes the string to the buffer first. Then, when we write `outFile << endl;`, the buffer is flushed and the data is written to the file. This is done **for efficiency reasons, as writing data to a file or terminal can be slow, and buffering allows us to write larger chunks of data at once**.

### Reading/Inputting from a File

To read data from a file, we use an `ifstream` object. The following code snippet demonstrates how to open a file named `File.txt` for reading, read data from the file, and then close the file.

```{code-block} cpp
:linenos:
#include <fstream>
using namespace std;

int main(void){
    ifstream inFile;
    inFile.open("File.txt");
    // or just: ifstream inFile("File.txt");

    int num1, num2;
    inFile >> num1 >> num2;
    cout << "num1: " << num1 << ", num2: " << num2 << endl;
    inFile.close();
    return 0;
}
```

In the above code snippet, we create an `ifstream` object named `inFile` and open the file `File.txt` for reading using the `open` method. We can also open the file by passing the file name to the constructor of `ifstream` class as shown in the comment.

In line 8, we read two integers from the file using the `>>` operator (as we do with `cin`) and store them in the variables `num1` and `num2`. The `>>` operator reads data from the file and automatically skips any whitespace characters (spaces, tabs, or newlines) between the numbers. If the file `File.txt` contains the following two integers separated by a space or newline, then `num1` will be assigned the value `1` and `num2` will be assigned the value `2`.

`File.txt`
```
1 
2

```

In line 9, we print the values of `num1` and `num2` to the console using `cout`. Finally, we close the file using the `close` method of the `ifstream` object.

Things can go wrong when reading from a file. For example, the file may not exist, or the data in the file may not be in the expected format. We will discuss error detection and handling in the next section.