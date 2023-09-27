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
n: 4 bytes
size: 4 bytes
q: 4 bytes
i: 4 bytes
Total: 16 bytes

**Heap**
`n` is 1, `size` is 2
The loop iterates 3 times, each time it allocates 2 integers. 
Total is 6 * 4 bytes = 24 bytes.
```

In progress!