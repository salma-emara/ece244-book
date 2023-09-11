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
  string name, hobby;
  int age;
  cout << "Enter your name, age and hobby: " << endl;
  cin >> name >> age >> hobby;
  cout << "Hi, " << age << "-year-old "<< name << " who loves " << hobby << "!" << endl;
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

I hope you have had a try at breaking the program above. Every programmer should know how to break programs as well as how to fix them.

One of the problems is that this program only works for name and hobby inputs without spaces. Given the input "Anne 20 rock climbing", the program outputs "Hi, 20-year-old Anne who loves rock!". You should have come to the conclusion: `cin` will only read a string up to a whitespace character. So how can we store a whole line of text in one string?

### Get an entire line with `getline`
Turns out we can get a whole line with the `getline` function.

There are multiple ways of calling `getline`. One is to pass `cin` as the first parameter, the receiving data variable as the second parameter, and optionally pass a *delimiter* as a last parameter. The *delimiter* is a character that `cin` will read up to (![c++ docs](https://cplusplus.com/reference/string/string/getline/?kw=getline)). If unspecified, `getline` reads until the `\n` character. `\n` is emitted when the `<Enter>` key is pressed.

```{code-block} c
#include <iostream>
#include <string>
using namespace std;

int main(){
  string name, hobby;
  int age;
  cout << "Enter your name: " << endl;
  getline(cin, name);
  cout << "Enter your age: " << endl;
  cin >> age;
  cout << "Enter your hobby: " << endl;
  getline(cin, hobby);
  cout << "Hi, " << age << "-year-old "<< name << " who loves " << hobby << "!" << endl;
}
```
Unfortunately, this program doesn't quite work yet!

````{admonition} C-style string with getline

  Another way of calling `getline` is to pass a `char*` variable, the max number of characters to read, and the delimiter. `getline` will read until it encounters the delimiter, or if it reaches the max number of characters, whichever comes first (![c++ docs](https://cplusplus.com/reference/istream/istream/getline/)).

  ```{code-block} c
  :emphasize-lines: 8
  :linenos:
  #include <iostream>
  using namespace std;

  int main(){
    char name[256];
    int age;
    cout << "Enter your name: " << endl;
    cin.getline(name, 256, '\n');
  }
  ```
  Hold on, what is the dot syntax in `cin.getline`? It means we are accessing the member function `getline` of an object. `cin` is an object of the class `istream`. Don't worry about this yet. We will get to objects and classes in [chapter ?]().
  <!-- TODO: insert chapter number and link to chapter -->
````

The program now takes name inputs with spaces correctly, but doesn't allow the user to enter a hobby. This is because `cin` will read only exactly what it needs to fill the variables given. When a user enters an age such as `23`, `cin` receives the characters `23\n`. While `23` can be stored in the `int` variable, the newline character will still be left in the stream. And when it's time to read into `hobby` with `getline`, it reads the `\n` left in the buffer, and exits immediately.

One way to circumvent this is to use `cin.ignore(1)` to tell `cin` to ignore 1 character, that is, the leftover newline character.

```{code-block} c
:emphasize-lines: 13
:linenos:
#include <iostream>
#include <string>
using namespace std;

int main(){
  string name, hobby;
  int age;
  cout << "Enter your name: " << endl;
  getline(cin, name);
  cout << "Enter your age: " << endl;
  cin >> age;
  cout << "Enter your hobby: " << endl;
  cin.ignore(1);
  getline(cin, hobby);
  cout << "Hi, " << age << "-year-old "<< name << " who loves " << hobby << "!" << endl;
}
```

## Input validation with `cin` flags
We are almost there! The last problem is how `cin` behaves when we enter a string when it's expecting a number. (Try this out if you haven't).

Take this input for example,
```
Bjorn twenty programming
```
We get the output:
```
Hi, 0-year-old Bjorn who loves !
```
.

What happened here? `cin` fails to fill in our `age` and `hobby` variables, so they retained their default values (ie. 0 for `int` and "" for `string`). 

As `cin` goes through the input characters one by one, as soon as it reads an input character that is incompatible with the variable type provided, it will raise a failure *flag*, and stubbornly refuse to read any more. Importantly, `cin` fails silently without throwing a runtime error. Therefore, the onus is on you, the programmer, to check the *flags* and handle `cin` failures.

Flags are essentially single-bit booleans that represent system states. One such flag is `fail`, which is raised in case of failures, eg. when `cin` reads an unexpected character.

**Code**
```{code-block} c
:emphasize-lines: 10, 11, 12
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
This program repeatedly asks for an age input until the user enters an integer. Notice that we need to manually unset the failure flag, to let `cin` know that the failure has been handled so it can continue reading. Then, since the unread stream still contains the problematic input, we must discard those garbage characters with `cin.ignore`.

### The `eof` flag
We have seen when and how to use the `fail` flag. Another flag we could leverage is the `eof` flag, short for "end of file". As the name suggests, it is really more relevant for file streams as we will see, but a keyboard can also emit an "eof" character with key combination `Ctrl` + `D`.

When `Ctrl+D` is pressed, `cin` raises both `fail` and `eof` flags.

`````{admonition} Exercise
:class: tip
Write a program that takes in a poem and counts the lines that end in a vowel. The user should end the poem with `Ctrl+D`.
````{dropdown} Solution
```{code-block} c
#include <iostream>
#include <string>
using namespace std;

bool isVowel(char c){
    return c == 'a' || c == 'e' || c=='i' || c=='o' || c=='u';
}

int main(){
  int vowelCount = 0;
  string line;
  while (!cin.eof()){
      getline(cin, line);
      vowelCount += isVowel(line[line.length()-1]);
  }
  cout << vowelCount << endl;
}
```
````
Input
```
Roses are red
Violets are blue
Learn C plus plus
To put some class in you
```
Output
```
2
```
`````

## An extra note on `iomanip`
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