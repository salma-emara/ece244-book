# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 9 in Fall 2021 Final Exam [Intermediate]**

Write a recursive function that replaces each element of an array of positive integers with its **prefix sum**. The prefix sum of an element is the sum of the element and all the elements that are at smaller indices than it. For example, for the 4-element array, `int arr[] = {1, 2, 3, 4};`, the function replaces the elements of the array to be `{1, 3, 6, 10}`. 

The function has the following prototype:

```{code-block} cpp
void prefixsum(int* arr, int left, int right, int psum);
```

and is initially invoked for an array `A` as follows: `prefix(arr, 0, n-1, 0);`.

````{admonition} Answer
:class: dropdown

```{code-block} cpp
void prefixsum(int* arr, int left, int right, int psum) {
  if (left > right)
    return;
  psum += arr[left];
  arr[left] = psum;
  prefixsum(arr, left + 1, right, psum);
}
```

````