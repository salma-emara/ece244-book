# Exercises

Many of these exercises are taken from past exams of ECE 244 Programming Fundamentals courses at University of Toronto. The solutions are provided in the answer boxes.

Headings in this page classify the exercises into different categories: **[Easy]**, **[Intermediate]**, and **[Challenging]**. I suggest you start by easy exercises and work your way up to the challenging ones.

**Question 10 in Fall 2022 Final Exam [Challenging]**

Thanks to your previous implementation of the VTuber, it became an instant modern classic. With great popularity comes greater responsibility. Now there are more than 300,000 VTubers streaming on the MeTube, and your engineering manager asks you to implement a data structure that allows users to quickly lookup whether a specific Vtuber is currently live-streaming. 

A native solution would be using an array of 300,000 entries, with each entry holding a boolean variable indicating whether the corresponding Vtuber is live-streaming or not. However, there are two major problems: 

1. Users can only query the database with Vtubers' names, not some internal ids.
2. Only ~20% of totls Vtubers are streaming at any given time, so most array enteris are inactive. However, you'd like to maintain a lookup time that is approximately $O(n)$.

Now, you suddenly recall that in ECE 244 you learned the hash table, which resolves collisions with chaining. The hash table would suit your needs perfectly. Even better, you can use an existing linked list implementation written by your new colleague.

The following is the class declaration of the linked list. Assume that it works correctly and encapsulates all the operations your hash table may need. Read it carefully, as you will need it to build your VTubers hash table later. Remember, it will not allocate any list node automatically, and only the destructor will deallocate list node memory.


In progress!