# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 7 in Fall 2021 Midterm Exam [Easy]**

Consider the class definition shown below. Assume that `iostream` and `string` are included, and that the `std namespace` is used. Also assume that the class is correctly implemented.

```{code-block} cpp
class Book {
 public:
  Book() { cout << "A new book is added." << endl; }
  Book(string s) {
    cout << "Book " << s << " is added." << endl;
    name = s;
  }
  ~Book() { cout << "Book " << name << " is removed." << endl; }

 private:
  string name = "ECE244";
};

```

What is the output of the following main function?

```{code-block} cpp
Book* b1;

int main() {
  Book b2;
  Book* b3 = new Book("Pride and Prejudice");

  if (true) {
    b1 = new Book();
    Book b4("Wuthering heights");
    delete b3;
    Book* b5 = new Book[2];
  }

  delete b1;
  return 0;
}

```

```{admonition} Answer
:class: dropdown
<pre>
A new book is added.
Book Pride and Prejudice is added.
A new book is added.
Book Wuthering heights is added.
Book Pride and Prejudice is removed.
A new book is added.
A new book is added.
Book Wuthering heights is removed.
Book ECE244 is removed.
Book ECE244 is removed.
</pre>

**Explanation**
<pre>
A new book is added. 
</pre>
declaring `b2` calls the default constructor
<pre>
Book Pride and Prejudice is added.
</pre>
`new` calls the second constructor
<pre>
A new book is added.
</pre>
`new` calls default constructor for `b1`
<pre>
Book Wuthering heights is added.
</pre>
`b4` declaration calls the second constructor
<pre>
Book Pride and Prejudice is removed.
</pre>
`delete b3` would call the destructor for what `b3` is pointing at.
<pre>
A new book is added.
A new book is added.
</pre>
`new Book[2]` calls the default constructor twice.
<pre>
Book Wuthering heights is removed.
</pre>
`b4` goes out of scope and destructor is called.
<pre>
Book ECE244 is removed.
</pre>
`delete b1` would call the default destructor. 
<pre>
Book ECE244 is removed.
</pre>
Default destructor for `b2` is called as we return from `main`, and `b2` goes out of scope.

We don't have `delete b5`, and hence the destructor is not called for the two-element array. 
```

**Question 1 in Fall 2022 Midterm Exam [Easy]**

Consider the following C++ program. There are three statements in the main function: A, B, and C. Which of these three statements will trigger compile-time errors?

```{code-block} cpp
class ECE244 {
 private:
  int num_student;
  int num_TA;
  int get_num_instructor();

 public:
  int num_instructor;
  int get_num_student();
  int get_num_TA();
};

int main() {
  ECE244 year2022;
  int num_student = year2022.num_student;              // Statement A
  int num_TA = year2022.get_num_TA();                  // Statement B
  int num_instructor = year2022.get_num_instructor();  // Statement C
  return 0;
}
```

```{admonition} Answer
:class: dropdown
<pre>
A, C
</pre>

`get_num_TA()` and `get_num_instructor()` both of those function members are private, and you cannot access them outside the class.
```

In progress!