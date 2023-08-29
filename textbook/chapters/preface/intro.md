# What about Object-Oriented Programming?

Earlier in the days, code was simple and straightforward. As the computation speed and power of computers improved, developers were able to create more sophisticated programs with time. With the increase in complexity of programs, different programming languages were developed and best practices on how to write code evolved. This was all to suit the needs of developers who want to create code that is **less prone to errors or bugs**, **readable**, **modular** to allow multiple developers to work on the same code and **can be easily extended**. This lead to different *programming paradigms* rising.

Programming paradigms are ways in which we can solve programming problems, organize our code or a programming language. Some programming paradigms can help solve a programming problem more easily than other programming paradigms. This is why we have multiple of them. 

Earlier while learning C programming language in [Snefru](https:://www.learningc.org) or APS 105: Computer Fundamentals, you learned *functional programming paradigm*. In this book, you will be learning *object-oriented programming paradigm* using C++ programming language.

## Why learn object-oriented programming?

Object-oriented programming helps in framing the problem differently. It allows you to better organize larger projects by breaking them into smaller chunks that can be solved by creating *objects*. These objects are entities. Object-oriented programming: 

1. Improves modularity of code, which allows you to build more complex code
2. Improves reusability of your code as code of objects can be easily used to create other objects
3. Can make it easier to extend programs
4. Makes programs easier to maintain and troubleshoot/debug


## What is object-oriented programming?

Let's try differentiating *functional* and *object-oriented* programming paradigms. In any program, you will have some data, for example variables storing **height** of a building or **color** of a car, and behavior, for example, **increasing** the speed of a car or **calculating** the surface area of a building exposed to wind.

Let's solve the problem of finding the area of a rectangle using functional and object-oriented programming. In functional programming, our *data* would be the length, height of the rectangle and a *behavior* can be doing an operation like calculating the area of a rectangle. We can write a program as follows:

**Code**
```{code-block} c
#include <stdio.h>

// Function to calculate area of rectangle
int calculateArea(int length, int width) {
    return length * width;
}

int main() {
    int length = 10;
    int width = 5;
    int area = calculateArea(length, width);
    printf("The area of the rectangle is %d", area);
    return 0;
}
```

However, in object oriented programming, the data and behavior would be in one entity, i.e. the length, width and calculateArea operation would be in an object called the rectangle. It would look like the following code, but you still did not learn the specifics of this code.

**Code**
```{code-block} cpp
#include <iostream>

using namespace std;

// Rectangle class declaration
class Rectangle {
    int length;
    int width;

public:
    // Constructor
    Rectangle(int l, int w) {
        length = l;
        width = w;
    }

    // Member function to calculate area
    int calculateArea() {
        return length * width;
    }
};

int main() {
    // Create a Rectangle object
    Rectangle rect(10, 5);
    int area = rect.calculateArea();
    cout << "The area of the rectangle is " << area;
    return 0;
}
```

In short, functional programming focus on functions and keep the data (or variables) and behavior (functions) separate. However, in object-oriented programming, the program is organized around objected that have both data and behavior. 

## How do program using object-oriented programming?

This is what we answer throughout this book.

Let's get started!