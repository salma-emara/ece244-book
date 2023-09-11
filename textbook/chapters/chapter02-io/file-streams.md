# File Streams

Files are read very similarly to standard keyboard input. The main things to remember here are to open and close the file. Include the header `fstream` to use these functions.

## Opening a file
To open a file as a stream, use the `file.open` method.
```{code-block} c
fstream file;
file.open("diary.txt", ios_base::in | ios_base::out | ios_base::trunc);
```
The first parameter is the file name. The second parameter specifies the permissions or mode we wish to open the file in. The example above opens the file for reading (`ios_base::in`), writing (`ios_base::out`), and will overwrite the file contents (`ios_base::trunc`). All other modes are listed below:

| file open mode | explanation |
|-|-|
| in     | open for reading |
| out    | open for writing |
| app    | "append"; puts the stream's position to the end of the stream before each output operation |
| ate    | puts the stream's position to the end of the stream upon opening file, allows writing to any other position with other commands [^1] |
| trunc  | causes existing file contents to be discarded; **the default** |
| binary | creates a binary file (default is text) |

After calling `open`, it is good practice to check if it was successful with the `file.is_open()` function.

## Writing to a file
Now that we have opened a file as a stream, we can send output to it just like how we sent output to `cout`.

```{code-block} c
ofstream file;
file.open("diary.txt", ios_base::out | ios_base::trunc);
int day = 10, month = 9, year=2023;
string weather = "Sunny";

if (file.is_open()){
  file << month << "/" << day << "/" << year;
  file << "Sunday" << weather;
  file << "Dear Diary,";
  file << "Today we learned about file streams in C++!";

  file.close();
}
else{
  cout << "Oops! File was not opened successfully." << endl;
}
```
Our file should now contain the following contents.
```
September 10, 2023
Sunday Sunny
Dear Diary,
Today we learned about file streams in C++!
```

```{tip}
You may have noticed that we used `ofstream` instead of `fstream`. This stands for "out file stream", and is used exclusively for writing output to file streams. In programming, it's always a good idea to use only as much resources as we need, to make troubleshooting much easier. The input analog of `ostream` is `istream`. Later we will learn that the `fstream` class *inherits* from both `ofstream` and `istream`, so that it has the functionality of both.

<!-- TODO: insert chapter link to inheritance -->

```

## Reading a file
We can also do everything that we did with `cin` on the file stream. Before reading the solution, see if you can read the file back into the following variables. You can use the same flags we used on `cin` for validation (eg. `fail`, `eof`).

```{code-block} c
int day; // 10
int month; // 9
int year; // 2023
string dayOfWeek; // "Sunday"
string weather; // "Sunny"
string contents; // "Dear Diary,\nToday we learned about file streams in C++!"
```

```{dropdown} Solution
#include <iostream>
#include <string>
using namespace std;

 int main(){
    auto& file = cin;
    int day, month, year;
    string dayOfWeek, weather, contents="";
    
    file >> day; 
    file.ignore(1); // ignore the slash
    file.clear(); // clear the fail flag from trying to read the slash
    file >> month; 
    file.ignore(1); // ignore the slash
    file.clear(); // clear the fail flag from trying to read the slash
    file >> year;
    file >> dayOfWeek >> weather;
    
    while (!file.eof()){
        string line;
        getline(file, line);
        contents += line; 
    }
    cout << day << " " << month << " " << year << " " << dayOfWeek << " " << weather << " " << contents;
 }
```

## Closing a file
Always close the file with `file.close()`.


[^1]: Check out ![ostream::seekp](https://cplusplus.com/reference/ostream/ostream/seekp/) if you're interested.