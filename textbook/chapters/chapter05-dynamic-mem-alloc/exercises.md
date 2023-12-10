# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 3 in Fall 2022 Midterm Exam [Easy]**

Consider the following C++ function:

```{code-block} cpp
void AvadaKedavra(int n) {
  int size = n + 1;
  int* q = NULL;
  for (int i = 0; i < 3; ++i) {
    q = new int[size];
  }
}
```

If somewhere in your main function you call `AvadaKedavra(1)`. Based on the memory layout discussed during the lecture, answer this question: from the time this function starts to execute to the time right before it returns, how many bytes are newly allocated on the stack and the heap, respectively?

You may assume:
1. all variables are put in the main memory.
2. an `int` takes 4 bytes
3. we have a 32-bit machine

```{admonition} Answer
:class: dropdown

**Stack**

`n`: 4 bytes

`size`: 4 bytes

`q`: 4 bytes

`i`: 4 bytes

Total: 16 bytes

**Heap**

`n` is 1, `size` is 2

The loop iterates 3 times, each time it allocates 2 integers. 

Total is 3 * 2 * 4 bytes = 24 bytes.
```

**Question 9 in Fall 2021 Midterm Exam [Intermediate]**

Consider the code shown below. You can assume it compiles with no errors and runs. 

```{code-block} cpp
#include <iostream>
using namespace std;

int a = 0;
int* b = &a;
int** c = &b;

int* foo(int** d) {
  (**d)++;
  b = *d;
  int* e = new int;
  *e = 10;
  return e;
}

int main() {
  int* g = nullptr;
  int* f = new int;
  *f = 5;
  a++;

  // Point 1

  g = foo(&f);
  a++;
  (*g)++;

  // Point 2

  return 0;
}

```

In the table below, give the values of the variables indicated in the table columns when program execution reaches each of the two points, Point 1 and Point 2. If a value cannot be obtained due to dereferencing a `nullptr` pointer, write `nullptr` (but assume the program does not stop).

|       |  `a`  |  `*b` | `**c` | `*g`  | `*f`  |
|-------|-------|-------|-------|-------|-------|
|Point 1|       |       |       |       |       |
|Point 2|       |       |       |       |       |



```{admonition} Answer
:class: dropdown
|       |  `a`  |  `*b` | `**c` | `*g`  | `*f`  |
|-------|-------|-------|-------|-------|-------|
|Point 1|   1   |   1   |   1   |`nullptr`|   5   |
|Point 2|   2   |   6   |   6   |   11  |   6   |
```

**Question 10 in Fall 2022 Midterm Exam [Challenging]**

A Vtuber is an online entertainer who posts videos on Vtube. A Vtuber will have followers on Vtube. As a programmer from Vtube, you are asked to implement a class for Vtuber. The class definition and description are described below.

```{code-block} cpp
#include <string>
using namespace std;
class Follower {
 private:
  string name;
  int age;

 public:
  Follower(const string& _name, int _age) {
    name = name_;
    age = age_;
  }
  string get_name() const { return name; }
  int get_age() const { return age; }
};
class Vtuber {
 private:
  // Vtuber Name
  string name;
  // Follower array with a variable size, each element should be a dynamically
  // allocated object of class Follower.
  Follower** followers;
  // The size of follower array.
  int follower_max;
  // Number of followers
  int follower_num;

 public:
  Vtuber(const string& _name);
  ~Vtuber();
  void insert_follower(const string& follower_name, int follower_age);
  void remove_follower(const string& follower_name);
};

```

Specifically, Vtuber's followers member variable is an array of pointers, each pointer pointing to a `Follower` object. The following graph illustrates it.

```{figure} ./images/followers.png
```

1. Implement the constructor for `Vtuber`. Vtuber `name` should be initialized by `_name`, and `follower_max` should be initialized to 2. In addition, you should allocate an array called `followers` using `new`, with an initial size of 2 (the value of `follower_max`). Every element in this array should be a pointer to an object of class `Follower` and initialize all these pointers to `NULL`.

    ```{code-block} cpp 
    Vtuber::Vtuber (const string& _name) {
    ```

    ````{admonition} Answer
    :class: dropdown

    ```{code-block} cpp
    Vtuber::Vtuber(const string& _name) {
      name = _name;
      follower_max = 2;
      follower_num = 0;
      followers = new Follower*[follower_max];
      for (int i = 0; i < follower_max; i++) {
        followers[i] = NULL;
      }
    }
    ```
    ````

2. Every Vtuber in `Vtube` can get new followers or lose their current followers. This is implemented by two methods: `insert_follower` and `remove_follower`. Now you are asked to implement these two methods:

    1. For insert_follower, a follower name and follower age are given. You need to create a dynamically allocated object of `Follower` and insert it into the followers array (in the first available location), using `new` operator. If the array is full, you should double `follower_max`, allocate a new follower array, and move all the data into this `new` array, and insert the `new` follower. Write the code below.

        ```{code-block} cpp
        void Vtuber::insert_follower(const string& follower_name,
        int follower_age) {

        ```

        ````{admonition} Answer
        :class: dropdown
        ```{code-block} cpp 
        void Vtuber::insert_follower(const string& follower_name, int follower_age) {
          follower_num++;
          for (int i = 0; i < follower_max; i++) {
            if (followers[i] == NULL) {
              followers[i] = new Follower(follower_name, follower_age);
              return;
            }
          }
          Follower** new_followers = new Follower*[2 * follower_max];
          for (int i = 0; i < follower_max; i++) {
            new_followers[i] = followers[i];
            new_followers[i + follower_max] = NULL;
          }
          new_followers[follower_max] = new Follower(follower_name, follower_age);
          delete[] followers;
          followers = new_followers;
          follower_max *= 2;
          return;
        }
        ```

        ````


    2. For `remove_follower`, a follower name is given. If there is any follower in the array matching the name, you should remove it and free its memory using `delete`. You can assume the follower names are all unique.

        ```{code-block} cpp
        void Vtuber::remove_follower(const string& follower_name) {
        ```

        ````{admonition} Answer
        :class: dropdown
        ```{code-block} cpp
        void Vtuber::remove_follower(const string& follower_name) {
          for (int i = 0; i < follower_max; i++) {
            if (followers[i] == NULL)  // 3 marks on skipping NULL members
              continue;
            if (followers[i]->get_name() == follower_name) {  // 1 mark
              follower_num--;                                 // 1 mark
              delete followers[i];                            // 2 mark
              followers[i] = NULL;                            // 1 mark
              break;
            }
          }
          return;
          }
        ```
        ````

3. Implement the destructor for the `Vtuber` class. You should free all the dynamically allocated objects using `delete`. Remember to be consistent with your previous implementation, as the entire program should not trigger any segmentation fault.

    ```{code-block} cpp
    Vtuber::~Vtuber() {
    ```

    ````{admonition} Answer
    :class: dropdown
    ```{code-block} cpp
    Vtuber::~Vtuber() {
      for (int i = 0; i < follower_max; i++) {
        delete followers[i];  // delete NULL is safe;
      }
      delete[] followers;
    }
    ```

    ````

