# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 16 in Fall 2021 Final Exam [Intermediate]**

For each code snippet, specify the worst case complexity using the Big-O notation. 


1. 
    ```{code-block} cpp
    for (int i = 0; i < n; i++) {
      for (int j = 0; j * j < n; j++) {
        // some code with o(1)
      }
    }
    ```
    ```{admonition} Answer
    :class: dropdown
    Think of it as $n \times (j^2 < n \rightarrow j < \sqrt{n} = ) \sqrt{n} = n^\frac{3}{2}$

    $O(n^\frac{3}{2})$
    ```
2.  
    ```{code-block} cpp
    for (int i = 0; i < n; i++) {
      for (int j = 0; j * j < 1000000; j++) {
        // some code with O(1)
      }
    }
    ```
    ```{admonition} Answer
    :class: dropdown
    Think of it as $n \times 1000000 = n$

    $O(n)$
    ```
3. 
    ```{code-block} cpp
    for(int i = 1; i < n ; i = i*2){
      for(int j = 0; j < n; j++){
        // some code with O(1)
      }
    }
    ```
    ```{admonition} Answer
    :class: dropdown
    The outer loop goes from 1, 2, 4, 8, 16 ...

    To reach $n$, this takes $\log(n)$ steps.

    Think of it as $\log(n) \times n$

    $O(n\log(n))$
    ```

**Question 17 in Fall 2021 Final Exam [Intermediate]**

Two students were asked to write a recursive function that given a positive integer `n`, computes $2^n$. Amy wrote the following function:

```{code-block} cpp
int Amy(int n) {
  if (n == 0) {
    return 1;
  } else {
    return Amy(n - 1) + Amy(n - 1);
  }
}
```

John wrote the following function:

```{code-block} cpp
int John(int n) {
  if (n == 0) {
    return 1;
  } else {
    return (2 * John(n - 1));
  }
}
```

Answer the following question about code written by Amy and John.

1. Is Amy's function correct (does it compute and return $2^n$)?

    ```{admonition} Answer
    :class: dropdown
    Yes
    ```

2. Is John's function correct (does it compute and return $2^n$)?

    ```{admonition} Answer
    :class: dropdown
    Yes
    ```

3. What is the worst-case complexity of Amy's function using Big-O notation?

    ```{admonition} Answer
    :class: dropdown
    $O(2^n)$
    ```

4. What is the worst-case complexity of John's function using Big-O notation?

    ```{admonition} Answer
    :class: dropdown
    $T(n) = T(n - 1) + c$

    $T(n) = T(n - 2) + 2c$
    
    $O(n)$
    ```

In progress!