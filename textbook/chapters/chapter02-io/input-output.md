# Basic Input/Output

## Stream
Humans would like to talk to a program in English. But, devices such as your keyboard and monitor only understand sequences of binary data (eg. 0001 0101). So we need a translator and arbitrator--the operating system. To make the OS's job easier, we want all programs to send input or receive output in the same way. That is why streams are created. Streams serve as a standard way of communicating between programs and devices.

A stream, sent from a program to a device or the device to the program via the OS, is a sequence of characters that are consumed one by one in order. Here are some examples of streams.

| stream | function |
| cout | standard output stream, can output lines to the console |
| cin | standard input stream, can read data into variables |
| cerr | standard error stream, used to output errors to the console |
| fstream | input/output stream for files, used to create/modify/read files |
| sstream | input/output stream for strings, used to convert between strings and other types |


## Reading standard input with `cin` 
Take `cin` for example, this stream can take user input from the keyboard and send it to a variable in our program. On the command line, the input data is sent to `cin` when the user presses `<Enter>`. Say we wanted to get the user's name:
```{code-block} c
#include <iostream>
#include <string>
using namespace std;

int main(){
  string name;
  cin >> name;
  cout << "Hi, " << name << endl;
}
```
We can chain an arbitrary number of variables. `cin` will read them in order.
```{code-block} c
#include <iostream>
#include <string>
using namespace std;

int main(){
  string name;
  int age;
  cout << "Enter your name and age: " << endl;
  cin >> name >> age;
  cout << "Hi, " << age << "-year-old "<< name << endl;
}
```
Play around with the example above to see how you can break it.

````{admonition} Warning! C-style strings
  Beware when using C-style strings when reading from input, since they could only hold up to a certain size. The program below will block out all users with a name longer than a certain number of characters... (Hint: it's not 15. Why? What is the last character reserved for?)
  ```
  #include <iostream>
  using namespace std;

  int main(){
    char name[15];
    cin >> name;
    cout << "Hi, " << name;
  }
  ```
````

<!-- TODO: number the code blocks -->
I hope you have had a try at breaking the program above. Every programmer should know how to break programs as well as how to fix them.

One of the problems is that this program only works for a first name, or name without spaces. You should have come to the conclusion: `cin` will only read a string up to a whitespace character. So how can we store a whole line of text in one string?

### Get an entire line with `getline`
Turns out we can get a whole line with `getline`.

```{code-block} c
#include <iostream>
#include <string>
using namespace std;

int main(){
  char name[256];
  int age;
  cout << "Enter your name: " << endl;
  cin.getline(name, 256, '\n');
  cout << "Enter your age: " << endl;
  cin >> age;
  cout << "Hi, " << age << "-year-old "<< name << endl;
}
```
`getline` is a function that takes in 3 parameters, the variable to store data into, the maximum number of characters to read, and a *delimiter* character that `cin` will read up to. `getline` will read until it encounters the delimiter, or if it reaches the max number of characters, whichever comes first. In this case, the delimiter is `\n`, which is the character that is sent to the stream when the `<Enter>` key is pressed.

Hold on, what is the dot syntax in `cin.getline`? It means we are accessing the member function `getline` of an object, `cin`. Don't worry about this yet. We will get to objects and classes in chapter ___.
<!-- TODO: insert chapter number and link to chapter -->

````{admonition}
  Warning: `cin` will read only exactly what it needs to fill the variables given. This means that the newline character will be left in the stream after it stores the numbers into age. The following code will not work. When `getline` comes along, it reads the `\n` left in the buffer, and exits immediately.

  ```{code-block} c
  #include <iostream>
  #include <string>
  using namespace std;

  int main(){
    char name[256], hobby[256];
    int age;
    cout << "Enter your name and age: " << endl;
    cin >> name >> age;
    cout << "Enter your hobby: " << endl;
    cin.getline(hobby, 256, '\n');
    cout << "Hi, " << age << "-year-old "<< name << " who loves " << hobby << "!" << endl;
  }
  ```

  One way to circumvent this is to use `cin.ignore(1)` to ignore the newline character.

  ```{code-block} c
  :emphasize-lines:11
  :linenos:
  #include <iostream>
  #include <string>
  using namespace std;

  int main(){
    char name[256], hobby[256];
    int age;
    cout << "Enter your name and age: " << endl;
    cin >> name >> age;
    cout << "Enter your hobby: " << endl;
    cin.ignore(1);
    cin.getline(hobby, 256, '\n');
    cout << "Hi, " << age << "-year-old "<< name << " who loves " << hobby << "!" << endl;
  }
  ```
````

## Input validation with `cin` flags
Another problem you may have realized is how `cin` behaves when we enter a string when it's expecting a number. (Try this out if you haven't).

Take this input for example on the latest version of our program,
```
Bjorn twenty programming
```
We get the output:
```
Hi, 0-year-old Bjorn who loves !
```
.

What happened here? `cin` fails to fill in our `age` and `hobby` variables, so they retained their default values (ie. 0 for `int` and "" for `string`). 

It turns out that as `cin` is going through the input characters one by one, when it reads an input character that is incompatible with the variable provided, it will simply get stuck on that character and stubbornly refuse to read any more. Importantly, `cin` fails silently without throwing a runtime error. Therefore, the onus is on you, the programmer, to handle `cin` failures.

<!-- TODO: insert diagram here -->

`cin` communicates these failures by raising *flags*. Flags are essentially single-bit booleans that represent system states. One such flag is `fail`, which is raised in case of failures, eg. when `cin` reads an unexpected character.

```{code-block} c
:emphasize-lines:10-12
:linenos:
#include <iostream>
#include <string>
using namespace std;

int main(){
  string name, hobby;
  int age;
  cout << "Enter your name and age: " << endl;
  cin >> name >> age;
  while (cin.fail()){
    cin.clear(); // clear the fail flag
    cin.ignore(10000); // discard the rest of the stream
    cout << "Wrong input for age! Enter age again: " << endl;
    cin >> age;
  }
  cout << "Enter your hobby: " << endl;
  cin.ignore(1);
  cin.getline(hobby, 256, '\n');
  cout << "Hi, " << age << "-year-old "<< name << " who loves " << hobby << "!" << endl;
}
```
This program repeatedly asks for an age input, until the user enters an integer. Notice that we need to manually unset the failure flag, to let `cin` know that the failure has been handled so it can continue reading. Then, since the stream still contains the problematic input, we must discard those garbage characters with `cin.ignore`.

<!-- TODO: eof flag for stdin? -->

## A note on `endl` and others - `iomanip` (not required content)
<!-- TODO: -->


<!-- Quiz:
1. Say we are using a C-style string for postal codes. What is the minimum value of N for users in Canada? Ans: 7
```{code-block}c
char postalCode[N];
cin >> postalCode;
``` 
2. What is the value stored in integer if the input is "123abc"? Ans: b
```{code-block} c
int integer;
cin << integer;
```
a) 0
b) 123 
c) compile-time error
d) run-time error

3. What flag is raised if the input is "123abc"? Ans: d
```{code-block} c
int integer;
cin << integer;
```
a) fail
b) bad
c) eof
d) none of the above

4. What is the value stored in integer if the input is "123.9"? Ans: b
```{code-block} c
int integer;
cin << integer;
```
a) 0
b) 123
c) 124
d) compile-time error
e) run-time error

5. What flag is raised if the input is "123.9"? Ans: d
```{code-block} c
int integer;
cin << integer;
```
a) fail
b) bad
c) eof
d) none of the above
-->