# String Streams

We have learned we can take input/produce output from/to the user through the console using `cin` object from `ifstream` and `cout` from `ostream` respectively. We can also read from/write to files using classes `ifstream` and `ofstream` respectively. In this section, we learn we can also read from/write to strings using `stringstream` class.

In many programs, user input data as a **line of text** not as separate inputs. This is because the user wants the program to process a line of multiple inputs. Reading the input using `cin >>` will only read up to the first whitespace character, and you will need to have another `cin >>` to read the next input. Also, by mistake, if you don't check for `fail()` flag, `cin` will fail in next reads and leave the program in a bad state. This can be tedious if you have many inputs on a line. Instead, we can read an entire line from the user into a string, and then use `stringstream` to parse the inputs from that line. In this case, `cin` will not fail due to invalid input as we will be reading the line into a string variable. `cin` will only detect failure if we reach the end of the input stream (EOF).

## What are string streams?

String streams are input/output streams that operate on strings. They are defined in the `<sstream>` header file. The `stringstream` class is used for both input and output operations on strings. It allows us to read from and write to strings as if they were files or standard input/output.

For example, if we have a string that contains multiple pieces of data separated by spaces named `line`, we can create an object from the `stringstream` class and initialize it with the string `line` as follows:

```cpp
stringstream ss(line);
```

We can then use the `>>` operator to extract data from the string just like we do with `cin` as such:

```cpp
int id;
ss >> id;
```

In the following example, we read from a string using `stringstream`:

{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="2 12 15" output="ID: 1001
Name: Joe
1001 Joe">
&#35;include &lt;iostream&gt;
&#35;include &lt;sstream&gt;
&#35;include &lt;string&gt;
using namespace std;
<br>

int main(void) { 
  string line = "1001 Joe";
  stringstream ss(line);
  int id;
  string name;
  ss >> id >> name;
  cout << "ID: " << id << endl;
  cout << "Name: " << name << endl;
  cout << ss.str() << endl; // prints the original string
  return 0;
}
</code-runner>
</pre>

In line 2, we include the `<sstream>` header file that contains the definition of the `stringstream` class. 

In line 9, we create a `stringstream` object `ss` and initialize it with the string `line`. This creates a string stream object that has a **copy** of the string `line`. If we ever write into or read from the string stream, it will not change the original string `line`. 


In line 12, we use the `>>` operator to read the integer and string from the string stream. As we read from the string stream, an internal cursor in the stream moves forward without affecting the original string. This means as we read `1001`, the cursor moves past the space and points to the beginning of `Joe` for the next read. However, the original string `line` remains unchanged.

In line 15, we use the `str()` member function of the `stringstream` class to get the original string that was used to initialize the string stream. This prints `1001 Joe` -- the original string.

## Getline with string streams

Since `cin` can read only till the next white space in the input, the `getline()` function can read an entire line (till `'\n'` character) from the standard input (or file input) into a string variable. This is useful when you want to read a line of text that may contain spaces, and then parse it using a string stream.

For example, the following code reads a line of text from the user and then uses a string stream to parse the inputs:

{{code_runner_header}}
<pre class="code-runner-wrapper">
<code-runner language="c++" highlight-lines="8" input = "1001 Joe" output="ID: 1001
Name: Joe">
&#35;include &lt;iostream&gt;
&#35;include &lt;sstream&gt;
&#35;include &lt;string&gt;
using namespace std;
<br>
int main(void) { 
  string line;
  getline(cin, line); // reads a line of text from the user
  stringstream ss(line);
  int id;
  string name;
  ss >> id;
  if(ss.fail()) {
    cout << "The first entry was not a number." << endl;
    cout << "Try again!" << endl;
    return 1;
  }
  cout << "ID: " << id << endl;
  cout << "Name: " << name << endl;
  return 0;
}
</code-runner>
</pre>

In line 8, we use the `getline()` function to read an entire line of text from the user and store it in the string variable `line`. The user can enter multiple inputs separated by spaces. 

We then in line 9 create a string stream object `ss` initialized with the string `line` to parse the inputs. 


```{admonition} Note
The `eof` flag is set when we reach the end of the input stream. This can happen in two cases:

1. When we read the last input from the stream, and there is no white spaces at the end, the `eof` flag is set.

2. When we try to read past the end of the stream. This means when we try to read more inputs than are available in the stream, the `eof` flag is set. In this case, the `fail` flag is also set, because the input operation failed.

Since the `fail` flag is set also when an input operation fails, this means that if we try to read an input we need to check **first** if the `fail` flag is set, then check if the `eof` flag is raised or not to determine the reason for the failure.
```





