# What about Object-Oriented Programming?

In the early days of computing, programming was indeed simpler than it is today, but it was far from straightforward, especially given the limitations of the hardware and software tools available at the time. As the computational speed and power improved, developers were able to create increasingly sophisticated programs. This growing complexity, coupled with the expanding range of problems that computers were being used to solve, led to the development of new programming languages and best practices. These developments were driven by a desire to create code that is not only less prone to errors or bugs but also more readable, *modular*, and easily extensible, facilitating collaboration among multiple developers and allowing for future enhancements. Recall that a modular program is one that is broken down into separate functional parts, for example, functions in a C program. Other important goals included improving code performance, making it easier to reason about, and increasing its reusability. This evolution of needs and goals led to the emergence of various programming paradigms.

A programming paradigm is a way of thinking about and organizing code. It's a style or *philosophy* of programming. Different paradigms are suitable for different types of problems, and most programming languages support one or more paradigms.

For example, while learning C programming language in [Snefru](https:://www.learningc.org) or APS 105: Computer Fundamentals, you were using *functional programming paradigm*. In this book, you will be learning *object-oriented programming paradigm* using C++ programming language.

## Why learn object-oriented programming?

Object-oriented programming provides a different way of framing and solving problems. It allows you to better organize larger projects by breaking them into smaller chunks that can be solved by creating *objects*. Developers define what are these objects: their properties and what can we do to them. Object-oriented programming: 

1. Improves *modularity* of code, which allows you to build more complex code. Recall 
2. Improves reusability of your code as code of objects can be easily used in other parts of the program or in other programs
3. Can make it easier to extend programs
4. Makes programs easier to maintain and troubleshoot/debug
5. Makes it easier for teams to collaborate or large projects

## What is object-oriented programming?

Let's try differentiating *functional* and *object-oriented* programming paradigms. In any program, you will have some data, for example variables storing **height** of a building or **color** of a car, and behavior or operation, for example, functions that **increase** the speed of a car or **calculate** the surface area of a building exposed to wind. 

Let's solve the problem of finding the area of a rectangle using functional and object-oriented programming. In functional programming, our *data* would be the length, height of the rectangle and a *behavior* or *operation* can be calculating the area of a rectangle. In C, we can store length and width in variables, and write a function to calculate the area. We can write a C program as follows:

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

However, in object-oriented programming, the data and behavior would be in one entity, i.e. the length, width and calculateArea operation would be in a *class* called `Rectangle`. It would look like the following code, but you still did not learn the specifics of this code, so don't panic.

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

In short, functional programming focus on functions and keep the data (or variables) and behavior (or functions) separate. However, in object-oriented programming, the program is organized around objects that have both data and behavior. 

## How can we use object-oriented programming?

This is what we answer throughout this book.

Let's get started!